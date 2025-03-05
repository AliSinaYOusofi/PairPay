"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function ResetPasswordForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const router = useRouter();

    useEffect(() => {
        const email = localStorage.getItem("email");
        if (!email) {
            router.push("/reset_password");
        }
    });
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            return "Email is required";
        }
        if (!emailRegex.test(email)) {
            return "Please enter a valid email address";
        }
        return "";
    };

    const checkEmailAndRequestPasswordReset = async (email) => {
        try {
            const response = await fetch("/api/check_email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await response.json(); // Read response once

            if (!response.ok) {
                throw new Error(data.error || "Unknown error occurred");
            }

            return data
        } catch (error) {
            console.error("Error checking if email exists:", error);
            toast.error("Failed to check email", {
                description: error.message || "An unknown error occurred",
            });
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const error = validateEmail(email);
        if (error) {
            setEmailError(error);
            return;
        }

        setIsLoading(true);
        try {
            const response_data = await checkEmailAndRequestPasswordReset(email);

            console.log(response_data, ' the data')

        } catch (error) {
            console.error("Error resetting password:", error);
            toast.error("Failed to send reset email", {
                description: error.message || "An unknown error occurred",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailError) setEmailError("");
                    }}
                    disabled={isLoading}
                />
                {emailError && (
                    <p className="text-sm text-red-500">{emailError}</p>
                )}
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending Reset Link...
                    </>
                ) : (
                    "Send Reset Link"
                )}
            </Button>
        </form>
    );
}
