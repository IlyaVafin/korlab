import { CSSProperties, ReactNode } from "react"

export default function Card({
	className,
	children,
	variant,
	style
}: {
	children: ReactNode
	className?: string
	variant: "aqua" | "orange" | "mix"
	style?: CSSProperties
}) {
	return (
		<>
			{variant === "orange" && (
				<div
				style={style}
					className={`bg-(image:--gradient-orange) rounded-(--radius-blocks) pt-[11px] pl-[15px] 
				pr-[15px] pb-[11px] border border-px border-(--color-orange) + ${
					className ?? ""
				}`}
				>
					{children}
				</div>
			)}
			{variant === "aqua" && (
				<div
				style={style}
					className={`bg-(image:--gradient-blue) rounded-(--radius-blocks) pt-[11px] pl-[15px] 
				pr-[15px] pb-[11px] border border-px border-(--color-aqua) + ${
					className ?? ""
				}`}
				>
					{children}
				</div>
			)}
			{variant === "mix" && (
				<div
				style={style}
					className={`bg-(image:--gradient-mix) rounded-(--radius-blocks) pt-3.5 pl-3.5 ${
						className ?? ""
					}`}
				>
					{children}
				</div>
			)}
		</>
	)
}
