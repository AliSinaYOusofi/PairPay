import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        
        const filePath = path.join(process.cwd(), "public", "myfile.pdf");
        const fileBuffer = fs.readFileSync(filePath);

        return new NextResponse(fileBuffer, {
            status: 200,
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": 'attachment; filename="myfile.pdf"',
            },
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}
