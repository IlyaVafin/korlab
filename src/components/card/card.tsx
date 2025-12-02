import { ReactNode } from "react"

export default function Card({
	className,
	children,
	variant,
}: {
	children: ReactNode
	className?: string
	variant: "aqua" | "orange" | "mix"
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
			{variant === "mix" && (
				<div
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
