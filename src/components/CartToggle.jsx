import { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CartToggle = memo(function CartToggle({ count, onClick }) {
    return (
        <div className="cart-toggle-wrapper">
            <div className="cart-toggle__bubble">
                Recojo En<br />🏪 Local
            </div>
            <button
                className="cart-toggle"
                onClick={onClick}
                aria-label="Abrir carrito"
            >
                🛒
                {count > 0 && (
                    <span className="cart-toggle__badge">{count}</span>
                )}
            </button>
        </div>
    );
});

export default CartToggle;
