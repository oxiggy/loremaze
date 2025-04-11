import { getCurrentLocale } from '@/locales/server'
import { createClient } from '@/lib/supabase'
import { notFound } from 'next/navigation'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params
	const locale = await getCurrentLocale()
	const client = await createClient()

	const { data, error } = await client
		.from('test')
		.select(`
      id,
      ${locale === 'en' ? 'titleEn' : 'titleRu'},
      ${locale === 'en' ? 'contentEn' : 'contentRu'},
      questions: test_question (
        id,
        question (
          id,
          ${locale === 'en' ? 'contentEn' : 'contentRu'},
          answers: question_answer (
            id,
            ${locale === 'en' ? 'contentEn' : 'contentRu'},
            isRight
          )
        )
      )
    `)
		.eq('id', id)
		.maybeSingle()

	if (error) {
		throw error
	}

	if (!data) {
		notFound()
	}

	return (
		<div>
			<h1>Test {id}</h1>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	)
}
