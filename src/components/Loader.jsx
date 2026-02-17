import { motion } from 'framer-motion';
import { memo } from 'react';

const Loader = memo(function Loader() {
    return (
        <motion.div
            className="loader-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div
                className="loader-screen__symbol"
                animate={{ rotateY: [0, 360] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
                🏮
            </motion.div>
            <div className="loader-screen__text">CHIFA TIAO</div>
            <div className="loader-screen__bar">
                <div className="loader-screen__bar-fill" />
            </div>
        </motion.div>
    );
});

export default Loader;
