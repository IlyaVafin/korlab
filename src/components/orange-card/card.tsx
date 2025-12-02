import { ReactNode } from "react"

export default function Card({
	className,
	children,
	variant,
}: {
	children: ReactNode
	className?: string
	variant: "aqua" | "orange"
}) {
	return (
		<>
			{variant === "orange" && (
				<div
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
					className={`bg-(image:--gradient-blue) rounded-(--radius-blocks) pt-[11px] pl-[15px] 
				pr-[15px] pb-[11px] border border-px border-(--color-aqua) + ${
					className ?? ""
				}`}
				>
					{children}
				</div>
			)}
		</>
	)
}
