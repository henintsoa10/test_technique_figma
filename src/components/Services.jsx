import { useReveal, revealClass } from '../hooks/useReveal'

export default function Services() {
	const { ref, visible } = useReveal()
	const { ref: r1, visible: v1 } = useReveal()
	const { ref: r2, visible: v2 } = useReveal()
	const { ref: r3, visible: v3 } = useReveal()
	return (
		<>
			<div id="services" ref={ref} className={`flex flex-col items-center self-stretch mb-[117px] ${revealClass(visible, 'up')}`}>
				<span className="text-[#1E1E1E] text-[40px] text-center w-[710px]">
					Nous concevons, construisons et entretenons des piscines modernes, durables
					et sur mesure
				</span>
			</div>
			<div ref={r1} className={`flex justify-between items-start self-stretch mb-10 ml-[116px] mr-[274px] ${revealClass(v1, 'left')}`}>
				<div className="hover-img-zoom w-[506px] h-[441px] rounded-[30px]">
					<img
						src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/35o3jh9i_expires_30_days.png"
						className="w-[506px] h-[441px] rounded-[30px] object-fill"
						alt=""
					/>
				</div>
				<div className="flex flex-col w-[407px] mt-7 gap-[54px]">
					<div className="flex flex-col items-start self-stretch gap-[46px]">
						<div className="flex flex-col self-stretch gap-9">
							<span className="text-[#1E1E1E] text-[32px]">
								Nous construisons des piscines sur mesure modernes et adaptées
								parfaitement
							</span>
							<span className="text-[#1E1E1E] text-base">
								Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
								Class aptent taciti sociosqu ad litora torquent per conubia nostra,
								per inceptos himenaeos. Curabitur tempus urna at turpis condimentum
								lobortis.
							</span>
						</div>
						<div className="flex items-center gap-[17px] cursor-pointer group">
							<span className="text-[#1E1E1E] text-base transition-colors duration-200 group-hover:text-[#009EFC]">
								Demander une estimation
							</span>
							<img
								src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/vzrb50y9_expires_30_days.png"
								className="w-[37px] h-[37px] rounded-[20px] object-fill transition-transform duration-300 group-hover:translate-x-1"
								alt=""
							/>
						</div>
					</div>
					<div className="self-stretch bg-[#00000047] h-[1px]"></div>
				</div>
			</div>
			<div ref={r2} className={`flex justify-between items-center self-stretch mb-10 ml-[116px] mr-[269px] ${revealClass(v2, 'left')}`}>
				<div className="hover-img-zoom w-[506px] h-[441px] rounded-[30px]">
					<img
						src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/tczem1dm_expires_30_days.png"
						className="w-[506px] h-[441px] rounded-[30px] object-fill"
						alt=""
					/>
				</div>
				<div className="flex flex-col w-[413px] gap-[54px]">
					<div className="flex flex-col items-start self-stretch gap-[46px]">
						<div className="flex flex-col self-stretch gap-9">
							<span className="text-[#1E1E1E] text-[32px]">
								Nous assurons l'entretien et maintenance complète de votre piscine
								régulièrement
							</span>
							<span className="text-[#1E1E1E] text-base">
								Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
								Class aptent taciti sociosqu ad litora torquent per conubia nostra,
								per inceptos himenaeos. Curabitur tempus urna at turpis condimentum
								lobortis.
							</span>
						</div>
						<div className="flex items-center gap-[17px] cursor-pointer group">
							<span className="text-[#1E1E1E] text-base transition-colors duration-200 group-hover:text-[#009EFC]">
								Demander une estimation
							</span>
							<img
								src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/9cuvvz5c_expires_30_days.png"
								className="w-[37px] h-[37px] rounded-[20px] object-fill transition-transform duration-300 group-hover:translate-x-1"
								alt=""
							/>
						</div>
					</div>
					<div className="self-stretch bg-[#00000047] h-[1px]"></div>
				</div>
			</div>
			<div ref={r3} className={`flex justify-between items-start self-stretch mb-[265px] ml-[116px] mr-[291px] ${revealClass(v3, 'left')}`}>
				<div className="hover-img-zoom w-[506px] h-[441px] rounded-[30px]">
					<img
						src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/zhdwk7iv_expires_30_days.png"
						className="w-[506px] h-[441px] rounded-[30px] object-fill"
						alt=""
					/>
				</div>
				<div className="flex flex-col items-start w-[390px] relative mt-[29px]">
					<div className="flex flex-col self-stretch gap-[54px]">
						<div className="flex flex-col items-start self-stretch gap-[46px]">
							<div className="self-stretch h-[229px]"></div>
							<div className="flex items-center gap-[17px] cursor-pointer group">
								<span className="text-[#1E1E1E] text-base transition-colors duration-200 group-hover:text-[#009EFC]">
									Demander une estimation
								</span>
								<img
									src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/bdr4go33_expires_30_days.png"
									className="w-[37px] h-[37px] rounded-[20px] object-fill transition-transform duration-300 group-hover:translate-x-1"
									alt=""
								/>
							</div>
						</div>
						<div className="self-stretch bg-[#00000047] h-[1px]"></div>
					</div>
					<span className="text-[#1E1E1E] text-[32px] absolute top-0 right-0 left-0">
						Nous rénovons et modernisons les piscines existantes selon vos besoins
					</span>
					<span className="text-[#1E1E1E] text-base w-[401px] absolute bottom-[137px] left-0">
						Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class
						aptent taciti sociosqu ad litora torquent per conubia nostra, per
						inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
					</span>
				</div>
			</div>
		</>
	)
}
