import { useEffect, useLayoutEffect, useState } from "react"

export const useIsClient = () => {
  const [isClient, setIsClient] = useState(false)
  useLayoutEffect(() => {
    const checkIsClient = async () => {
      setIsClient(true)
    }
    checkIsClient()
  }, [])
  return isClient
}