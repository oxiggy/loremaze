import { createClient } from '@/lib/supabase'

export default async function Page() {
	const client = await createClient()

	const { data, error } = await client.from('test').select(`
		id,
		titleEn,
		contentEn,
		test_question (
			id,
			question (
				id,
				contentEn
			)
		)
	`)

	if (error) {
		throw error
	}

	return (
		<div>
			<div>dashboard</div>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	)
}
