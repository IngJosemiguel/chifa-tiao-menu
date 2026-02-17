import { memo, useCallback, useRef } from 'react';

const DishCard = memo(function DishCard({ item, onAdd, isAdded }) {
    const btnRef = useRef(null);

    const handleAdd = useCallback((e) => {
        const btn = btnRef.current;
        if (btn) {
            const rect = btn.getBoundingClientRect();
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = `${e.clientX - rect.left}px`;
            ripple.style.top = `${e.clientY - rect.top}px`;
            btn.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        }
        onAdd(item);
    }, [item, onAdd]);

    return (
        <div className="dish-card">
            {isAdded && (
                <div className="dish-card__added">✓ Agregado</div>
            )}

            <div className="dish-card__info">
                <h3 className="dish-card__name">{item.name}</h3>
                <p className="dish-card__description">{item.description}</p>
            </div>

            <div className="dish-card__footer">
                <div className="dish-card__price">
                    <span>S/ </span>{item.price.toFixed(2)}
                </div>
                <button
                    ref={btnRef}
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
