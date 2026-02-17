import { motion } from 'framer-motion';

// Golden dragon SVG - facing right
export function DragonRight({ className = '', style = {} }) {
    return (
        <motion.svg
            className={className}
            style={style}
            viewBox="0 0 400 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
        >
            <defs>
                <linearGradient id="goldGradR" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#F0D96E" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.25" />
                </linearGradient>
            </defs>
            {/* Dragon body - sinuous S-curve */}
            <path
                d="M320,80 C340,60 360,70 350,90 C340,110 310,100 300,120 
           C290,140 310,150 330,140 C350,130 370,150 350,170 
           C330,190 290,180 280,200 C270,220 290,240 310,230
           C330,220 350,240 340,260 C330,280 300,270 280,290
           C260,310 280,340 300,330 C320,320 340,340 320,360
           C300,380 270,370 260,390 C250,410 270,430 280,420
           C290,410 310,430 290,450"
                stroke="url(#goldGradR)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
            />
            {/* Dragon head */}
            <path
                d="M310,70 C330,50 360,55 355,80 C370,60 380,75 365,90
           C375,85 380,95 368,100 C355,105 340,95 330,85 L320,80"
                stroke="url(#goldGradR)"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
            />
            {/* Eye */}
            <circle cx="345" cy="72" r="3" fill="#D4AF37" opacity="0.4" />
            {/* Whiskers */}
            <path d="M365,90 C380,85 390,80 395,70" stroke="url(#goldGradR)" strokeWidth="1.5" fill="none" />
            <path d="M360,95 C375,95 385,92 393,85" stroke="url(#goldGradR)" strokeWidth="1.5" fill="none" />
            {/* Horns */}
            <path d="M340,55 C335,40 340,30 350,25" stroke="url(#goldGradR)" strokeWidth="2" fill="none" />
            <path d="M350,58 C350,42 358,32 365,28" stroke="url(#goldGradR)" strokeWidth="2" fill="none" />
            {/* Spine details */}
            <path d="M300,120 C290,115 285,110 288,105" stroke="url(#goldGradR)" strokeWidth="1.5" fill="none" />
            <path d="M280,200 C270,195 265,190 268,185" stroke="url(#goldGradR)" strokeWidth="1.5" fill="none" />
            <path d="M280,290 C270,285 265,280 268,275" stroke="url(#goldGradR)" strokeWidth="1.5" fill="none" />
            <path d="M260,390 C250,385 245,380 248,375" stroke="url(#goldGradR)" strokeWidth="1.5" fill="none" />
            {/* Claws */}
            <path d="M330,140 C340,145 345,155 340,160" stroke="url(#goldGradR)" strokeWidth="1.5" fill="none" />
            <path d="M310,230 C320,235 325,245 320,250" stroke="url(#goldGradR)" strokeWidth="1.5" fill="none" />
            <path d="M300,330 C310,335 315,345 310,350" stroke="url(#goldGradR)" strokeWidth="1.5" fill="none" />
            {/* Cloud wisps */}
            <path d="M250,150 C240,145 230,150 235,155 C225,152 220,158 230,162 C225,165 230,172 240,168" stroke="url(#goldGradR)" strokeWidth="1.2" fill="none" opacity="0.5" />
            <path d="M230,300 C220,295 210,300 215,305 C205,302 200,308 210,312 C205,315 210,322 220,318" stroke="url(#goldGradR)" strokeWidth="1.2" fill="none" opacity="0.4" />
            {/* Tail flames */}
            <path d="M290,450 C280,460 270,455 275,445" stroke="url(#goldGradR)" strokeWidth="2" fill="none" />
            <path d="M290,450 C300,460 295,470 285,465" stroke="url(#goldGradR)" strokeWidth="2" fill="none" />
            <path d="M290,450 C285,465 290,475 295,470" stroke="url(#goldGradR)" strokeWidth="1.5" fill="none" />
        </motion.svg>
    );
}

