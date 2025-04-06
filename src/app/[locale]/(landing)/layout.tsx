import Link from 'next/link'
//
import { LanguageSelect } from '@/components/LanguageSelect/LanguageSelect'
import AuthButton from '@/components/AuthButton/AuthButton'
import { NavLink } from '@/components/NavLink'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col min-h-screen py-2">
			<header className="h-12 px-2 flex items-center gap-4 border-b">
				<Link className="text-xl font-bold leading-0" href="/">
					Loremaze
				</Link>
				<nav className="grow flex items-center gap-4">
					<NavLink href="/about" className="text-sm font-normal leading-0 text-muted-foreground hover:text-foreground" activeClassName="text-violet-500 hover:text-violet-500">
						Hello page
					</NavLink>
				</nav>
				<LanguageSelect />
				<AuthButton />
			</header>
			{children}
		</div>
	)
}
