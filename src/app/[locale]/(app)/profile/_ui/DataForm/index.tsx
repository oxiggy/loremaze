'use client'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useActionState, useEffect, useState } from 'react'
import { profileAction, type ProfileActionState } from '@/app/[locale]/(app)/profile/_ui/DataForm/actions'

type DataFormProps = {
	username: string | null
	website: string | null
}

export const DataForm = (props: DataFormProps) => {
	const [formState, action, pending] = useActionState<ProfileActionState, FormData>(profileAction, {})
	const { username: initUsername, website: initWebsite } = props
	const [username, setUsername] = useState('')
	const [website, setWebsite] = useState('')

	useEffect(() => {
		if (initUsername !== null) setUsername(initUsername)
		if (initWebsite !== null) setWebsite(initWebsite)
	}, [initUsername, initWebsite])

	return (
		<form action={action} className="w-80 flex flex-col gap-4">
			<div className="flex flex-col gap-2">
				<Label htmlFor="username">Username</Label>
				<Input id="username" name="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
			</div>

			<div className="flex flex-col gap-2">
				<Label htmlFor="website">Website</Label>
				<Input id="website" name="website" type="url" value={website} onChange={(e) => setWebsite(e.target.value)} />
			</div>

			{formState?.error && <p className="text-sm text-red-500">{formState.error}</p>}

			{formState?.success && <p className="text-sm text-green-500">Saved!</p>}

			<Button type="submit" disabled={pending}>
				{pending ? 'Saving...' : 'Save'}
			</Button>
		</form>
	)
}
