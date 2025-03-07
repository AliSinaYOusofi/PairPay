"use client";

import { useState, useEffect } from "react";

export default function AppLink({ path, children, className = "" }) {
    const [fallbackTimer, setFallbackTimer] = useState(null);

    // Define your app's URL scheme and fallback URLs
    const appScheme = "pairpay://";
    const webFallbackUrl = "https://pair-pay.vercel.app";
    const playStoreLink =
        "https://play.google.com/store/apps/details?id=com.yourcompany.pairpay"; // Replace with your actual Play Store link

    const handleClick = (e) => {
        e.preventDefault();

        // Check if user is on Android
        const isAndroid = /Android/.test(navigator.userAgent);

        // Create the deep link URL
        const deepLink = `${appScheme}${path}`;

        if (isAndroid) {
            // Set a timer for fallback to Play Store if app doesn't open
            const timer = setTimeout(() => {
                window.location.href = playStoreLink;
            }, 1500); // 1.5 second timeout

            setFallbackTimer(timer);

            // Try to open the app
            window.location.href = deepLink;
        } else {
            // For non-Android devices, just use the web version
            window.location.href = `${webFallbackUrl}${path}`;
        }
    };

    // Clear the timer if component unmounts
    useEffect(() => {
        return () => {
            if (fallbackTimer) {
                clearTimeout(fallbackTimer);
            }
        };
    }, [fallbackTimer]);

    return (
        <a
            href="#"
            onClick={handleClick}
            className={`flex items-center justify-center ${className}`}
        >
            {children}
        </a>
    );
}
