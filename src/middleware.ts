import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { updateSession } from '@/lib/supabase-middleware'

type Middleware = (req: NextRequest) => NextResponse | Promise<NextResponse> | void

export function composeMiddleware(...middlewares: Middleware[]) {
	return async function (req: NextRequest) {
		for (const mw of middlewares) {
			const result = await mw(req)
			if (result instanceof NextResponse) {
				return result
			}
		}
		return NextResponse.next()
	}
}

const I18nMiddleware = createI18nMiddleware({
	locales: ['en', 'ru'],
	defaultLocale: 'en',
	urlMappingStrategy: 'rewrite',
})

export const middleware = composeMiddleware(I18nMiddleware, updateSession)

export const config = {
	matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
}
