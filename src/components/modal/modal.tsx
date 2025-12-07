"use client"

import { ReactNode, useEffect, useState } from "react"
import Button from "../button/button"
import Card from "../card/card"
import { createPortal } from "react-dom"
import { useIsClient } from "@/src/shared/hooks/useIsClient"

export default function Modal({
	children,
	variantButton,
	textButton,
	onClose,
	variantModal,
	className,
}: {
	children: ReactNode
	variantButton: "aqua" | "mix"
	textButton: string
	onClose: () => void
	variantModal: "aqua" | "mix" | "orange"
	className?: string
}) {
	const isClient = useIsClient()
	if (!isClient) return
	return (
		<>
			{createPortal(
				<div className='flex justify-center '>
					<Card
						className={"fixed z-50 bottom-[68px] w-full " + (className ?? "")}
						variant={variantModal}
					>
						<div className='flex flex-col gap-3 lg:justify-center lg:flex-row lg:items-center'>
							{children}
							<div className='w-[335px]'>
								<Button onClick={onClose} variant={variantButton}>
									{textButton}
								</Button>
							</div>
						</div>
					</Card>
				</div>,
				document.body
			)}
		</>
	)
}
