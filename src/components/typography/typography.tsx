import { ReactNode } from "react"
export default function Typography({
	children,
	variant,
	className,
	sizeTitle,
}: {
	children: ReactNode
	variant: "description" | "title"
	className?: string
	sizeTitle?: string
}) {
	return (
		<>
			{variant === "description" && (
				<p
					className={`text-white text-[18px] leading-[22px] ${
						className ?? ""
					}`}
				>
					{children}
				</p>
			)}
			{variant === "title" && (
				<h3
					className={`text-white text-[19px] leading-8 tracking-[5%] uppercase lg:text-[${sizeTitle}] ${
						className ?? ""
					}`}
				>
					{children}
				</h3>
			)}
		</>
	)
}
