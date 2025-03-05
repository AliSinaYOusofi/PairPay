"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Loader2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";

export default function AccountConfirmation() {
    const [status, setStatus] = useState("loading");
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const confirmAccount = async () => {
            try {
                // Get the token and type from URL parameters
                const token = searchParams.get("token");
                const type = searchParams.get("type");

                if (!token || !type) {
                    setStatus("error");
                    setErrorMessage(
                        "Invalid confirmation link. Missing parameters."
                    );
                    return;
                }

                // Call the server-side route to verify the token
                const response = await fetch("/api/verify-account", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ token, type }),
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || "Failed to verify account");
                }


                setStatus("success");
                toast.success("Account confirmed successfully!");
            } catch (error) {
                console.error("Error confirming account:", error);
                setStatus("error");
                setErrorMessage(
                    error instanceof Error
                        ? error.message
                        : "An unknown error occurred while confirming your account."
                );
                toast.error("Failed to confirm account");
            }
        };

        confirmAccount();
    }, [searchParams]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center mt-20 p-4"
        >
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold">
                        {status === "loading" && "Confirming Your Account"}
                        {status === "success" && "Account Confirmed!"}
                        {status === "error" && "Confirmation Failed"}
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center text-center">
                    {status === "loading" && (
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center"
                        >
                            <Loader2 className="h-16 w-16 text-primary animate-spin mb-4" />
                            <p className="text-muted-foreground">
                                Please wait while we confirm your account...
                            </p>
                        </motion.div>
                    )}

                    {status === "success" && (
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center"
                        >
                            <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                            <p className="mb-4">
                                Your PairPay account has been successfully
                                confirmed! You can now log in and start tracking
                                your shared expenses.
                            </p>
                            <div className="grid grid-cols-1 gap-4 mt-4 w-full">
                                <div className="bg-muted rounded-lg p-4 flex items-center">
                                    <div className="bg-primary/10 rounded-full p-2 mr-3">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-medium">
                                            Track expenses in multiple
                                            currencies
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-muted rounded-lg p-4 flex items-center">
                                    <div className="bg-primary/10 rounded-full p-2 mr-3">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-medium">
                                            See who paid what and when
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-muted rounded-lg p-4 flex items-center">
                                    <div className="bg-primary/10 rounded-full p-2 mr-3">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-medium">
                                            Generate detailed PDF reports
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {status === "error" && (
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center"
                        >
                            <XCircle className="h-16 w-16 text-red-500 mb-4" />
                            <p className="mb-2 text-red-500 font-medium">
                                We couldn't confirm your account
                            </p>
                            <p className="text-muted-foreground mb-4">
                                {errorMessage ||
                                    "The confirmation link may be invalid or expired."}
                            </p>
                            <div className="bg-muted rounded-lg p-4 w-full text-left">
                                <p className="font-medium mb-2">
                                    What you can do:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                    <li>
                                        Try signing up again with the same email
                                    </li>
                                    <li>
                                        Check if you clicked the correct link
                                        from your email
                                    </li>
                                    
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </CardContent>
                <CardFooter className="flex justify-center">
                    {status === "loading" && (
                        <Button disabled variant="outline" className="w-full">
                            Please wait...
                        </Button>
                    )}

                    {status === "success" && (
                        <Button asChild className="w-full">
                            <Link
                                href="/login"
                                className="flex items-center justify-center"
                            >
                                Continue to Login{" "}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    )}

                    {status === "error" && (
                        <div className="flex flex-col w-full gap-2">
                            <Button asChild variant="outline">
                                <Link href="/">Home</Link>
                            </Button>
                        </div>
                    )}
                </CardFooter>
            </Card>
        </motion.div>
    );
}
