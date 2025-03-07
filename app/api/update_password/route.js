import { supabase } from "@/lib/supabase";

export async function POST(req, res) {
    
    const { password, confirmPassword } = req.json();

    try {
        if (! password  || ! confirmPassword) {
            return NextResponse.json(
                { error: "Insufficient data provided" },
                { status: 400 }
            );
        }
        

        const { error: updateUserError } = await supabase
            .from("users")
            .update({password})
            .eq("email", email)
            .single()
        
        if (updateUserError) {
            return NextResponse.json(
                { message: "Failed to update password" },
                { status: 500 }
            );
        }
    
        const { data, error } = await supabase.auth.updateUser({
            email,
            password,
        });
    
        if (error) {
            return NextResponse.json(
                { message: "Failed to update password" },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: "Password updated successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error updating password:", error);
        return NextResponse.json(
            { message: "Failed to update password" },
            { status: 500 }
        );
    }

    console.log(data, error);
}
