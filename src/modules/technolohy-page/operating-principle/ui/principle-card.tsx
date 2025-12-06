import { ReactNode } from "react"

export default function PrincipleCard({
	children,
	className,
}: {
	children: ReactNode
	className: string
}) {
	return (
		<div
			className={
				"text-white border border-px border-(--color-orange) rounded-(--radius-blocks) " +
				(className ?? "")
			}
		>
			{children}
		</div>
	)
}
