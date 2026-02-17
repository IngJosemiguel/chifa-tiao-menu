import { memo } from 'react';

const WhatsAppButton = memo(function WhatsAppButton() {
    return (
        <a
            className="whatsapp-btn"
            href="https://wa.me/51997864853"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
        >
            💬
        </a>
    );
});

export default WhatsAppButton;
