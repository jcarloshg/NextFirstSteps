import { NextResponse } from "next/server"

export async function GET(request: Request) {

    return NextResponse.json({
        method: 'GET',
        counter: 10,
    });

}

export async function POST(request: Request) {

    return NextResponse.json({
        method: 'POST',
        counter: 10,
    });

}