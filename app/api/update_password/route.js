import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";
export async function POST(req) {
    
    const { password, confirmPassword } = await req.json();

    console.log(password, 'req.json()')
    try {
        if (! password  || ! confirmPassword) {
            return NextResponse.json(
                { message: "Insufficient data provided" },
                { status: 400 }
            );
        }

        else if (password !== confirmPassword) {
            return NextResponse.json(
                { error: "Passwords do not match" },
                { status: 400 }
            );
        }

        else if (password.length < 6 || confirmPassword.length < 6) {
            return NextResponse.json(
                { error: "Password must be at least 6 characters long" },
                { status: 400 }
            );
        }
        
        let email = 'tinayousofiali@gmail.com'
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
            password,
        });

        if (error) {
            console.log("how can you do that", error)
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
}
