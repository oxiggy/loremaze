'use client'
import { useRouter } from 'next/navigation'
import { UserIcon } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { signoutAction } from './actions'
import type { User } from '@supabase/auth-js'

type UserMenuProps = {
	user: User
}

export const UserMenu = (props: UserMenuProps) => {
	const router = useRouter()

	const handleSignOut = async () => {
		await signoutAction()
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger id="user-menu" className="fixed top-4 right-4 rounded-full">
				<div className="size-10 rounded-full bg-pink-200 hover:bg-sky-200 flex items-center justify-center">
					<UserIcon />
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>{props.user.email}</DropdownMenuLabel>
				<DropdownMenuItem onClick={() => router.push('/profile')}>Profile</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={handleSignOut}>Sign out</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
