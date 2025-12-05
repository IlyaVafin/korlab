"use client"

import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: "aqua" | "mix"
}
export default function Button({ children, variant, ...rest }: ButtonProps) {
	return (
		<button
			{...rest}
			className={
				variant === "aqua"
					? "bg-(--color-aqua) text-[14px] font-medium uppercase w-full rounded-(--radius-button-input) h-9"
					: "bg-(image:--gradient-mix) text-[20px] font-medium uppercase w-full rounded-(--radius-button-input) h-[52px]"
			}
		>
			{children}
		</button>
	)
}
