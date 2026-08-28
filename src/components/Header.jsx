export default function Header() {
	return (
		<div className="flex justify-between items-center self-stretch mb-[91px] mx-[58px]">
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
			<div className="flex shrink-0 items-center bg-[#FFFFFF3B] py-[7px] px-10 rounded-[180px] border border-solid border-white">
				<div className="flex shrink-0 items-center mr-[21px] gap-[17px]">
					<a href="#a-propos" className="text-white text-sm no-underline">
						A propos
					</a>
					<a href="#services" className="text-white text-sm no-underline">
						Nos services
					</a>
				</div>
				<img
					src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/7p16clld_expires_30_days.png"
					className="w-[145px] h-[38px] mr-5 rounded-[180px] object-fill"
					alt=""
				/>
				<div className="flex shrink-0 items-center gap-[18px]">
					<a href="#realisations" className="text-white text-sm no-underline">
						Nos realisations
					</a>
					<a href="#faq" className="text-white text-sm no-underline">
						FAQ
					</a>
				</div>
			</div>
			<button
				className="flex flex-col shrink-0 items-start bg-[#FFFFFF6E] text-left py-2 px-[26px] rounded-[180px] border-0"
				onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
			>
				<span className="text-white text-base">contact</span>
			</button>
		</div>
	)
}