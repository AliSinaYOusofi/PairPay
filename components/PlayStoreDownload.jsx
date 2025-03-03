"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SiGoogleplay } from "react-icons/si";

export default function AppDownload() {
    return (
        <section className="bg-primary/5 py-20 overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 xl:grid-cols-2 items-center">
                    <motion.div
                        className="flex flex-col justify-center space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Download PairPay for Android
                        </h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                            Track your shared expenses on the go. Download our
                            Android app now and start managing your finances
                            with ease.
                        </p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <Button
                                size="lg"
                                className="mt-4 flex items-center gap-3 bg-blue-600 hover:bg-blue-700"
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
                    </motion.div>
                    <motion.div
                        className="relative flex items-center justify-center h-[500px] md:h-[600px]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <motion.div
                            className="absolute left-0 top-1/2 z-10"
                            initial={{ x: -50, y: -50, rotate: -15 }}
                            whileInView={{ x: 0, y: -100, rotate: -15 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <Image
                                src="https://res.cloudinary.com/dudhf0avt/image/upload/v1740983607/image1_sbmsii.jpg"
                                alt="PairPay App Screenshot 1"
                                width={220}
                                height={440}
                                className="rounded-2xl shadow-lg border-4 border-white dark:border-gray-800"
                            />
                        </motion.div>

                        <motion.div
                            className="absolute z-20"
                            initial={{ y: 50 }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <Image
                                src="https://res.cloudinary.com/dudhf0avt/image/upload/v1740983633/image2_l9wzes.jpg"
                                alt="PairPay App Mockup"
                                width={250}
                                height={500}
                                className="rounded-2xl shadow-lg border-4 border-white dark:border-gray-800"
                            />
                        </motion.div>

                        <motion.div
                            className="absolute right-0 top-1/2 z-10"
                            initial={{ x: 50, y: 50, rotate: 15 }}
                            whileInView={{ x: 0, y: 50, rotate: 15 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <Image
                                src="https://res.cloudinary.com/dudhf0avt/image/upload/v1740983643/image4_btblbn.jpg"
                                alt="PairPay App Screenshot 2"
                                width={220}
                                height={440}
                                className="rounded-2xl shadow-lg border-4 border-white dark:border-gray-800"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
