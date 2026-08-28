import { useReveal, revealClass } from '../hooks/useReveal'

export default function FAQ() {
	const { ref, visible } = useReveal()
	const { ref: faqRef, visible: faqVisible } = useReveal()
	return (
		<div ref={ref} id="faq" className={`flex items-center self-stretch mb-[260px] mx-[58px] gap-5 ${revealClass(visible, 'up')}`}>
			<div className="flex flex-1 flex-col items-start bg-[#FF7903] pt-[41px] rounded-[30px] hover-warm-glow">
				<span className="text-white text-[32px] w-[346px] mb-[23px] ml-[59px]">
					Vous avez des questions ? Nous sommes là pour vous aider .
				</span>
				<span className="text-white text-base w-[410px] mb-[30px] ml-[59px]">
					Consultez les questions les plus fréquemment posées par nos clients. Vous
					avez encore des questions ? Contactez nous directement
				</span>
				<div className="flex flex-col items-center relative mb-[23px] ml-[166px]">
					<img
						src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/8abztva0_expires_30_days.png"
						className="flex-1 w-14 absolute top-0 bottom-0 left-[-107px] object-fill"
						alt=""
					/>
					<img
						src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/xvixf3oh_expires_30_days.png"
						className="flex-1 w-14 absolute top-0 bottom-0 left-[-71px] object-fill"
						alt=""
					/>
					<img
						src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/5s8sf1tv_expires_30_days.png"
						className="flex-1 w-14 absolute top-0 bottom-0 left-[-35px] object-fill"
						alt=""
					/>
					<img
						src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/f37lp3b8_expires_30_days.png"
						className="w-14 h-14 object-fill"
						alt=""
					/>
				</div>
				<span className="text-white text-[13px] w-[330px] mb-12 ml-[59px]">
					Notre service client est disponible du lundi au vendredi de 8h à
					20h30.
					<br />
					<br />
					Délai de réponse moyen : 24 h
				</span>
				<button
					className="flex flex-col items-start bg-white text-left py-[17px] px-9 mb-[70px] ml-[59px] rounded-[180px] border-0 hover-grow hover-warm-glow"
					onClick={() => alert('Pressed!')}
				>
					<span className="text-[#FF7903] text-base">Nous contacter</span>
				</button>
			</div>
			<div ref={faqRef} className={`flex flex-1 flex-col items-center bg-[#1E1E1E] pt-20 rounded-[30px] ${revealClass(faqVisible, 'right')}`}>
				<div className="flex flex-col w-[518px] mb-[125px] gap-[38px]">
					<div className="flex flex-col self-stretch gap-6 group cursor-pointer">
						<div className="flex justify-between items-start self-stretch">
							<span className="text-white text-xl w-[380px] transition-colors duration-200 group-hover:text-[#FF7903]">
								Combien de temps dure la construction d'une piscine ?
							</span>
							<img
								src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/79hch744_expires_30_days.png"
								className="w-9 h-9 rounded-[31px] object-fill transition-transform duration-300 group-hover:rotate-180"
								alt=""
							/>
						</div>
						<div className="self-stretch bg-white h-[1px]"></div>
					</div>
					<div className="flex flex-col self-stretch gap-3.5 group cursor-pointer">
						<div className="flex justify-between items-center self-stretch">
							<span className="text-white text-xl transition-colors duration-200 group-hover:text-[#FF7903]">
								Proposez-vous des piscines sur mesure ?
							</span>
							<img
								src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/46y5thir_expires_30_days.png"
								className="w-9 h-9 rounded-[31px] object-fill transition-transform duration-300 group-hover:rotate-180"
								alt=""
							/>
						</div>
						<div className="self-stretch bg-white h-[1px]"></div>
					</div>
					<div className="flex flex-col self-stretch gap-6 group cursor-pointer">
						<div className="flex justify-between items-start self-stretch">
							<span className="text-white text-xl w-[378px] transition-colors duration-200 group-hover:text-[#FF7903]">
								Quel type de piscine est le plus adapté à mon terrain ?
							</span>
							<img
								src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/78i0x7mv_expires_30_days.png"
								className="w-9 h-9 rounded-[31px] object-fill transition-transform duration-300 group-hover:rotate-180"
								alt=""
							/>
						</div>
						<div className="self-stretch bg-white h-[1px]"></div>
					</div>
					<div className="flex flex-col self-stretch gap-3.5 group cursor-pointer">
						<div className="flex justify-between items-center self-stretch">
							<span className="text-white text-xl transition-colors duration-200 group-hover:text-[#FF7903]">
								Proposez-vous des éclairages LED pour piscine ?
							</span>
							<img
								src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/7phdfutu_expires_30_days.png"
								className="w-9 h-9 rounded-[31px] object-fill transition-transform duration-300 group-hover:rotate-180"
								alt=""
							/>
						</div>
						<div className="self-stretch bg-white h-[1px]"></div>
					</div>
				</div>
			</div>
		</div>
	)
}
