import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
	interface Session extends DefaultSession {
		provider?: string
		providerAccountId?: string
		user: NonNullable<DefaultSession['user']> & {
			name: string
		}
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		provider?: string
		providerAccountId?: string
	}
}
