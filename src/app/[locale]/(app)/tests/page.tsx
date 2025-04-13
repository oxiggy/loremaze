import { createClient } from '@/lib/supabase'
import Link from 'next/link'

export default async function Page() {
	const client = await createClient()

	const { data, error } = await client.from('test').select(`
      id,
      titleEn,
      contentEn
    `)

	if (error) {
		throw error
	}

	return (
		<div>
			<p>Tests</p>
			<ol>
				{data.map((item) => (
					<li key={item.id}>
						<Link href={`/tests/${item.id}`}>{item.titleEn}</Link>
					</li>
				))}
			</ol>
		</div>
	)
}
