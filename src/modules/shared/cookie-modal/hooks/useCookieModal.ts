import { useIsClient } from "@/src/shared/hooks/useIsClient"
import { useEffect, useState } from "react"

export const useCookieModal = () => {
	const isClient = useIsClient()
	const [isShow, setIsShow] = useState(false)

	useEffect(() => {
		if (!isClient) return
		async function checkConsent() {
			const savedConsent = localStorage.getItem("mrnet_cookie_is_not_consent")
			if (savedConsent === null) {
				setIsShow(true)
			} else {
				setIsShow(false)
			}
		}
		checkConsent()
	}, [isClient])

	useEffect(() => {
		if (!isClient) return
		localStorage.setItem("mrnet_cookie_is_not_consent", `${isShow}`)
	}, [isShow, isClient])

	return {
		isShow,
		setIsShow,
	}
}
