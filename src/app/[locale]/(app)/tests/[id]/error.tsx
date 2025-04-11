'use client'
import { useRouter } from 'next/navigation'

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	const router = useRouter()

	return (
		<div>
			<h2>Something went wrong!</h2>
			<pre>{JSON.stringify(error, null, 2)}</pre>
			<button
				onClick={() => {
					// reset() // ANCHOR: Reset not working
					// router.refresh() // ANCHOR: Reset not working
					window.location.reload()
				}}
			>
				Try again
			</button>
		</div>
	)
}
