import { createClient } from '@/lib/supabase'
import {DataForm} from '@/app/[locale]/(app)/profile/_ui/DataForm';

export default async function Page() {
	const client = await createClient()
	const { data, error } = await client.from('profiles').select(`
      id,
      username,
      website,
      updatedAt
    `)
		.single()

	if (error) {
		console.log(error)
		throw error
	}

	if (!data) {
		return <div>Loading...</div>
	}

	return (
		<div className='p-4 flex flex-col gap-8'>
			<div>profile</div>
			<div>edit avatar</div>
			<DataForm username={data.username} website={data.website} />
			<div>edit password or email</div>
			<div className='text-sm'>
				updated at: {!!data.updatedAt ? data.updatedAt : 'unknown'}
			</div>
		</div>
	)
}
