import { useReveal, revealClass } from '../hooks/useReveal'

export default function OrangeSection() {
	const { ref, visible } = useReveal()
	const { ref: imgRef, visible: imgVisible } = useReveal()
	const { ref: tagsRef, visible: tagsVisible } = useReveal()
	return (
		<div ref={ref} className={`self-stretch bg-[#FF7903] pt-[94px] px-[59px] mb-60 mx-[58px] rounded-[45px] ${revealClass(visible, 'up')}`}>
			<div className="flex justify-between items-start self-stretch mb-[216px]">
				<div className="flex flex-col shrink-0 items-center gap-[60px]">
					<span className="text-white text-[40px] w-[436px]">
						torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
						urna
					</span>
					<span className="text-white text-base w-[428px]">
						Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class
						aptent taciti sociosqu ad litora torquent per conubia nostra, per
						inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
					</span>
				</div>
				<div className="flex items-center bg-white w-[615px] py-[18px] mt-4 rounded-[30px] hover-lift hover-warm-glow">
					<div className="hover-img-zoom w-[275px] h-[297px] ml-[17px] rounded-3xl">
						<img
							src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/1iq7ng9a_expires_30_days.png"
							className="w-[275px] h-[297px] rounded-3xl object-fill"
							alt=""
						/>
					</div>
					<div className="flex-1 self-stretch"></div>
					<div className="flex flex-col items-start w-[222px]">
						<span className="text-[#1E1E1E] text-[32px] w-[201px] mb-6">
							Consectetur adipiscing libero
						</span>
						<span className="text-[#1E1E1E] text-sm mb-14">
							Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
							Class aptent taciti sociosqu ad.
						</span>
						<button
							className="flex flex-col items-start bg-[#009EFC] text-left py-[11px] px-[35px] rounded-[180px] border border-solid border-[#FFFFFF78] hover-grow"
							onClick={() => alert('Pressed!')}
						>
							<span className="text-white text-base">Estimer</span>
						</button>
					</div>
					<div className="flex-1 self-stretch"></div>
				</div>
			</div>
			<div ref={imgRef} className={`flex items-start self-stretch mb-[137px] ${revealClass(imgVisible, 'up')}`}>
				<div className="hover-img-zoom w-[243px] h-[241px] mt-3.5 mr-[19px] rounded-[20px]">
					<img
						src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/ok3x4w94_expires_30_days.png"
						className="w-[243px] h-[241px] rounded-[20px] object-fill"
						alt=""
					/>
				</div>
				<div className="hover-img-zoom w-[244px] h-[241px] mt-3.5 rounded-[20px]">
					<img
						src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/4i9e4ez7_expires_30_days.png"
						className="w-[244px] h-[241px] rounded-[20px] object-fill"
						alt=""
					/>
				</div>
				<div className="flex-1 self-stretch"></div>
				<div className="w-[557px]">
					<div className="flex flex-col items-end self-stretch mb-[94px]">
						<span className="text-white text-base text-right w-[261px]">
							Class aptent taciti sociosqu ad litora torquent per conubia nostra,
							per inceptos himenaeos. Curabitur tempus urna at turpis condimentum
							lobortis.
						</span>
					</div>
					<div ref={tagsRef} className={`flex flex-col self-stretch gap-[7px] ${revealClass(tagsVisible, 'up')}`}>
						<div className="flex flex-col items-end self-stretch">
							<div className="flex items-center">
								<button
									className="flex flex-col shrink-0 items-start bg-white text-left py-1.5 px-[13px] mr-[9px] rounded-[180px] border-0 hover-grow"
									onClick={() => alert('Pressed!')}
								>
									<span className="text-black text-base">Innovation</span>
								</button>
								<button
									className="flex flex-col shrink-0 items-start bg-white text-left py-1.5 px-4 mr-[7px] rounded-[180px] border-0 hover-grow"
									onClick={() => alert('Pressed!')}
								>
									<span className="text-black text-base">Piscines sur mesure</span>
								</button>
								<button
									className="flex flex-col shrink-0 items-start bg-white text-left py-1.5 px-4 rounded-[180px] border-0 hover-grow"
									onClick={() => alert('Pressed!')}
								>
									<span className="text-black text-base">Confort et bien-être</span>
								</button>
							</div>
						</div>
						<div className="flex items-center self-stretch gap-[5px]">
							<button
								className="flex flex-col shrink-0 items-start bg-white text-left py-1.5 px-[11px] rounded-[180px] border-0 hover-grow"
								onClick={() => alert('Pressed!')}
							>
								<span className="text-black text-base">Excellence durable</span>
							</button>
							<button
								className="flex flex-col shrink-0 items-start bg-white text-left py-1.5 px-[13px] rounded-[180px] border-0 hover-grow"
								onClick={() => alert('Pressed!')}
							>
								<span className="text-black text-base">
									Design élégant et moderne
								</span>
							</button>
							<button
								className="flex flex-col shrink-0 items-start bg-white text-left py-1.5 px-4 rounded-[180px] border-0 hover-grow"
								onClick={() => alert('Pressed!')}
							>
								<span className="text-black text-base">Entretien professionnel</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
