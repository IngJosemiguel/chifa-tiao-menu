import { useRef, useEffect, useState } from 'react';

export default function CategoryFilter({ categories, active, setActive }) {
    const scrollRef = useRef(null);
    const activeRef = useRef(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    const updateArrows = () => {
        const el = scrollRef.current;
        if (!el) return;
        setShowLeft(el.scrollLeft > 10);
        setShowRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        el.addEventListener('scroll', updateArrows, { passive: true });
        updateArrows();
        return () => el.removeEventListener('scroll', updateArrows);
    }, []);

    useEffect(() => {
        if (activeRef.current && scrollRef.current) {
            const container = scrollRef.current;
            const pill = activeRef.current;
            const scrollLeft = pill.offsetLeft - container.offsetWidth / 2 + pill.offsetWidth / 2;
            container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        }
    }, [active]);

    const scroll = (dir) => {
        const el = scrollRef.current;
        if (!el) return;
        el.scrollBy({ left: dir * 150, behavior: 'smooth' });
    };

    return (
        <div className="categories-wrapper">
            {showLeft && (
                <button className="categories-arrow categories-arrow--left" onClick={() => scroll(-1)}>
                    ‹
                </button>
            )}

            <nav className="categories" ref={scrollRef}>
                <ul className="categories__list">
                    <li
                        ref={active === 'all' ? activeRef : null}
                        className={`categories__pill categories__pill--all ${active === 'all' ? 'categories__pill--active' : ''}`}
                        onClick={() => setActive('all')}
                    >
                        🍽️ Todos
                    </li>
                    {categories.map((cat) => (
                        <li
                            key={cat.id}
                            ref={active === cat.id ? activeRef : null}
                            className={`categories__pill ${active === cat.id ? 'categories__pill--active' : ''}`}
                            onClick={() => setActive(cat.id)}
                        >
                            <span className="categories__emoji">{cat.icon}</span>
                            {cat.name}
                        </li>
                    ))}
                </ul>
            </nav>

            {showRight && (
                <button className="categories-arrow categories-arrow--right" onClick={() => scroll(1)}>
                    ›
                </button>
            )}
        </div>
    );
}
