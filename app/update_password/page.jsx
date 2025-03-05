import ChangePassword from "@/components/ChangePassword";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function page() {
    return (
        <div className="container flex h-screen items-center justify-center">
            <Card className="mx-auto w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">
                        Create New Password
                    </CardTitle>
                    <CardDescription>
                        Enter your new password below to complete the reset
                        process.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ChangePassword />
                </CardContent>
            </Card>
        </div>
    );
}
