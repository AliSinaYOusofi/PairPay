"use client";

import { useState, useEffect } from "react";

export default function AppLink({ path, children, className = "" }) {
    const [fallbackTimer, setFallbackTimer] = useState(null);
    const appScheme = "pairpay://";
    const webFallbackUrl = "https://pair-pay.vercel.app";
    const playStoreLink =
        "https://play.google.com/store/apps/details?id=com.alisinayousofi.greenred"

    const handleClick = (e) => {
        e.preventDefault();

        const isAndroid = /Android/.test(navigator.userAgent);

        const deepLink = `${appScheme}${path}`;

        if (isAndroid) {
            const timer = setTimeout(() => {
                window.location.href = playStoreLink;
            }, 1500);

            setFallbackTimer(timer);

            window.location.href = deepLink;
        } else {
            window.location.href = `${webFallbackUrl}${path}`;
        }
    };

    useEffect(() => {
        return () => {
            if (fallbackTimer) {
                clearTimeout(fallbackTimer);
            }
        };
    }, [fallbackTimer]);

    return (
        <button
            href="#"
            onClick={handleClick}
            className={`flex items-center justify-center ${className}`}
        >
            {children}
        </button>
    );
}
