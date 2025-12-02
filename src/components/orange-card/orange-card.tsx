import { ReactNode } from "react"

export default function OrangeCard({
	className,
	children,
}: {
	children: ReactNode
	className?: string
}) {
	return (
		<div
			className={`bg-(image:--gradient-orange) rounded-(--radius-blocks) pt-[11px] pl-[15px] 
				pr-[15px] pb-[11px] border border-px border-(--color-orange) + ${className ?? ""}`}
		>
			{children}
		</div>
	)
}
