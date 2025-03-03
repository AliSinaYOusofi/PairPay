"use client";

import { motion } from "framer-motion";
import {
    BarChart3,
    FileText,
    Globe,
    RefreshCw,
    Share2,
    Users,
} from "lucide-react";

const features = [
    {
        icon: <Users className="h-6 w-6" />,
        title: "Two-Person Tracking",
        description:
            "Easily track transactions between you and another person, perfect for roommates, couples, or travel buddies.",
    },
    {
        icon: <Globe className="h-6 w-6" />,
        title: "Multi-Currency Support",
        description:
            "Track expenses in different currencies without the hassle of manual conversion.",
    },
    {
        icon: <BarChart3 className="h-6 w-6" />,
        title: "Clear Insights",
        description:
            "See exactly how much each person has paid and received in each currency.",
    },
    {
        icon: <RefreshCw className="h-6 w-6" />,
        title: "Real-Time Balance",
        description:
            "Always know who owes what with automatically updated balances.",
    },
    {
        icon: <FileText className="h-6 w-6" />,
        title: "PDF Export",
        description:
            "Generate and download detailed transaction reports in PDF format.",
    },
    {
        icon: <Share2 className="h-6 w-6" />,
        title: "Easy Sharing",
        description:
            "Share transaction history with your partner with just a few clicks.",
    },
];

export default function Features() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section className="bg-background py-20">
            <div className="container px-4 md:px-6">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        Powerful Features
                    </h2>
                    <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                        PairPay makes tracking shared expenses simple with these
                        powerful features
                    </p>
                </motion.div>
                <motion.div
                    className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm"
                            variants={item}
                        >
                            <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                                {feature.icon}
                            </div>
                            <h3 className="mb-2 text-xl font-bold">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
