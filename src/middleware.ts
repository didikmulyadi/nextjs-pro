import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

import { i18n } from '@/i18n/dictionaries'

/**
 * A function to get the best language from the client
 * @param request
 */
function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales

  // Use negotiator and intl-localematcher to get best locale from client
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  )

  const locale = matchLocale(languages, locales, i18n.defaultLocale)

  return locale
}

/**
 * nextjs middleware
 * @param request
 */
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const publicFiles = [
    '/manifest.json',
    '/favicon.ico',
    '/global.css',
    '/vercel.svg',
    '/next.svg',
  ]

  console.log({ pathname })
  // ignore public files
  if (publicFiles.includes(pathname)) {
    return
  }

  // Check if there is any supported locale in the pathname
  const hasLocaleInPathname = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  console.log({ hasLocaleInPathname })

  // Redirect if there is no locale
  if (hasLocaleInPathname) {
    const locale = getLocale(request)

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    )
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  /*
   * Match all request paths except for the ones starting with:
   * - api (API routes)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico (favicon file)
   */
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
