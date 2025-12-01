"use client"

import { HTMLAttributes } from "react"

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	variant: "orange" | "aqua"
}
export default function Button({ children, variant, ...rest }: ButtonProps) {
	return (
		<button
			{...rest}
			className={
				variant === "aqua"
					? "bg-(--color-aqua) text-[14px] font-medium uppercase w-full rounded-(--radius-button) h-9"
					: ""
			}
		>
			{children}
		</button>
	)
}
