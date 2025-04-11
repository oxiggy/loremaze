'use client'
import { useActionState } from 'react'
import { signinAction, type SigninActionState } from './actions'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export const SigninForm = () => {
	const [formState, action, pending] = useActionState<SigninActionState, FormData>(signinAction, {})

	return (
		<form action={action} className="w-80 flex flex-col gap-4">
			{!!formState.error && <div className="text-sm text-destructive">{formState.error}</div>}

			<div className="flex flex-col gap-2">
				<Label htmlFor="email">Email</Label>
				<Input id="email" name="email" type="email" required disabled={pending} />
			</div>

			<div className="flex flex-col gap-2">
				<Label htmlFor="password">Password</Label>
				<Input id="password" name="password" type="password" required disabled={pending} />
			</div>

			<Button type="submit" disabled={pending}>
				Login
			</Button>
		</form>
	)
}
