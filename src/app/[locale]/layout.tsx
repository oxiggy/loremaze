import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { getCurrentLocale } from '@/locales/server'
import { I18nProviderClient } from '@/locales/client'
import '../globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

// todo translate metadata
export const metadata: Metadata = {
	title: 'Loremaze',
	description: 'Current project for Loremaze',
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const locale = await getCurrentLocale()

	return (
		<html lang={locale}>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}>
				<I18nProviderClient locale={locale}>{children}</I18nProviderClient>
			</body>
		</html>
	)
}
