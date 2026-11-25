import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const locale = request.cookies.get("innovance-locale")?.value === "fr" ? "fr" : "en";
  const url = request.nextUrl.clone();
  url.pathname = "/" + locale;
  const response = NextResponse.redirect(url);
  response.headers.set("Cache-Control", "private, no-store");
  return response;
}

export const config = { matcher: "/" };
