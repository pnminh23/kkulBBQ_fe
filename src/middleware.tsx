import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // 🔑 Lấy token từ header Authorization: Bearer <token>
    const authHeader = request.headers.get('authorization');
    const token = authHeader?.startsWith('Bearer ')
        ? authHeader.split(' ')[1]
        : null;
    console.log('token-header:', token);
    const { pathname } = request.nextUrl;

    // Nếu truy cập /admin mà chưa có token
    if (pathname.startsWith('/admin') && !token) {
        const loginUrl = new URL('/login', request.url);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

// Áp dụng cho tất cả route con của /admin
export const config = {
    matcher: ['/admin/:path*'],
};
