import { useState, useEffect } from 'react'

const useMediaQuery = (mediaQuery: string): boolean => {
	const [isMatch, setIsMatch] = useState<boolean>(false)

	useEffect(() => {
		const list = window.matchMedia(mediaQuery)
		setIsMatch(list.matches)

		const listener = (event: MediaQueryListEvent) => setIsMatch(event.matches)
		list.addEventListener('change', listener)

		return () => list.removeEventListener('change', listener)
	}, [mediaQuery])

	return isMatch
}

export default useMediaQuery
