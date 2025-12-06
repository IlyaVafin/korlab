import Image from "next/image"
import Link from "next/link"
import { headerLinks } from "./const/header-links"
import BurgerButton from "./burger-button"

export default function Header() {
	return (
		<header className='pt-9 max-[375px]:pl-5 max-[375px]:pr-5'>
			<div className='flex justify-between max-[1200px]:flex-wrap items-center max-[1178px]:justify-center max-[1200px]:gap-8 max-[375px]:justify-between'>
				<div className='flex flex-col min-[375px]:flex-row min-[375px]:gap-14'>
					<Image className="w-full max-w-[185px] h-auto" width={0} height={0} src='/logo.svg' alt='logo' />
					<span className='text-(--color-aqua) mt-3.5'>7 800 600 35 38</span>
				</div>
				<nav>
					<ul className='hidden max-lg:flex-wrap gap-10 max-[780px]:gap-5 items-end h-[42px] min-[375px]:flex max-[700px]:justify-center'>
						{headerLinks.map(link => (
							<li key={link.label}>
								<Link
									className='text-white uppercase hover:text-(--color-aqua) transition-color duration-300 text-xs tracking-widest'
									href={link.href}
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
					<BurgerButton />
				</nav>
			</div>
		</header>
	)
}
