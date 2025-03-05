import AccountConfirmation from "@/components/ConfirmAccount";
import { Suspense } from "react";
export const metadata = {
    title: "Confirm Your Account | PairPay",
    description:
        "Confirm your PairPay account to start tracking shared expenses across multiple currencies.",
};

export default function page() {
    return (
        <div className="container mx-auto py-8">
            <Suspense fallback={<div>Loading...</div>}>
                <AccountConfirmation />
            </Suspense>
        </div>
    );
}
