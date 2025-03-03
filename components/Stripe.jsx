"use client";

import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Mock Stripe public key - in a real app, this would be your actual Stripe publishable key
const stripePromise = loadStripe("pk_test_mock_key");

export function Stripe({ children, options, className }) {
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // In a real app, you would make an API call to your backend to create a PaymentIntent
        // and return the client secret
        const mockClientSecret =
            "pi_mock_secret_" + Math.random().toString(36).substring(2, 15);
        setClientSecret(mockClientSecret);
    }, []);

    return (
        <div className={className}>
            {clientSecret && (
                <Elements
                    stripe={stripePromise}
                    options={{
                        clientSecret,
                        appearance: {
                            theme: "stripe",
                        },
                    }}
                >
                    {children}
                </Elements>
            )}
        </div>
    );
}
