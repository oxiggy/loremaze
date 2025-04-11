import React from 'react'
import { createClient } from '@/lib/supabase'
import { redirect } from 'next/navigation'
import Header from '@/app/[locale]/(app)/_ui/Header'

export default async function Layout({ children }: { children: React.ReactNode }) {
	const supabase = await createClient()
	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (!user) {
		redirect('/signin')
	}

	return (
		<div className="min-h-screen min-w-screen">
			<Header user={user} />
			{children}
		</div>
	)
}
