'use client'
import { signupAction } from './actions'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const formSchema = z
	.object({
		email: z.string().email({ message: 'Invalid email address' }),
		password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
		passwordConfirm: z.string(),
	})
	.refine((data) => data.password === data.passwordConfirm, {
		path: ['passwordConfirm'],
		message: 'Passwords do not match',
	})

type FormValues = z.infer<typeof formSchema>

export const SignupForm = () => {
	const form = useForm<FormValues>({
		mode: 'onChange',
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
			passwordConfirm: '',
		},
	})

	const submit = async (data: FormValues) => {
		const { email, password } = data
		await signupAction({ email, password })
	}

	return (
		<Form {...form}>
			<form className="w-80 flex flex-col gap-4" onSubmit={form.handleSubmit(submit)}>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="" {...field} disabled={form.formState.isSubmitting} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input placeholder="" type="password" {...field} disabled={form.formState.isSubmitting} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="passwordConfirm"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Repeat Password</FormLabel>
							<FormControl>
								<Input type="password" {...field} disabled={form.formState.isSubmitting} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit" disabled={!form.formState.isValid || form.formState.isSubmitting}>
					Sign Up
				</Button>
			</form>
		</Form>
	)
}
