'use client'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { signinAction } from '@/components/auth/SigninForm/actions'

export default function SigninForm() {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col gap-2">
				<form action={signinAction} className="w-80 flex flex-col gap-4">
					<div className="flex flex-col gap-2">
						<Label htmlFor="email">Email</Label>
						<Input id="email" name="email" type="email" required />
					</div>

					<div className="flex flex-col gap-2">
						<Label htmlFor="password">Password</Label>
						<Input id="password" name="password" type="password" required />
					</div>

					<Button type="submit">login</Button>
				</form>
			</div>
		</div>
	)
}
