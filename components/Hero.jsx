"use client";

import { motion } from "framer-motion";
import { ArrowRight, CreditCard, DollarSign, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiGoogleplay } from "react-icons/si";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-24 md:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                    <motion.div
                        className="flex flex-col justify-center space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="space-y-2">
                            <motion.h1
                                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                Track Shared Expenses{" "}
                                <span className="text-primary">
                                    Effortlessly
                                </span>
                            </motion.h1>
                            <motion.p
                                className="max-w-[600px] text-muted-foreground md:text-xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                PairPay helps you track transactions between two
                                people across multiple currencies, providing
                                clear insights into who paid what and when.
                            </motion.p>
                        </div>
                        <motion.div
                            className="flex flex-col gap-2 min-[400px]:flex-row"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <Button
                                size="lg"
                                className=" flex items-center gap-3 bg-blue-600 hover:bg-blue-700"
                                onClick={() =>
                                    window.open(
                                        "https://play.google.com/store/apps/details?id=com.alisinayousofi.greenred",
                                        "_blank"
                                    )
                                }
                            >
                                <SiGoogleplay
                                    size={24}
                                    className="text-white"
                                />
                                <span className="text-white font-semibold">
                                    Get it on Google Play
                                </span>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={() =>
                                    document
                                        .getElementById("demo")
                                        .scrollIntoView({ behavior: "smooth" })
                                }
                            >
                                See Demo
                            </Button>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
                            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]" />
                            <motion.div
                                className="absolute left-[10%] top-[20%] rounded-xl bg-white p-4 shadow-lg dark:bg-gray-800"
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                <div className="flex items-center gap-2">
                                    <DollarSign className="h-5 w-5 text-primary" />
                                    <span className="font-medium">
                                        USD Transactions
                                    </span>
                                </div>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    You paid: $245.50
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    You received: $120.00
                                </p>
                            </motion.div>
                            <motion.div
                                className="absolute right-[5%] top-[30%] rounded-xl bg-white p-4 shadow-lg dark:bg-gray-800"
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.7, duration: 0.5 }}
                            >
                                <div className="flex items-center gap-2">
                                    <Euro className="h-5 w-5 text-primary" />
                                    <span className="font-medium">
                                        EUR Transactions
                                    </span>
                                </div>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    You paid: €178.30
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    You received: €95.00
                                </p>
                            </motion.div>
                            <motion.div
                                className="absolute bottom-[20%] left-[30%] rounded-xl bg-white p-4 shadow-lg dark:bg-gray-800"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.9, duration: 0.5 }}
                            >
                                <div className="flex items-center gap-2">
                                    <CreditCard className="h-5 w-5 text-primary" />
                                    <span className="font-medium">
                                        Download Report
                                    </span>
                                </div>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Share transaction history as PDF
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
