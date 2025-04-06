'use client'
import { signIn, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { LogInIcon } from 'lucide-react'
//
import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'

export default function AuthButton() {
	const { data: session } = useSession()

	if (!!session) {
		return <Button onClick={() => redirect('/dashboard')}>Launch the app</Button>
	}

	return (
		<HoverCard>
			<HoverCardTrigger asChild>
				<Button variant="link">
					<span>Login</span>
					<LogInIcon />
				</Button>
			</HoverCardTrigger>
			<HoverCardContent className="w-60">
				<div className="flex items-center justify-center gap-4">
					<Button variant="secondary" onClick={() => signIn('github')}>
						GitHub
					</Button>
					<Button variant="secondary" onClick={() => signIn('discord')}>
						Discord
					</Button>
				</div>
			</HoverCardContent>
		</HoverCard>
	)
}
