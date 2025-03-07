import  React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
    metadataBase: new URL("https://pair-pay.vercel.app"),
    title: {
        default: "PairPay - Track transactions between two Across Multiple Currencies",
        template: "%s | PairPay",
    },
    description:
        "PairPay helps you track transactions between two people across multiple currencies, providing clear insights into who paid what and when.",
    keywords: [
        "expense tracker",
        "shared expenses",
        "multiple currencies",
        "financial app",
        "money management",
        "split expenses",
        "transaction tracker",
        "pdf report"
    ],
    authors: [{ name: "PairPay Team" }],
    creator: "PairPay",
    publisher: "PairPay",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-video-preview": -1,
            "max-snippet": -1,
        },
    },
    // Open Graph metadata
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://pair-pay.vercel.app",
        siteName: "PairPay",
        title: "PairPay - Track Shared Expenses Across Multiple Currencies",
        description:
            "PairPay helps you track transactions between two people across multiple currencies, providing clear insights into who paid what and when.",
        images: [
            {
                url: "https://pair-pay.vercel.app/og-image.png", // Create this image (1200x630px recommended)
                width: 1200,
                height: 630,
                alt: "PairPay - Track transactions between multiple currencies",
            },
        ],
    },
    // Twitter metadata
    twitter: {
        card: "summary_large_image",
        title: "PairPay - Track Shared Expenses Across Multiple Currencies",
        description:
            "PairPay helps you track transactions between two people across multiple currencies.",
        images: ["https://pair-pay.vercel.app/og-image.png"],
        creator: "@HeBuildss",
    },
    // App metadata for mobile
    applicationName: "PairPay",
    appleWebApp: {
        capable: true,
        title: "PairPay",
        statusBarStyle: "default",
    },
    manifest: "https://pair-pay.vercel.app/manifest.json",
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-16x16.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-16x16.png", sizes: "192x192", type: "image/png" },
            { url: "/favicon-16x16.png", sizes: "512x512", type: "image/png" },
        ],
        apple: [
            { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
        ],
        other: [
            {
                rel: "mask-icon",
                url: "/safari-pinned-tab.svg",
                color: "#4F46E5",
            },
        ],
    },
    // Verification for search engines
    verification: {
        google: "your-google-site-verification-code", // Replace with your verification code
        yandex: "your-yandex-verification-code", // If applicable
        bing: "your-bing-verification-code", // If applicable
    },
    // Alternate languages if you support multiple languages
    alternates: {
        canonical: "https://pair-pay.vercel.app",
        languages: {
            "en-US": "https://pair-pay.vercel.app",
        },
    },
    category: "finance",
};

export default function RootLayout({
    children,
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
                <Toaster />

                {/* JSON-LD structured data for rich results */}
                <Script
                    id="schema-structured-data"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            name: "PairPay",
                            applicationCategory: "FinanceApplication",
                            operatingSystem: "Android",
                            offers: {
                                "@type": "Offer",
                                price: "0",
                                priceCurrency: "USD",
                            },
                            description:
                                "PairPay helps you track transactions between two people across multiple currencies, providing clear insights into who paid what and when.",
                            aggregateRating: {
                                "@type": "AggregateRating",
                                ratingValue: "4.8",
                                ratingCount: "1024",
                            },
                        }),
                    }}
                />
            </body>
        </html>
    );
}
