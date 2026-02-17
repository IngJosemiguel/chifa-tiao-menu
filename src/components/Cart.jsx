import { motion } from 'framer-motion';

export default function Cart({ items, total, onClose, onUpdateQty, onRemove, onSend }) {
    return (
        <>
            <motion.div
                className="cart-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            />
            <motion.div
                className="cart-panel"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
                <div className="cart-panel__header">
                    <h2 className="cart-panel__title">🥢 Tu Pedido</h2>
                    <button className="cart-panel__close" onClick={onClose}>✕</button>
                </div>

                <div className="cart-panel__items">
                    {items.length === 0 ? (
                        <div className="cart-panel__empty">
                            <div className="cart-panel__empty-icon">🥡</div>
                            <p>Tu pedido está vacío</p>
                            <p style={{ fontSize: '0.8rem', marginTop: 8 }}>Agrega platos desde la carta</p>
                        </div>
                    ) : (
                        items.map(item => (
                            <motion.div
                                key={item.id}
                                className="cart-item"
                                layout
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <div className="cart-item__info">
                                    <div className="cart-item__name">{item.name}</div>
                                    <div className="cart-item__price">S/ {(item.price * item.qty).toFixed(2)}</div>
                                </div>
                                <div className="cart-item__controls">
                                    <button
                                        className="cart-item__btn"
                                        onClick={() => onUpdateQty(item.id, -1)}
                                    >
                                        −
                                    </button>
                                    <span className="cart-item__qty">{item.qty}</span>
                                    <button
                                        className="cart-item__btn"
                                        onClick={() => onUpdateQty(item.id, 1)}
                                    >
                                        +
                                    </button>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>

                {items.length > 0 && (
                    <div className="cart-panel__footer">
                        <div className="cart-panel__subtotal">
                            <span>Subtotal</span>
                            <span>S/ {(total - 1.50).toFixed(2)}</span>
                        </div>
                        <div className="cart-panel__taper">
                            <span>📦 Táper (recojo en local)</span>
                            <span>S/ 1.50</span>
                        </div>
                        <div className="cart-panel__total">
                            <span className="cart-panel__total-label">Total</span>
                            <span className="cart-panel__total-amount">
                                S/ {total.toFixed(2)}
                            </span>
                        </div>
                        <button
                            className="cart-panel__send"
                            onClick={onSend}
                        >
                            📱 Enviar pedido por WhatsApp
                        </button>
                    </div>
                )}
            </motion.div>
        </>
    );
}
