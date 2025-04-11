'use client'
import type { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type NavLinkProps = {
	className?: string
	activeClassName?: string
	exact?: boolean
	href: string
	children: ReactNode
}

export const NavLink = (props: NavLinkProps) => {
	const pathname = usePathname()
	const isActive = props.exact ? pathname === props.href : pathname.startsWith(props.href)

	return (
		<Link className={cn(props.className, isActive && props.activeClassName)} href={props.href}>
			{props.children}
		</Link>
	)
}
