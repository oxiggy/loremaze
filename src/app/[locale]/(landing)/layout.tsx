import Link from 'next/link'
import { LanguageSelect } from '@/components/LanguageSelect/LanguageSelect'
import { createClient } from '@/lib/supabase'

export default async function Layout({ children }: { children: React.ReactNode }) {
	const supabase = await createClient()
	const {
		data: { user },
	} = await supabase.auth.getUser()

	console.log(user, 'supabase user')

	return (
		<div className="flex flex-col min-h-screen py-2">
			<header className="h-12 px-2 flex items-center gap-4 border-b">
				<Link className="text-xl font-bold leading-0" href="/">
					Loremaze
				</Link>
				<nav className="grow flex items-center gap-4">
					<Link className="text-sm font-normal leading-0 text-muted-foreground hover:text-foreground" href="/about">
						Hello page
					</Link>
				</nav>
				<LanguageSelect />
			</header>
			{children}
		</div>
	)
}
