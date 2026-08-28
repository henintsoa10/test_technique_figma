export default function Welcome() {
	return (
		<>
			<div id="a-propos" className="flex justify-between items-start self-stretch mb-[165px] mx-[84px]">
				<span className="text-[#1E1E1E] text-base w-[371px] mt-[15px]">
					Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class
					aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
					himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
				</span>
				<span className="text-[#1E1E1E] text-[40px] w-[476px]">
					Bienvenue sur Ivoire Pool, experts en piscines modernes et durables
				</span>
			</div>
			<div className="flex items-start self-stretch mb-[206px] ml-[58px] mr-[182px]">
				<img
					src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/6h31lnjr_expires_30_days.png"
					className="w-[331px] h-[331px] mt-3 mr-[19px] rounded-[30px] object-fill"
					alt=""
				/>
				<img
					src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/k2u6epz3_expires_30_days.png"
					className="w-[331px] h-[331px] mt-3 rounded-[30px] object-fill"
					alt=""
				/>
				<div className="flex-1 self-stretch"></div>
				<div className="flex flex-col items-start w-[382px] pr-[1px]">
					<div className="flex flex-col items-start mb-[31px] ml-[1px] gap-[11px]">
						<img
							src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/fx5pw00h_expires_30_days.png"
							className="w-[47px] h-[47px] mr-[95px] rounded-[23px] object-fill"
							alt=""
						/>
						<span className="text-[#1E1E1E] text-base">Nunc vulputate libero</span>
					</div>
					<span className="text-[#1E1E1E] text-2xl w-[342px] mb-5">
						Des piscines sur mesure pour chaque projet
					</span>
					<span className="text-[#1E1E1E] text-base mb-[38px] ml-[1px]">
						Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
						inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
					</span>
					<button
						className="flex flex-col items-start bg-[#009EFC] text-left py-3.5 px-[26px] rounded-[180px] border border-solid border-[#FFFFFF78]"
						onClick={() => alert('Pressed!')}
					>
						<span className="text-white text-base">Estimer mon projet</span>
					</button>
				</div>
			</div>
		</>
	)
}