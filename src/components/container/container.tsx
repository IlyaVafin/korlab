import { ReactNode } from "react"

export default function Container({ children, className }: { children: ReactNode, className?: string }) {
	return (
		<div className={'max-w-[1408px] ml-auto mr-auto mb-0 mt-0 max-[1200px]:pr-5 max-[1200px]:pl-5 ' + (className ?? "")}>
			{children}
		</div>
	)
}
