'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LanguageSelect } from '@/components/LanguageSelect/LanguageSelect'
import { cn } from '@/lib/utils'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Layout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname()
	const { data: session } = useSession()

	return (
		<div className="flex flex-col min-h-screen py-2">
			<header className="h-12 px-2 flex items-center gap-4 border-b">
				<Link className="text-xl font-bold leading-0" href="/">
					Loremaze
				</Link>
				<nav className="grow flex items-center gap-4">
					<Link className={cn('text-sm font-normal leading-0 text-muted-foreground hover:text-foreground', { 'text-violet-500 hover:text-violet-500': pathname === '/about' })} href="/about">
						Hello page
					</Link>
				</nav>
				<LanguageSelect />
				{session ? (
					<>
						<div>{session.user?.name}</div>
						<button onClick={() => signOut()}>Logout</button>
					</>
				) : (
					<>
						<button onClick={() => signIn('github')}>GitHub</button>
						<button onClick={() => signIn('discord')}>Discord</button>
					</>
				)}
			</header>
			{children}
		</div>
	)
}
