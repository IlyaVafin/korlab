import { ReactNode } from "react"

interface TypographyProps {
	children: ReactNode
	variant: "description" | "title"
	className?: string
	sizeTitle?: string
	color?: string
	style?: React.CSSProperties
}
export default function Typography({
	children,
	variant,
	className,
	sizeTitle,
	color,
	style
}: TypographyProps) {
	return (
		<>
			{variant === "description" && (
				<p
				style={style}
					className={`${
						color ? `text-${color}` : "text-white"
					} text-[18px] leading-[22px] ${className ?? ""}`}
				>
					{children}
				</p>
			)}
			{variant === "title" && (
				<h3
				style={style}
					className={` ${
						color ? `text-${color}` : "text-white"
					} text-[19px] leading-8 tracking-[5%] uppercase lg:text-[${sizeTitle}] ${
						className ?? ""
					}`}
				>
					{children}
				</h3>
			)}
		</>
	)
}
