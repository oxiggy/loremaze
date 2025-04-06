import DiscordProvider from 'next-auth/providers/discord'
import GitHubProvider from 'next-auth/providers/github'
import type { JWT } from 'next-auth/jwt'
import type { Account, Session } from 'next-auth'

export const authOptions = {
	providers: [
		DiscordProvider({
			clientId: process.env.DISCORD_CLIENT_ID!,
			clientSecret: process.env.DISCORD_CLIENT_SECRET!,
		}),
		GitHubProvider({
			clientId: process.env.GITHUB_ID!,
			clientSecret: process.env.GITHUB_SECRET!,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,

	callbacks: {
		async jwt({ token, account }: { token: JWT; account?: Account | null }) {
			if (account) {
				token.provider = account.provider
				token.providerAccountId = account.providerAccountId
			}

			return token
		},

		async session({ session, token }: { session: Session; token: JWT }) {
			session.provider = token.provider
			session.providerAccountId = token.providerAccountId
			return session
		},
	},
}
