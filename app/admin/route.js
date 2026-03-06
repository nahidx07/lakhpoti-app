import { NextResponse } from 'next/server';
// Admin backend logic can be added here
export async function GET() {
  return NextResponse.json({ message: "Admin API Ready" });
}
