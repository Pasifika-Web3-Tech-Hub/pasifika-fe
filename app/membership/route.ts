import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation';
 
export async function GET() {
  return NextResponse.redirect(new URL('/our-services', process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'));
}
