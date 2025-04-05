'use client'
import { useI18n, useScopedI18n } from '@/locales/client'

export default function Page() {
	const t = useI18n()

	const scopedT = useScopedI18n('hello')

	return (
		<div>
			<h1>{t('hello')}</h1>
			<div>{t('hello.world')}</div>
			<div>{scopedT('world')}</div>
			<div>{t('welcome', { name: <strong>John</strong> })}</div>
		</div>
	)
}
