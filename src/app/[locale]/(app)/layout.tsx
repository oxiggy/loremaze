import React from 'react'
import { createClient } from '@/lib/supabase'
import { redirect } from 'next/navigation'
import { UserMenu } from '@/app/[locale]/(app)/_ui/UserMenu'

export default async function Layout({ children }: { children: React.ReactNode }) {
	const supabase = await createClient()
	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (!user) {
		redirect('/signin')
	}

	return (
		<div className="min-h-screen min-w-screen has-[#user-menu:hover]:bg-[linear-gradient(to_top_right,_transparent,_rgba(128,185,255,0.2))]">
			<header>
				<UserMenu user={user} />
			</header>
			{children}
		</div>
	)
}
