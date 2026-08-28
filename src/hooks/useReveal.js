import { useEffect, useRef, useState } from 'react'

const defaultObserverOptions = {
	threshold: 0.15,
	rootMargin: '0px 0px -60px 0px',
}

export function useReveal(options = defaultObserverOptions) {
	const ref = useRef(null)
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const el = ref.current
		if (!el || typeof IntersectionObserver === 'undefined') {
			setVisible(true)
			return
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true)
					observer.unobserve(entry.target)
				}
			},
			{ ...defaultObserverOptions, ...options }
		)

		observer.observe(el)
		return () => observer.disconnect()
	}, [options])

	return { ref, visible }
}

export function revealClass(visible, variant = 'up') {
	const base = 'reveal-motion transition-all duration-700 ease-out will-change-transform'
	if (visible) return `${base} opacity-100 translate-x-0 translate-y-0 scale-100`
	switch (variant) {
		case 'down':
			return `${base} opacity-0 -translate-y-8`
		case 'left':
			return `${base} opacity-0 -translate-x-8`
		case 'right':
			return `${base} opacity-0 translate-x-8`
		case 'scale':
			return `${base} opacity-0 scale-95`
		case 'up':
		default:
			return `${base} opacity-0 translate-y-8`
	}
}
