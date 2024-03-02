"use client";
import React, { useState, useEffect } from 'react';

export default function HeaderShadow() {
    const [isScrolled, setIsScrolled] = useState(false);

    const checkScroll = () => {
        if (!isScrolled && window.scrollY > 16) {
            setIsScrolled(true);
        } else if (isScrolled && window.scrollY <= 16) {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", checkScroll);

        return () => {
            window.removeEventListener("scroll", checkScroll);
        };
    });

    return (
        <div
            className={[
                'fixed',
                isScrolled ? 'top-16' : 'top-20',
                'left-0 z-10 h-32 w-full bg-gradient-to-b from-black from-20% opacity-30',
            ].join(' ')}
        />
    );
}
