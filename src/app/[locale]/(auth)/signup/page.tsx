import { SignupForm } from '@/app/[locale]/(auth)/signup/_ui/SignupForm'
import Link from 'next/link'

export default function Page() {
	return (
		<div className="p-10">
			<h1>
				<span className="text-4xl font-bold">Sign up</span>
				<br />
				<span className="text-base text-muted-foreground">
					Already have an account?{' '}
					<Link href="/signin" className="font-semibold text-foreground hover:underline">
						Log in
					</Link>
				</span>
			</h1>
			<div className="h-12" />
			<SignupForm />
		</div>
	)
}
