import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	isError: boolean
	className?: string
}
export default function Input({ isError, className, ...rest }: InputProps) {
	return (
		<input
			className={`rounded-(--radius-button-input) border border-px ${
				isError ? "border-(--color-orange)" : "border-(--color-aqua)"
			} bg-black text-(--secondary-text-color) pl-[29px] ${className ?? ""} `}
			{...rest}
		/>
	)
}
