import { useReveal, revealClass } from '../hooks/useReveal'

export default function WaterSection() {
	const { ref, visible } = useReveal()
	const { ref: cardsRef, visible: cardsVisible } = useReveal()
	const { ref: ctaRef, visible: ctaVisible } = useReveal()
	return (
		<>
			<div ref={ref} className={`flex flex-col items-start self-stretch bg-[url('https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/dgqikyqf_expires_30_days.png')] bg-[length:100%_100%] py-[138px] pr-[59px] mb-[133px] mx-[58px] rounded-[45px] ${revealClass(visible, 'up')}`}>
				<span className="text-white text-[64px] w-[706px] mb-60 ml-[59px]">
					Eau azurée contrastant avec le ciel ivoirien
				</span>
				<div ref={cardsRef} className={`flex items-start self-stretch ml-[59px] ${revealClass(cardsVisible, 'up')}`}>
					<div className="flex flex-1 flex-col items-start bg-white pt-7 mr-[19px] rounded-[30px] hover-lift">
						<div className="flex flex-col items-center relative mb-9 ml-8">
							<img
								src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/o6envb3o_expires_30_days.png"
								className="w-[203px] h-[203px] absolute top-[-28px] right-[-32px] rounded-[30px] object-fill"
								alt=""
							/>
							<img
								src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/zrinfdmv_expires_30_days.png"
								className="w-[146px] h-[203px] absolute top-[-28px] right-[-53px] rounded-[30px] object-fill"
								alt=""
							/>
							<div className="flex flex-col items-start">
								<img
									src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/8c3abrhh_expires_30_days.png"
									className="w-14 h-14 mb-[65px] mr-[258px] rounded-xl object-fill"
									alt=""
								/>
								<span className="text-[#1E1E1E] text-[32px] w-[314px]">
									Conception d'espaces aquatiques élégants et lumineux
								</span>
							</div>
						</div>
						<button
							className="flex flex-col items-start bg-[#009EFC] text-left py-4 px-8 mb-[60px] ml-8 rounded-[10px] border border-solid border-[#FFFFFF78] hover-grow"
							onClick={() => alert('Pressed!')}
						>
							<span className="text-white text-base">fAIRE UNE ESTIMATION</span>
						</button>
					</div>
					<div className="flex flex-1 flex-col items-start bg-white relative pt-[29px] px-[29px] mt-[130px] mr-5 rounded-[30px] hover-lift">
						<div className="flex flex-col items-start self-stretch mb-[53px] gap-[29px]">
							<img
								src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/udgkfbg3_expires_30_days.png"
								className="w-14 h-14 rounded-xl object-fill"
								alt=""
							/>
							<span className="text-[#1E1E1E] text-[32px] ml-1.5">
								Installation d'équipements premium pour piscines modernes
							</span>
						</div>
						<img
							src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/o8wxjlrb_expires_30_days.png"
							className="w-[269px] h-[244px] absolute top-0 right-3.5 object-fill"
							alt=""
						/>
						<img
							src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/chumyogi_expires_30_days.png"
							className="w-[184px] h-[244px] absolute top-0 right-0 object-fill"
							alt=""
						/>
					</div>
					<div className="flex flex-1 flex-col items-start bg-white relative pt-[29px] px-[29px] mt-[130px] rounded-[30px] hover-lift">
						<div className="flex flex-col items-start self-stretch mb-[53px] gap-[29px]">
							<img
								src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/s5pdb6fs_expires_30_days.png"
								className="w-14 h-14 rounded-xl object-fill"
								alt=""
							/>
							<span className="text-[#1E1E1E] text-[32px] ml-1.5">
								Aménagement de piscines élégants et haut de gamme
							</span>
						</div>
						<img
							src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/dgdgodgu_expires_30_days.png"
							className="w-[269px] h-[244px] absolute top-0 right-3.5 object-fill"
							alt=""
						/>
						<img
							src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/0o9cqvdp_expires_30_days.png"
							className="w-[184px] h-[244px] absolute top-0 right-0 object-fill"
							alt=""
						/>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center self-stretch mb-[53px]">
				<span className="text-[#1E1E1E] text-[40px] text-center w-[491px]">
					Sit amet, consectetur adipiscing libero et velit interdum.
				</span>
			</div>
			<div className="flex flex-col items-center self-stretch mb-[71px]">
				<span className="text-[#1E1E1E] text-base text-center w-[487px]">
					Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class
					aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
					himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
				</span>
			</div>
			<div ref={ctaRef} className={`flex flex-col items-center self-stretch mb-[254px] ${revealClass(ctaVisible, 'scale')}`}>
				<div className="flex flex-col items-start bg-[url('https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/qxcefaav_expires_30_days.png')] bg-[length:100%_100%] py-64 px-[396px] rounded-[30px]">
					<div className="flex flex-col items-center">
						<img
							src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/jd3xtg0k_expires_30_days.png"
							className="w-[60px] h-[60px] object-fill animate-float"
							alt=""
						/>
					</div>
				</div>
			</div>
		</>
	)
}
