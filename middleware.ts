// middleware.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { jwtVerify } from "jose" // secure jwt verification

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // USER protected routes (via next-auth session)
  if (pathname.startsWith("/account")) {
    const sessionToken = req.cookies.get("next-auth.session-token") || req.cookies.get("__Secure-next-auth.session-token")
    if (!sessionToken) {
      return NextResponse.redirect(new URL("/login", req.url))
    }
  }

  // ADMIN protected routes (via custom cookie)
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    const token = req.cookies.get("adminToken")?.value
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/account/:path*",
    "/admin/:path*",
  ],
}
