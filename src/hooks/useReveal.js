import { useEffect, useRef, useState } from 'react'

export function useReveal(options = {}) {
	const ref = useRef(null)
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const el = ref.current
		if (!el) return

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true)
					observer.unobserve(entry.target)
				}
			},
			{ threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
		)

		observer.observe(el)
		return () => observer.disconnect()
	}, [])

	return { ref, visible }
}

export function revealClass(visible, variant = 'up') {
	const base = 'transition-all duration-700 ease-out will-change-transform'
	if (visible) return `${base} opacity-100 translate-x-0 translate-y-0`
	switch (variant) {
		case 'up':
			return `${base} opacity-0 translate-y-8`
		case 'down':
			return `${base} opacity-0 -translate-y-8`
		case 'left':
			return `${base} opacity-0 -translate-x-8`
		case 'right':
			return `${base} opacity-0 translate-x-8`
		case 'scale':
			return `${base} opacity-0 scale-95`
		default:
			return `${base} opacity-0 translate-y-8`
	}
}
