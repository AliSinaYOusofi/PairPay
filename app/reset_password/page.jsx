import UpdatePasswordForm from "@/components/ResetPasswordForm";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function ResetPasswordPage() {
    return (
        <div className="container flex h-screen items-center justify-center">
            <Card className="mx-auto w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">
                        Reset Password
                    </CardTitle>
                    <CardDescription>
                        Enter your email address so we can confirm your identity
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <UpdatePasswordForm />
                </CardContent>
            </Card>
        </div>
    );
}
