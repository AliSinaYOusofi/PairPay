"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
    {
        name: "Alex Johnson",
        role: "Frequent Traveler",
        content:
            "PairPay has been a game-changer for my travel buddy and me. We used to spend hours figuring out who paid what in different currencies. Now it's all automated!",
        avatar: "AJ",
    },
    {
        name: "Sarah Williams",
        role: "Roommate",
        content:
            "My roommate and I use PairPay to effortlessly track our shared expenses—whether it's groceries, rent, or utilities. The clear summary of who paid what and who owes whom has eliminated all our money hassles!",
        avatar: "SW",
    },
    {
        name: "Michael Chen",
        role: "Travel Companion",
        content:
            "When my friend and I travel together, managing expenses in different currencies used to be a nightmare. With PairPay, we instantly see our totals and balance, making settling up simple and stress-free.",
        avatar: "MC",
    },
];


export default function Testimonials() {
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
                        What Our Users Say
                    </h2>
                    <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                        Join thousands of satisfied users who have simplified
                        their shared expenses
                    </p>
                </motion.div>

                <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <Avatar>
                                            <AvatarImage
                                                src={`/placeholder.svg?height=40&width=40`}
                                                alt={testimonial.name}
                                            />
                                            <AvatarFallback>
                                                {testimonial.avatar}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-medium">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="mt-4 text-muted-foreground">
                                        {testimonial.content}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
