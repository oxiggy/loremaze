import { SigninForm } from '@/app/[locale]/(auth)/signin/_ui/SigninForm'
import Link from 'next/link'

export default function Page() {
	return (
		<div className="p-10">
			<h1>
				<span className="text-4xl font-bold">Sign in</span>
				<br />
				<span className="text-base text-muted-foreground">
					Don’t have an account?{' '}
					<Link href="/signup" className="font-semibold text-foreground hover:underline">
						Sign up
					</Link>
				</span>
			</h1>
			<div className="h-12" />
			<SigninForm />
		</div>
	)
}
