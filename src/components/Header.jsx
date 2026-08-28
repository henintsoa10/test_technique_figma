import { useReveal, revealClass } from '../hooks/useReveal'

export default function Header() {
	const { ref, visible } = useReveal()
	const handleClick = (e, targetId) => {
		e.preventDefault()
		document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
	}
	return (
		<header className="fixed inset-x-0 top-0 z-50 bg-transparent">
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
				<div className="hidden md:flex shrink-0 items-center bg-[#FFFFFF3B] py-[7px] px-10 rounded-[180px] border border-solid border-white">
					<div className="flex shrink-0 items-center mr-[21px] gap-[17px]">
						<a href="#a-propos" className="text-white text-sm no-underline transition-colors duration-200 hover:text-[#009EFC]" onClick={(e) => handleClick(e, 'a-propos')}>
							A propos
						</a>
						<a href="#services" className="text-white text-sm no-underline transition-colors duration-200 hover:text-[#009EFC]" onClick={(e) => handleClick(e, 'services')}>
							Nos services
						</a>
					</div>
					<img
						src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/7p16clld_expires_30_days.png"
						className="w-[145px] h-[38px] mr-5 rounded-[180px] object-fill"
						alt=""
					/>
					<div className="flex shrink-0 items-center gap-[18px]">
						<a href="#realisations" className="text-white text-sm no-underline transition-colors duration-200 hover:text-[#009EFC]" onClick={(e) => handleClick(e, 'realisations')}>
							Nos realisations
						</a>
						<a href="#faq" className="text-white text-sm no-underline transition-colors duration-200 hover:text-[#009EFC]" onClick={(e) => handleClick(e, 'faq')}>
							FAQ
						</a>
					</div>
				</div>
				<button
					className="flex shrink-0 items-center bg-[#FFFFFF6E] text-left py-2 px-4 md:px-[26px] rounded-[180px] border-0 hover-grow"
					onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
				>
					<span className="text-white text-base">contact</span>
				</button>
			</div>
	</header>
	)
}
