"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    ArrowDownToLine,
    DollarSign,
    Euro,
    PoundSterling,
    JapaneseYenIcon as Yen,
    FileText,
    Share2,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner"

export default function DemoSection() {
    const [downloading, setDownloading] = useState(false);

    const transactions = [
        {
            date: "Mar 3, 2025",
            desc: "Dinner at Luigi's",
            amount: "$45.80",
            paid: "Jhon",
            currency: <DollarSign className="h-4 w-4" />,
            status: "paid",
        },
        {
            date: "March 3, 2025",
            desc: "Movie tickets",
            amount: "€24.00",
            paid: "Alex",
            currency: <Euro className="h-4 w-4" />,
        },
        {
            date: "March 3, 2025",
            desc: "Grocery shopping",
            amount: "£32.15",
            paid: "Jhon",
            currency: <PoundSterling className="h-4 w-4" />,
            status: "paid",
        },
        {
            date: "March 3, 2025",
            desc: "Taxi ride",
            amount: "$12.50",
            paid: "Alex",
            currency: <DollarSign className="h-4 w-4" />,
            status: "received",
        },
        {
            date: "March 3, 2025",
            desc: "Concert tickets",
            amount: "€85.00",
            paid: "Jhon",
            currency: <Euro className="h-4 w-4" />,
            status: "received",
        },
    ];

    const handleDownloadPdfRecord = async () => {
        setDownloading(true);
        try {
            const response = await fetch("/api/download_report");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
    
            const blob = await response.blob();
            
            const url = window.URL.createObjectURL(blob);
            
            const a = document.createElement("a");
            a.style.display = "none";
            a.href = url;
            
            a.download = "report.pdf";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Failed to download record", error);
            toast("Failed to download record", { type: "error" })
        } finally {
            setDownloading(false);
        }
    };

    return (
        <section id="demo" className="bg-muted/50 py-20">
            <div className="container px-4 md:px-6">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        See PairPay in Action
                    </h2>
                    <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                        Track transactions across multiple currencies and
                        generate shareable reports
                    </p>
                </motion.div>

                <motion.div
                    className="mx-auto mt-16 max-w-4xl rounded-xl border bg-card p-6 shadow-lg"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <Tabs defaultValue="dashboard" className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="dashboard">
                                Dashboard
                            </TabsTrigger>
                            <TabsTrigger value="transactions">
                                Transactions
                            </TabsTrigger>
                            <TabsTrigger value="report">PDF Report</TabsTrigger>
                        </TabsList>
                        <TabsContent value="dashboard" className="mt-6">
                            <div className="rounded-lg border bg-background p-6">
                                <h3 className="mb-4 text-xl font-semibold">
                                    Currency Overview
                                </h3>
                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                    <motion.div
                                        className="rounded-lg border bg-card p-4"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: 0.1,
                                            duration: 0.5,
                                        }}
                                    >
                                        <div className="flex items-center gap-2">
                                            <DollarSign className="h-5 w-5 text-primary" />
                                            <span className="font-medium">
                                                USD
                                            </span>
                                        </div>
                                        <div className="mt-3 space-y-1">
                                            <div className="flex justify-between">
                                                <span className="text-sm text-muted-foreground">
                                                    You paid:
                                                </span>
                                                <span className="font-medium">
                                                    $245.50
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-sm text-muted-foreground">
                                                    You received:
                                                </span>
                                                <span className="font-medium">
                                                    $120.00
                                                </span>
                                            </div>
                                            <div className="flex justify-between border-t pt-1">
                                                <span className="text-sm font-medium">
                                                    Balance:
                                                </span>
                                                <span className="font-medium text-red-500">
                                                    -$125.50
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="rounded-lg border bg-card p-4"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: 0.2,
                                            duration: 0.5,
                                        }}
                                    >
                                        <div className="flex items-center gap-2">
                                            <Euro className="h-5 w-5 text-primary" />
                                            <span className="font-medium">
                                                EUR
                                            </span>
                                        </div>
                                        <div className="mt-3 space-y-1">
                                            <div className="flex justify-between">
                                                <span className="text-sm text-muted-foreground">
                                                    You paid:
                                                </span>
                                                <span className="font-medium">
                                                    €178.30
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-sm text-muted-foreground">
                                                    You received:
                                                </span>
                                                <span className="font-medium">
                                                    €95.00
                                                </span>
                                            </div>
                                            <div className="flex justify-between border-t pt-1">
                                                <span className="text-sm font-medium">
                                                    Balance:
                                                </span>
                                                <span className="font-medium text-red-500">
                                                    -€83.30
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="rounded-lg border bg-card p-4"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: 0.3,
                                            duration: 0.5,
                                        }}
                                    >
                                        <div className="flex items-center gap-2">
                                            <PoundSterling className="h-5 w-5 text-primary" />
                                            <span className="font-medium">
                                                GBP
                                            </span>
                                        </div>
                                        <div className="mt-3 space-y-1">
                                            <div className="flex justify-between">
                                                <span className="text-sm text-muted-foreground">
                                                    You paid:
                                                </span>
                                                <span className="font-medium">
                                                    £65.20
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-sm text-muted-foreground">
                                                    You received:
                                                </span>
                                                <span className="font-medium">
                                                    £112.50
                                                </span>
                                            </div>
                                            <div className="flex justify-between border-t pt-1">
                                                <span className="text-sm font-medium">
                                                    Balance:
                                                </span>
                                                <span className="font-medium text-green-500">
                                                    +£47.30
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="rounded-lg border bg-card p-4"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: 0.4,
                                            duration: 0.5,
                                        }}
                                    >
                                        <div className="flex items-center gap-2">
                                            <Yen className="h-5 w-5 text-primary" />
                                            <span className="font-medium">
                                                JPY
                                            </span>
                                        </div>
                                        <div className="mt-3 space-y-1">
                                            <div className="flex justify-between">
                                                <span className="text-sm text-muted-foreground">
                                                    You paid:
                                                </span>
                                                <span className="font-medium">
                                                    ¥12,500
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-sm text-muted-foreground">
                                                    You received:
                                                </span>
                                                <span className="font-medium">
                                                    ¥8,750
                                                </span>
                                            </div>
                                            <div className="flex justify-between border-t pt-1">
                                                <span className="text-sm font-medium">
                                                    Balance:
                                                </span>
                                                <span className="font-medium text-red-500">
                                                    -¥3,750
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="transactions" className="mt-6">
                            <div className="rounded-lg border bg-background p-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-semibold">
                                        Recent Transactions
                                    </h3>
                                </div>

                                <div className="mt-4 space-y-4">
                                    {transactions.map((tx, i) => (
                                        <motion.div
                                            key={i}
                                            className={`flex items-center justify-between rounded-lg border p-4 ${
                                                tx.status === "paid"
                                                    ? "bg-red-50"
                                                    : "bg-green-50"
                                            }`}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                delay: 0.1 * i,
                                                duration: 0.4,
                                            }}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="rounded-full bg-primary/10 p-2 text-primary">
                                                    {tx.currency}
                                                </div>
                                                <div>
                                                    <p className="text-sm text-muted-foreground">
                                                        {tx.date}
                                                    </p>
                                                    <p>{tx.paid}</p>
                                                </div>
                                            </div>
                                            <span className="font-medium">
                                                {tx.amount}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="report" className="mt-6">
                            <div className="rounded-lg border bg-background p-6">
                                <div className="flex flex-col items-center justify-center space-y-4 py-8">
                                    <div className="rounded-full bg-primary/10 p-4 text-primary">
                                        <FileText className="h-10 w-10" />
                                    </div>
                                    <h3 className="text-xl font-semibold">
                                        Transaction Report
                                    </h3>
                                    <p className="max-w-md text-center text-muted-foreground">
                                        Generate a detailed PDF report of all
                                        transactions between you and your
                                        partner, with currency breakdowns and
                                        balance summaries.
                                    </p>
                                    <Button
                                        onClick={handleDownloadPdfRecord}
                                        className="mt-2 gap-2"
                                    >
                                        {downloading ? (
                                            <svg
                                                className="animate-spin h-4 w-4 text-white"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8v8H4z"
                                                ></path>
                                            </svg>
                                        ) : (
                                            <ArrowDownToLine className="h-4 w-4" />
                                        )}
                                        Download PDF Report
                                    </Button>
                                    <div className="mt-4 flex items-center gap-2">
                                        <Share2 className="h-4 w-4 text-muted-foreground" />
                                        <span className="text-sm text-muted-foreground">
                                            Or share directly via email
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </motion.div>
            </div>
        </section>
    );
}
