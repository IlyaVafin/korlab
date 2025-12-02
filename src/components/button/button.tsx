"use client"

import { HTMLAttributes } from "react"

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	variant: "aqua" | "mix"
}
export default function Button({ children, variant, ...rest }: ButtonProps) {
	return (
		<button
			{...rest}
			className={
				variant === "aqua"
					? "bg-(--color-aqua) text-[14px] font-medium uppercase w-full rounded-(--radius-button) h-9"
					: "bg-(image:--gradient-mix) text-[20px] font-medium uppercase w-full rounded-(--radius-button) h-[52px]"
			}
		>
			{children}
		</button>
	)
}
