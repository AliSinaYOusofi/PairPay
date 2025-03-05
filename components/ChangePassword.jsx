"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Loader2, Home } from "lucide-react";
import { toast } from "sonner";

export default function ChangePassword() {
    const [isLoading, setIsLoading] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const router = useRouter();

    const validatePassword = (password) => {
        if (!password) {
            return "Password is required";
        }
        if (password.length < 6) {
            return "Password must be at least 8 characters";
        }
        return "";
    };

    const validateConfirmPassword = (confirmPassword, password) => {
        if (!confirmPassword) {
            return "Please confirm your password";
        }
        if (confirmPassword !== password) {
            return "Passwords do not match";
        }
        return "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate password
        const passwordValidationError = validatePassword(password);
        if (passwordValidationError) {
            setPasswordError(passwordValidationError);
            return;
        }

        // Validate confirm password
        const confirmPasswordValidationError = validateConfirmPassword(
            confirmPassword,
            password
        );
        if (confirmPasswordValidationError) {
            setConfirmPasswordError(confirmPasswordValidationError);
            return;
        }

        setIsLoading(true);
        try {

            setPassword("");
            setConfirmPassword("");

        } catch (error) {
            console.error("Error updating password:", error);
            toast.error("Failed to update password", {
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
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>
                    Update your password to keep your account secure
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input
                            id="new-password"
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                if (passwordError) setPasswordError("");
                            }}
                            disabled={isLoading}
                            placeholder="Enter your new password"
                        />
                        {passwordError && (
                            <p className="text-sm text-red-500">
                                {passwordError}
                            </p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="confirm-password">
                            Confirm New Password
                        </Label>
                        <Input
                            id="confirm-password"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                                if (confirmPasswordError)
                                    setConfirmPasswordError("");
                            }}
                            disabled={isLoading}
                            placeholder="Confirm your new password"
                        />
                        {confirmPasswordError && (
                            <p className="text-sm text-red-500">
                                {confirmPasswordError}
                            </p>
                        )}
                    </div>
                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Updating Password...
                            </>
                        ) : (
                            "Update Password"
                        )}
                    </Button>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                    <Link href="/" className="flex items-center gap-2">
                        <Home size={16} />
                        Return to Home
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
