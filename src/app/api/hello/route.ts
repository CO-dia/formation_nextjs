import { NextResponse } from "next/server";
import { resources } from "../../../../api/data";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET() {
  return NextResponse.json({ resources });
}

export async function POST(request: Request) {
    const data = await request.json();
    return NextResponse.json({ data: "Hello World" });
 }
