'use server'

import { createClient } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'

export async function signoutAction() {
	const supabase = await createClient()
	await supabase.auth.signOut()

	revalidatePath('/', 'layout')
}