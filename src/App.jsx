import { useState, useEffect, useCallback, useRef, useMemo, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { categories, menuItems } from './data/menu';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import MenuSection from './components/MenuSection';
import CartToggle from './components/CartToggle';
import WhatsAppButton from './components/WhatsAppButton';
import Loader from './components/Loader';
import './App.css';

// Lazy load heavy component — Cart panel only when needed
const Cart = lazy(() => import('./components/Cart'));

// Pre-compute lowercase names for search (avoids doing it on every keystroke)
const searchableItems = menuItems.map(item => ({
  ...item,
  _searchName: item.name.toLowerCase(),
}));

function App() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('chifa-tiao-cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [cartOpen, setCartOpen] = useState(false);
  const [addedId, setAddedId] = useState(null);
  const addedTimeout = useRef(null);

  // Persist cart — debounced to avoid excessive writes
  const saveTimer = useRef(null);
  useEffect(() => {
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      localStorage.setItem('chifa-tiao-cart', JSON.stringify(cart));
    }, 300);
    return () => clearTimeout(saveTimer.current);
  }, [cart]);

  // Reduce loader time for faster first paint
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const addToCart = useCallback((item) => {
    setCart(prev => {
      const exists = prev.find(c => c.id === item.id);
      if (exists) {
        return prev.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c);
      }
      return [...prev, { ...item, qty: 1 }];
    });
    setAddedId(item.id);
    if (addedTimeout.current) clearTimeout(addedTimeout.current);
    addedTimeout.current = setTimeout(() => setAddedId(null), 1200);
  }, []);

  const updateQty = useCallback((id, delta) => {
    setCart(prev => prev
      .map(c => c.id === id ? { ...c, qty: c.qty + delta } : c)
      .filter(c => c.qty > 0)
    );
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart(prev => prev.filter(c => c.id !== id));
  }, []);

  // Memoize derived state
  const cartSubtotal = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.qty, 0), [cart]);
  const taperCharge = 1.50;
  const cartTotal = useMemo(() => cart.length > 0 ? cartSubtotal + taperCharge : 0, [cartSubtotal, cart.length]);
  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.qty, 0), [cart]);

  // Memoize search — avoids re-filtering on unrelated state changes
  const searchLower = useMemo(() => search.toLowerCase(), [search]);

  const groupedItems = useMemo(() => {
    const filtered = searchableItems.filter(item => {
      const matchSearch = !searchLower || item._searchName.includes(searchLower);
      const matchCategory = activeCategory === 'all' || item.category === activeCategory;
      return matchSearch && matchCategory;
    });

    return categories
      .map(cat => ({
        ...cat,
        items: filtered.filter(item => item.category === cat.id),
      }))
      .filter(cat => cat.items.length > 0);
  }, [searchLower, activeCategory]);

  const sendWhatsApp = useCallback(() => {
    if (cart.length === 0) return;
    let msg = '🥢 *PEDIDO CHIFA TIAO*\n_(Recojo en local)_\n\n';
    cart.forEach(item => {
      msg += `▸ ${item.name} x${item.qty} — S/ ${(item.price * item.qty).toFixed(2)}\n`;
    });
    msg += `\n📦 Táper: S/ ${taperCharge.toFixed(2)}`;
    msg += `\n💰 *TOTAL: S/ ${cartTotal.toFixed(2)}*`;
    window.open(`https://wa.me/51997864853?text=${encodeURIComponent(msg)}`, '_blank');
  }, [cart, cartTotal]);

  const openCart = useCallback(() => setCartOpen(true), []);
  const closeCart = useCallback(() => setCartOpen(false), []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      <Hero />

      <SearchBar search={search} setSearch={setSearch} />

      <CategoryFilter
        categories={categories}
        active={activeCategory}
        setActive={setActiveCategory}
      />

      <main className="dishes-container">
        {groupedItems.length === 0 ? (
          <div className="no-results">
            <div className="no-results__icon">🔍</div>
            <p className="no-results__text">No se encontraron platos</p>
          </div>
        ) : (
          groupedItems.map(cat => (
            <MenuSection
              key={cat.id}
              category={cat}
              items={cat.items}
              addToCart={addToCart}
              addedId={addedId}
            />
          ))
        )}
      </main>

      <footer className="footer">
        <div className="footer__brand">CHIFA TIAO</div>
        <p className="footer__text">© 2026 Chifa Tiao. Todos los derechos reservados.</p>
      </footer>

      <CartToggle count={cartCount} onClick={openCart} />
      <WhatsAppButton />

      <AnimatePresence>
        {cartOpen && (
          <Suspense fallback={null}>
            <Cart
              items={cart}
              total={cartTotal}
              onClose={closeCart}
              onUpdateQty={updateQty}
              onRemove={removeFromCart}
              onSend={sendWhatsApp}
            />
          </Suspense>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
