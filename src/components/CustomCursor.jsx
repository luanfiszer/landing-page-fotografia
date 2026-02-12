import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [lensInfo, setLensInfo] = useState({ iso: '', shutter: '', fstop: '' });
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;

        // Move cursor logic
        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });
        };

        // Hover logic
        const handleMouseOver = (e) => {
            const target = e.target.closest('[data-lens-hover]');
            if (target) {
                setIsActive(true);
                // Random values if not provided, for demo purposes if attributes are missing
                const iso = target.getAttribute('data-iso') || 'ISO 400';
                const shutter = target.getAttribute('data-shutter') || '1/250';
                const fstop = target.getAttribute('data-fstop') || 'f/2.8';

                setLensInfo({ iso, shutter, fstop });
            } else {
                setIsActive(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className={`lens-cursor ${isActive ? 'active' : ''}`}
        >
            <div className="lens-corner lens-corner-tl"></div>
            <div className="lens-corner lens-corner-tr"></div>
            <div className="lens-corner lens-corner-bl"></div>
            <div className="lens-corner lens-corner-br"></div>

            <div className={`lens-info ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <span className="font-mono font-bold text-xs">{lensInfo.iso}</span>
                <span className="font-mono text-xs">{lensInfo.fstop}</span>
                <span className="font-mono text-xs">{lensInfo.shutter}</span>
            </div>
        </div>
    );
};

export default CustomCursor;
