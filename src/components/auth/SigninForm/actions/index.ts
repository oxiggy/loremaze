'use server'

import { createClient } from '@/lib/supabase'
import { redirect } from 'next/navigation'

export async function signinAction(formData: FormData) {
	const data = {
		email: formData.get('email') as string,
		password: formData.get('password') as string,
	}

	const supabase = await createClient()
	const { error } = await supabase.auth.signInWithPassword(data)

		//console.log('Auth error', error)
	if (error) {
		throw error
	}

	redirect('/dashboard')
}
