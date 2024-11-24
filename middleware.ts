import { NextRequest, NextResponse } from "next/server";
import supabase from "@/lib/supabase";

export async function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("tad-access-token")?.value;

  if (!accessToken) {
    const url = new URL("/login", req.url);
    return NextResponse.redirect(url);
  }

  const { data, error } = await supabase.auth.getUser(accessToken);

  if (error || !data.user) {
    const url = new URL("/login", req.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], // Protect dashboard and its subpaths
}