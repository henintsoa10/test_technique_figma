import { useReveal, revealClass } from '../hooks/useReveal'

export default function Projects() {
	const { ref, visible } = useReveal()
	const { ref: imgRef, visible: imgVisible } = useReveal()
	return (
		<div ref={ref} id="realisations" className={`flex items-start self-stretch mb-[136px] mx-[58px] ${revealClass(visible, 'up')}`}>
			<div className="flex flex-col items-start w-[371px] mt-[31px]">
				<div className="flex flex-col items-start self-stretch mb-[101px] gap-9">
					<span className="text-[#1E1E1E] text-[32px] w-[323px]">
						Découvrez nos différents projets réalisés afin de satisfaire nos clients.
					</span>
					<span className="text-[#1E1E1E] text-base">
						Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class
						aptent taciti sociosqu ad litora torquent per conubia nostra, per
						inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
					</span>
				</div>
				<div className="flex items-center gap-[13px]">
					<img
						src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/mn8cpyou_expires_30_days.png"
						className="w-12 h-12 rounded-[31px] object-fill hover-grow"
						alt=""
					/>
					<img
						src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/0y9bjwk2_expires_30_days.png"
						className="w-12 h-12 rounded-[31px] object-fill hover-grow"
						alt=""
					/>
				</div>
			</div>
			<div className="flex-1 self-stretch"></div>
			<div ref={imgRef} className={`hover-img-zoom w-[417px] h-[417px] mr-[19px] rounded-[30px] ${revealClass(imgVisible, 'left')}`}>
				<img
					src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/jm7v44b2_expires_30_days.png"
					className="w-[417px] h-[417px] rounded-[30px] object-fill"
					alt=""
				/>
			</div>
			<div className={`hover-img-zoom w-[417px] h-[417px] rounded-[30px] ${revealClass(imgVisible, 'right')}`}>
				<img
					src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/tsds6g3f_expires_30_days.png"
					className="w-[417px] h-[417px] rounded-[30px] object-fill"
					alt=""
				/>
			</div>
		</div>
	)
}
