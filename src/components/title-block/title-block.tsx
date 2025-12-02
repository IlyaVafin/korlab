import { ReactNode } from "react"

export default function TitleBlock({
	children,
	className,
	color,
}: {
	children: ReactNode
	className?: string
	color?: string
}) {
	return (
		<h2
			className={`text-2xl ${
				color ? `text-${color}` : `text-white`
			} uppercase leading-8 tracking-[5%] lg:text-[32px] lg:leading-[39px] lg:h-16 lg:mb-1.5 ${
				className ?? ""
			}`}
		>
			{children}
		</h2>
	)
}
