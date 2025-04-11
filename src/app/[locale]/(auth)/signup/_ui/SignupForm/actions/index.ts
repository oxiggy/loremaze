'use server'
import { createClient } from '@/lib/supabase'
import { redirect } from 'next/navigation'

type SignupActionInput = {
	email: string
	password: string
}

export async function signupAction(data: SignupActionInput) {
	const supabase = await createClient()
	const { error } = await supabase.auth.signUp(data)

	if (error) {
		throw error
	}

	redirect('/dashboard')
}
