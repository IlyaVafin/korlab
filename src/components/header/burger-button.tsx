"use client"

import { useState } from "react"
import { headerLinks } from "./const/header-links"
import Link from "next/link"

export default function BurgerButton() {
	const [isShow, setIsShow] = useState(false)
	return (
		<>
			<button
				onClick={() => setIsShow(prev => !prev)}
				className='h-6 w-7  border-(--color-aqua) border-b-2 border-t-2 min-[375px]:hidden'
			></button>
			{isShow && (
				<ul className='absolute p-4 bg-white top-30 left-1/2 translate-x-[-50%] min-[375px]:hidden'>
					{headerLinks.map(link => (
						<li key={link.label}>
							<Link
								className='text-black uppercase hover:text-(--color-aqua) transition-color duration-300 text-xs tracking-widest'
								href={link.href}
							>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
			)}
		</>
	)
}
