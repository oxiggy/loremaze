'use server'

import { createClient } from '@/lib/supabase'
import { redirect } from 'next/navigation'

export type SigninActionState = {
	error?: string
}

export async function signinAction(state: SigninActionState, formData: FormData) {
	const data = {
		email: formData.get('email') as string,
		password: formData.get('password') as string,
	}

	const supabase = await createClient()
	const { error } = await supabase.auth.signInWithPassword(data)

	if (!error) {
		return redirect('/dashboard')
	}

	return { error: error.message }
}
