"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { SiGoogleplay } from "react-icons/si";

export default function CtaSection() {
    return (
        <section className="bg-primary/5 py-20">
            <div className="container px-4 md:px-6">
                <motion.div
                    className="mx-auto max-w-3xl text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        Ready to Simplify Your Shared Expenses?
                    </h2>
                    <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                        Join PairPay today and start tracking your transactions
                        across multiple currencies with ease.
                    </p>

                    <motion.div
                        className="mx-auto mt-8 flex items-center justify-center max-w-md flex-col gap-2 sm:flex-row"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        
                        <Button
                            size="lg"
                            className="mt-4  gap-3 bg-blue-600 hover:bg-blue-700"
                            onClick={() =>
                                window.open(
                                    "https://play.google.com/store/apps/details?id=com.alisinayousofi.greenred",
                                    "_blank"
                                )
                            }
                        >
                            <SiGoogleplay size={24} className="text-white" />
                            <span className="text-white font-semibold">
                                Get it on Google Play
                            </span>
                        </Button>
                    </motion.div>

                    <p className="mt-4 text-sm text-muted-foreground">
                        Totally Free. No credit card required.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
