"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export default function ResetPasswordForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const router = useRouter();

    useEffect( () => {
        const email = localStorage.getItem("email");
        if (!email) {
            router.push("/reset_password")
        }
    })
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

    const checkEmailExists = async (email) => {
        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password: "checkingIfUserExists123!", // This password is intentionally wrong
            });

            if (
                error &&
                (error.message.includes("Invalid login credentials") ||
                    error.message.includes("Email not confirmed"))
            ) {
                return true;
            } else if (error && error.message.includes("User not found")) {
                return false;
            }

            return true;
        } catch (error) {
            console.error("Error checking if email exists:", error);
            return true;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate email
        const error = validateEmail(email);
        if (error) {
            setEmailError(error);
            return;
        }

        setIsLoading(true);
        try {
            
            const emailExists = await checkEmailExists(email);

            if (!emailExists) {
                toast.error("Account not found", {
                    description: "No account exists with this email address.",
                });
                setIsLoading(false);
                return;
            }

            // Since you don't have an SMTP server, we'll simulate the password reset process
            // In a real application, you would use the following code:
            /*
            const { error } = await supabase.auth.resetPasswordForEmail(
                email,
                {
                    redirectTo: `${window.location.origin}/update-password`,
                }
            );

            if (error) {
                throw error;
            }
            */


            localStorage.setItem("email", email);

            router.push("/update_password");
        } catch (error) {
            console.error("Error resetting password:", error);
            toast.error("Failed to send reset email", {
                description:
                    error instanceof Error
                        ? error.message
                        : "An unknown error occurred",
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
