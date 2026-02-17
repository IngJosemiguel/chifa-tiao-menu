import { memo } from 'react';
import DishCard from './DishCard';

const MenuSection = memo(function MenuSection({ category, items, addToCart, addedId }) {
    return (
        <section>
            <div className="section-header">
                <span className="section-header__emoji">{category.icon}</span>
                <h2 className="section-header__title">{category.name}</h2>
                <div className="section-header__line" />
            </div>

            <div className="dishes-grid">
                {items.map((item) => (
                    <DishCard
                        key={item.id}
                        item={item}
                        onAdd={addToCart}
                        isAdded={addedId === item.id}
                    />
                ))}
            </div>
        </section>
    );
});

export default MenuSection;
