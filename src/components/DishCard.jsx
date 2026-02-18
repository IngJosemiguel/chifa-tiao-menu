import { memo, useCallback, useRef, useState } from 'react';

const DishCard = memo(function DishCard({ item, onAdd, isAdded }) {
    const [appetizer, setAppetizer] = useState('Sopa de Pollo');
    const [selectedSize, setSelectedSize] = useState(item.sizes ? item.sizes[0] : null);

    // Categories that explicitly have the flag or logic
    // Simplified: All main dishes have appetizer except specific small categories
    const hasAppetizer = item.category !== 'dulces' &&
        item.category !== 'bebidas' &&
        item.category !== 'extras' &&
        item.category !== 'porciones' &&
        item.category !== 'sopas' &&
        item.category !== 'entradas' &&
        item.category !== 'especiales';

    const currentPrice = selectedSize ? selectedSize.price : item.price;

    const handleAdd = useCallback((e) => {
        // ... ripple logic ...
        const btn = e.currentTarget;
        const rect = btn.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;
        btn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);

        let finalItem = { ...item, price: currentPrice };

        if (selectedSize) {
            finalItem.name = `${item.name} (${selectedSize.name})`;
        }

        if (hasAppetizer) {
            finalItem.name = `${finalItem.name} (+${appetizer})`;
        }

        onAdd(finalItem);
    }, [item, onAdd, appetizer, hasAppetizer, selectedSize, currentPrice]);

    return (
        <div className="dish-card">
            {isAdded && (
                <div className="dish-card__added">✓ Agregado</div>
            )}

            <div className="dish-card__info">
                <h3 className="dish-card__name">{item.name}</h3>
                <p className="dish-card__description">{item.description}</p>

                {item.sizes && (
                    <div className="dish-card__sizes">
                        <span className="dish-card__sizes-label">Tamaño:</span>
                        <div className="dish-card__sizes-options">
                            {item.sizes.map((size) => (
                                <label
                                    key={size.name}
                                    className={`size-option ${selectedSize.name === size.name ? 'selected' : ''}`}
                                >
                                    <input
                                        type="radio"
                                        name={`size-${item.id}`}
                                        value={size.name}
                                        checked={selectedSize.name === size.name}
                                        onChange={() => setSelectedSize(size)}
                                    />
                                    {size.name}
                                </label>
                            ))}
                        </div>
                    </div>
                )}

                {hasAppetizer && (
                    <div className="dish-card__appetizer">
                        <span className="dish-card__appetizer-label">Elige tu entrada gratis:</span>
                        <div className="dish-card__appetizer-options">
                            <label className={`appetizer-option ${appetizer === 'Sopa de Pollo' ? 'selected' : ''}`}>
                                <input
                                    type="radio"
                                    name={`appetizer-${item.id}`}
                                    value="Sopa de Pollo"
                                    checked={appetizer === 'Sopa de Pollo'}
                                    onChange={() => setAppetizer('Sopa de Pollo')}
                                />
                                🥣 Sopa
                            </label>
                            <label className={`appetizer-option ${appetizer === 'Wantán Frito' ? 'selected' : ''}`}>
                                <input
                                    type="radio"
                                    name={`appetizer-${item.id}`}
                                    value="Wantán Frito"
                                    checked={appetizer === 'Wantán Frito'}
                                    onChange={() => setAppetizer('Wantán Frito')}
                                />
                                🥟 Wantán
                            </label>
                        </div>
                    </div>
                )}
            </div>

            <div className="dish-card__footer">
                <div className="dish-card__price">
                    <span>S/ </span>{currentPrice.toFixed(2)}
                </div>
                <button
                    className="add-btn"
                    onClick={handleAdd}
                    aria-label={`Agregar ${item.name}`}
                >
                    +
                </button>
            </div>
        </div>
    );
});

export default DishCard;
