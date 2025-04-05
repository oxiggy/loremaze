'use client'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { GlobeIcon } from 'lucide-react'
import { useChangeLocale, useCurrentLocale } from '@/locales/client'

export const LanguageSelect = () => {
	const changeLocale = useChangeLocale()
	const currentLocale = useCurrentLocale()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="cursor-pointer">
				<GlobeIcon />
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-40">
				<DropdownMenuCheckboxItem checked={currentLocale === 'en'} onClick={() => changeLocale('en')}>
					English
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem checked={currentLocale === 'ru'} onClick={() => changeLocale('ru')}>
					Russian
				</DropdownMenuCheckboxItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
