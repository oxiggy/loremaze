import { UserMenu } from '@/app/[locale]/(app)/_ui/UserMenu'
import type { User } from '@supabase/auth-js'
import { NavLink } from '@/components/NavLink'
import { LanguageSelect } from '@/components/LanguageSelect/LanguageSelect'

type HeaderProps = {
	user: User
}

export default async function Header(props: HeaderProps) {
	const { user } = props

	return (
		<div className="w-full min-h-10 px-4 py-2 flex items-center gap-4 border-b">
			<nav className="grow flex items-center gap-4">
				<NavLink href="/dashboard" activeClassName="text-foreground border-b-2 border-b-blue-500" className="border-b-2 border-transparent text-muted-foreground hover:text-blue-500">
					Dashboard
				</NavLink>
				<NavLink href="/tests" activeClassName="text-foreground border-b-2 border-b-blue-500" className="border-b-2 border-transparent text-muted-foreground hover:text-blue-500">
					Tests
				</NavLink>
			</nav>
			<LanguageSelect />
			<UserMenu user={user} />
		</div>
	)
}
