'use server'

import { createClient } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'

export type ProfileActionState = {
	error?: string
	success?: boolean
}

export async function profileAction(state: ProfileActionState, formData: FormData) {
	const username = formData.get('username') as string
	const website = formData.get('website') as string

	const supabase = await createClient()
	const {
		data: { user },
		error: userError,
	} = await supabase.auth.getUser()

	if (userError || !user) {
		return { error: 'Unable to get user' }
	}

	const { error } = await supabase.from('profiles').update({ username, website }).eq('id', user.id)

	if (error) {
		return { error: error.message }
	}

	revalidatePath('/profile')
	return { success: true }
}
