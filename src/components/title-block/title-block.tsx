import { ReactNode } from "react"

export default function TitleBlock({
	children,
	className,
}: {
	children: ReactNode
	className?: string
}) {
	return (
		<h2 className={`text-2xl text-white uppercase leading-8 tracking-[5%] lg:text-[32px] lg:leading-[39px] lg:h-16 lg:mb-1.5 ${className ?? ""}`}>
			{children}
		</h2>
	)
}
