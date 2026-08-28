import { useReveal, revealClass } from '../hooks/useReveal'

export default function Hero() {
	const { ref: statsRef, visible: statsVisible } = useReveal()
	const { ref: ctaRef, visible: ctaVisible } = useReveal()
	return (
		<>
			<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 px-6 md:px-[58px] pt-24 md:pt-28 mb-12 pointer-events-none">
				<h1 className="text-white text-5xl sm:text-6xl lg:text-8xl leading-[0.95] max-w-[568px] font-normal text-balance">
					Votre piscine sur mesure
				</h1>
				<p className="text-white text-sm sm:text-base leading-relaxed max-w-[279px] md:mt-12">
					Entre Piscinelle et Compass Pools haut de gamme africain, tropical luxe,
					unique sur le marché ivoirien. Pas une piscine française génériques. Une
					ambiance villa luxe Abidjan.
				</p>
			</div>
			<div ref={statsRef} className={`flex flex-wrap items-start gap-5 self-stretch mb-[140px] px-6 md:ml-[58px] md:mr-24 ${revealClass(statsVisible, 'up')}`}>
				<div className="flex flex-col shrink-0 items-start bg-white py-[22px] pl-[11px] pr-[114px] mr-5 rounded-[20px] hover-lift hover-glow">
					<img
						src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/t1tnm5rm_expires_30_days.png"
						className="w-7 h-[31px] mb-[65px] object-fill"
						alt=""
					/>
					<span className="text-[#009EFC] text-5xl mb-3">+435</span>
					<span className="text-[#009EFC] text-base">Lorem Ipsum</span>
				</div>
				<div className="flex flex-col items-start bg-black w-[230px] pt-3 pl-[13px] pr-[19px] rounded-[20px] border border-solid border-white hover-lift">
					<div className="flex justify-between items-center self-stretch mb-[69px]">
						<span className="text-white text-sm w-[100px]">
							Sit amet Dolor Sit
							<br />
							Elit Vulputate
						</span>
						<img
							src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/y3m6dmzv_expires_30_days.png"
							className="w-[29px] h-[29px] object-fill"
							alt=""
						/>
					</div>
					<span className="text-white text-5xl mb-3">+752</span>
					<span className="text-white text-base mb-[26px]">Lorem Ipsum</span>
				</div>
				<div className="flex-1 self-stretch"></div>
				<div ref={ctaRef} className={`flex flex-col shrink-0 items-start bg-[#FFFFFF1A] py-1.5 pl-2 pr-[23px] mt-[182px] rounded-[180px] ${revealClass(ctaVisible, 'left')}`}>
					<div className="flex items-center relative">
						<img
							src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/ck9xvjqp_expires_30_days.png"
							className="self-stretch w-[45px] absolute top-0 bottom-0 left-0 object-fill"
							alt=""
						/>
						<img
							src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/5p30oqs7_expires_30_days.png"
							className="self-stretch w-[45px] absolute top-0 bottom-0 left-[29px] object-fill"
							alt=""
						/>
						<img
							src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/46lbc30w_expires_30_days.png"
							className="w-[45px] h-[45px] ml-[58px] mr-[9px] object-fill"
							alt=""
						/>
						<div className="flex flex-col shrink-0 items-start mr-1 gap-[3px]">
							<span className="text-white text-base font-bold mr-[51px]">+1000</span>
							<span className="text-white text-base font-bold">Client satisfait</span>
						</div>
					</div>
				</div>
			</div>
			<img
				src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/97whbo5y_expires_30_days.png"
				className="self-stretch h-[185px] mb-1.5 ml-[58px] mr-[33px] object-fill"
				alt=""
			/>
		</>
	)
}
