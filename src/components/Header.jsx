import { useEffect, useState } from 'react'
import { useReveal, revealClass } from '../hooks/useReveal'

export default function Header() {
	const { ref, visible } = useReveal()
	const [onLightBackground, setOnLightBackground] = useState(false)

	useEffect(() => {
		const hero = document.getElementById('hero')
		if (!hero) return
		const updateHeaderTone = () => setOnLightBackground(window.scrollY > hero.offsetHeight - 96)
		updateHeaderTone()
		window.addEventListener('scroll', updateHeaderTone, { passive: true })
		return () => window.removeEventListener('scroll', updateHeaderTone)
	}, [])

	const textTone = onLightBackground ? 'text-black' : 'text-white'
	const headerSurface = 'bg-transparent'
	const handleClick = (e, targetId) => {
		e.preventDefault()
		const target = document.getElementById(targetId)
		if (!target) return
		const offset = 96
		window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' })
	}
	const goHome = () => window.scrollTo({ top: 0, behavior: 'smooth' })
	return (
		<header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${headerSurface}`}>
			<div ref={ref} className={`flex justify-between items-center self-stretch gap-3 py-4 px-4 md:px-[58px] ${revealClass(visible, 'down')}`}>
				<div className="flex shrink-0 items-center gap-2.5">
					<img
						src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/cil8hnkl_expires_30_days.png"
						className="w-9 h-9 rounded-[18px] object-fill"
						alt=""
					/>
					<img
						src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/rium10rt_expires_30_days.png"
						className="w-9 h-9 rounded-[18px] object-fill"
						alt=""
					/>
				</div>
				<div className={`hidden md:flex shrink-0 items-center py-[7px] px-10 rounded-[180px] border backdrop-blur-md ${onLightBackground ? 'bg-black/5 border-black/10' : 'bg-[#FFFFFF3B] border-white'}`}>
					<div className="flex shrink-0 items-center mr-[21px] gap-[17px]">
						<a href="#a-propos" className={`${textTone} text-sm no-underline transition-colors duration-200 hover:text-[#009EFC]`} onClick={(e) => handleClick(e, 'a-propos')}>
							A propos
						</a>
						<a href="#services" className={`${textTone} text-sm no-underline transition-colors duration-200 hover:text-[#009EFC]`} onClick={(e) => handleClick(e, 'services')}>
							Nos services
						</a>
					</div>
					<button type="button" onClick={goHome} className="mr-5 rounded-[180px]" aria-label="Retour à l'accueil">
						<img
							src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/7p16clld_expires_30_days.png"
							className="w-[145px] h-[38px] rounded-[180px] object-fill"
							alt="Retour à l'accueil"
						/>
					</button>
					<div className="flex shrink-0 items-center gap-[18px]">
						<a href="#realisations" className={`${textTone} text-sm no-underline transition-colors duration-200 hover:text-[#009EFC]`} onClick={(e) => handleClick(e, 'realisations')}>
							Nos realisations
						</a>
						<a href="#faq" className={`${textTone} text-sm no-underline transition-colors duration-200 hover:text-[#009EFC]`} onClick={(e) => handleClick(e, 'faq')}>
							FAQ
						</a>
					</div>
				</div>
				<button
					className={`flex shrink-0 items-center text-left py-2 px-4 md:px-[26px] rounded-[180px] border-0 hover-grow ${onLightBackground ? 'bg-black text-white' : 'bg-[#FFFFFF6E] text-white'}`}
					onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
				>
					<span className="text-white text-base">contact</span>
				</button>
			</div>
	</header>
	)
}
