import type { ReactNode } from 'react'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
//
import { UserMenu } from '@/components/UserMenu'
import { authOptions } from '@/lib/auth'

export default async function Layout({ children }: { children: ReactNode }) {
	const session = await getServerSession(authOptions)

	if (!session) return redirect('/')

	return (
		<>
			<div className="fixed top-4 right-4">
				<UserMenu />
			</div>
			{children}
		</>
	)
}
