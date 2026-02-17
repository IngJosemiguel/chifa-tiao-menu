import { memo } from 'react';
import { motion } from 'framer-motion';

const Hero = memo(function Hero() {
    return (
        <section className="hero">
            {/* Ornamental corners — pure CSS, no JS animation */}
            <div className="hero__ornament hero__ornament--tl" />
            <div className="hero__ornament hero__ornament--tr" />
            <div className="hero__ornament hero__ornament--bl" />
            <div className="hero__ornament hero__ornament--br" />

            {/* Golden Dragons — lazy loaded images */}
            <img
                src="/dragon.png"
                alt=""
                className="hero__dragon hero__dragon--left"
                loading="lazy"
                decoding="async"
            />
            <img
                src="/dragon.png"
                alt=""
                className="hero__dragon hero__dragon--right"
                loading="lazy"
                decoding="async"
            />

            <div className="hero__content">
                <p className="hero__chinese">潮 州 餐 厅</p>

                <motion.h1
                    className="hero__title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
                >
                    CHIFA TIAO
                </motion.h1>

                <p className="hero__subtitle">Nuestra Carta</p>

                <div className="hero__divider" />

                <p className="hero__tagline">
                    Sabor oriental, tradición peruana
                </p>
            </div>

            <div className="hero__scroll-indicator">
                <span>Explorar</span>
                <div className="hero__scroll-arrow" />
            </div>
        </section>
    );
});

export default Hero;
