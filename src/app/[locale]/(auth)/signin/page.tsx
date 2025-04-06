import SigninForm from '@/components/auth/SigninForm'

export default function Page() {
	return (
		<div className="p-10">
			<h1>
				<span className="text-4xl font-bold">Sign in</span>
				<br />
				<span className="text-base text-muted-foreground"> to your account</span>
			</h1>
			<div className="h-20" />
			<SigninForm />
		</div>
	)
}
