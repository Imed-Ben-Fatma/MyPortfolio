import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static assets, next internals, and common metadata files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico' ||
    pathname === '/profile.jpg'
  ) {
    return NextResponse.next();
  }

  // If user requests '/en', redirect to root '/' for canonical English URL
  if (pathname === '/en') {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  // If user requests root '/', rewrite internally to '/en'
  // This serves English content but keeps '/' in the browser address bar
  if (pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/en';
    return NextResponse.rewrite(url);
  }

  // Handle '/en/projects/...' redirecting to '/projects/...' for canonical URL
  if (pathname.startsWith('/en/projects/')) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace('/en/projects/', '/projects/');
    return NextResponse.redirect(url);
  }

  // Handle '/projects/...' rewriting to '/en/projects/...' internally
  if (pathname.startsWith('/projects/')) {
    const url = request.nextUrl.clone();
    url.pathname = `/en${pathname}`;
    return NextResponse.rewrite(url);
  }

  // Handle '/en/cv' redirecting to '/cv' for canonical URL
  if (pathname === '/en/cv') {
    const url = request.nextUrl.clone();
    url.pathname = '/cv';
    return NextResponse.redirect(url);
  }

  // Handle '/cv' rewriting to '/en/cv' internally
  if (pathname === '/cv') {
    const url = request.nextUrl.clone();
    url.pathname = '/en/cv';
    return NextResponse.rewrite(url);
  }

  // Allow '/fr' paths to proceed normally
  if (pathname === '/fr' || pathname.startsWith('/fr/')) {
    return NextResponse.next();
  }

  // For any other undefined sub-paths on this single-page site, redirect to root
  const url = request.nextUrl.clone();
  url.pathname = '/';
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - profile.jpg (profile picture)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|profile.jpg).*)',
  ],
};