// Golden dragon SVG - facing left (mirrored)
export function DragonLeft({ className = '', style = {} }) {
    return (
        <motion.svg
            className={className}
            style={{ ...style, transform: `${style.transform || ''} scaleX(-1)`.trim() }}
            viewBox="0 0 400 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
        >
            <defs>
                <linearGradient id="goldGradL" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#F0D96E" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.25" />
                </linearGradient>
            </defs>
            <path
                d="M320,80 C340,60 360,70 350,90 C340,110 310,100 300,120 
           C290,140 310,150 330,140 C350,130 370,150 350,170 
           C330,190 290,180 280,200 C270,220 290,240 310,230
           C330,220 350,240 340,260 C330,280 300,270 280,290
           C260,310 280,340 300,330 C320,320 340,340 320,360
           C300,380 270,370 260,390 C250,410 270,430 280,420
           C290,410 310,430 290,450"
                stroke="url(#goldGradL)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
            />
            <path
                d="M310,70 C330,50 360,55 355,80 C370,60 380,75 365,90
           C375,85 380,95 368,100 C355,105 340,95 330,85 L320,80"
                stroke="url(#goldGradL)"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
            />
            <circle cx="345" cy="72" r="3" fill="#D4AF37" opacity="0.4" />
            <path d="M365,90 C380,85 390,80 395,70" stroke="url(#goldGradL)" strokeWidth="1.5" fill="none" />
            <path d="M360,95 C375,95 385,92 393,85" stroke="url(#goldGradL)" strokeWidth="1.5" fill="none" />
            <path d="M340,55 C335,40 340,30 350,25" stroke="url(#goldGradL)" strokeWidth="2" fill="none" />
            <path d="M350,58 C350,42 358,32 365,28" stroke="url(#goldGradL)" strokeWidth="2" fill="none" />
            <path d="M300,120 C290,115 285,110 288,105" stroke="url(#goldGradL)" strokeWidth="1.5" fill="none" />
            <path d="M280,200 C270,195 265,190 268,185" stroke="url(#goldGradL)" strokeWidth="1.5" fill="none" />
            <path d="M280,290 C270,285 265,280 268,275" stroke="url(#goldGradL)" strokeWidth="1.5" fill="none" />
            <path d="M260,390 C250,385 245,380 248,375" stroke="url(#goldGradL)" strokeWidth="1.5" fill="none" />
            <path d="M330,140 C340,145 345,155 340,160" stroke="url(#goldGradL)" strokeWidth="1.5" fill="none" />
            <path d="M310,230 C320,235 325,245 320,250" stroke="url(#goldGradL)" strokeWidth="1.5" fill="none" />
            <path d="M300,330 C310,335 315,345 310,350" stroke="url(#goldGradL)" strokeWidth="1.5" fill="none" />
            <path d="M250,150 C240,145 230,150 235,155 C225,152 220,158 230,162 C225,165 230,172 240,168" stroke="url(#goldGradL)" strokeWidth="1.2" fill="none" opacity="0.5" />
            <path d="M230,300 C220,295 210,300 215,305 C205,302 200,308 210,312 C205,315 210,322 220,318" stroke="url(#goldGradL)" strokeWidth="1.2" fill="none" opacity="0.4" />
            <path d="M290,450 C280,460 270,455 275,445" stroke="url(#goldGradL)" strokeWidth="2" fill="none" />
            <path d="M290,450 C300,460 295,470 285,465" stroke="url(#goldGradL)" strokeWidth="2" fill="none" />
            <path d="M290,450 C285,465 290,475 295,470" stroke="url(#goldGradL)" strokeWidth="1.5" fill="none" />
        </motion.svg>
    );
}

// Decorative cloud pattern
export function CloudPattern({ className = '', style = {} }) {
    return (
        <svg className={className} style={style} viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M20,40 C15,35 10,38 15,42 C8,40 5,44 12,47 C8,49 12,54 20,50 
           C25,55 35,52 38,48 C42,52 52,50 50,45 C55,47 58,42 52,40 
           C56,37 52,32 47,35 C44,30 35,32 38,38 C35,35 28,34 30,40 Z"
                stroke="#D4AF37"
                strokeWidth="1"
                fill="none"
                opacity="0.15"
            />
            <path
                d="M120,35 C115,30 108,33 113,37 C106,35 103,40 110,42 
           C106,44 110,50 118,46 C122,50 132,48 134,44 C138,47 146,45 144,41 
           C149,43 152,38 146,36 C149,33 145,28 140,31 C137,27 129,29 132,34 Z"
                stroke="#D4AF37"
                strokeWidth="1"
                fill="none"
                opacity="0.12"
            />
            <path
                d="M170,42 C167,38 162,40 165,44 C160,42 158,46 163,48 C160,50 164,54 170,52 
           C174,55 182,53 183,50 C186,52 192,50 190,47 C194,48 196,44 192,43 Z"
                stroke="#D4AF37"
                strokeWidth="1"
                fill="none"
                opacity="0.1"
            />
        </svg>
    );
}

// Ornamental frame border
export function OrnamentalBorder({ className = '', style = {} }) {
    return (
        <svg className={className} style={style} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10,10 L30,10 C35,10 35,15 30,15 L20,15 L20,30 C20,35 15,35 15,30 L15,15 L10,15 C5,15 5,10 10,10 Z"
                stroke="#D4AF37"
                strokeWidth="1.5"
                fill="none"
                opacity="0.2"
            />
            <path
                d="M15,12 C18,8 20,8 23,12"
                stroke="#D4AF37"
                strokeWidth="1"
                fill="none"
                opacity="0.15"
            />
            <circle cx="22" cy="22" r="2" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.15" />
        </svg>
    );
}
