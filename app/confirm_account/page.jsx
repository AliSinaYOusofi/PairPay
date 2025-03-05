import AccountConfirmation from "@/components/ConfirmAccount";

export const metadata = {
    title: "Confirm Your Account | PairPay",
    description:
        "Confirm your PairPay account to start tracking shared expenses across multiple currencies.",
};

export default function ConfirmPage() {
    return (
        <div className="container mx-auto py-8">
            <AccountConfirmation />
        </div>
    );
}
