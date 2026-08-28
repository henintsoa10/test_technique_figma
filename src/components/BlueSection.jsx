export default function BlueSection() {
	return (
		<div className="self-stretch bg-[#009EFC] pt-20 px-[59px] mb-[126px] mx-[58px] rounded-[45px]">
			<div className="flex justify-between items-start self-stretch mb-[145px]">
				<div className="flex flex-col items-start w-[409px] pr-[1px]">
					<span className="text-white text-[40px] w-[381px] mb-[93px] ml-[1px]">
						Nous construisons des piscines personnalisées, équipées et de qualité.
					</span>
					<div className="flex items-center self-stretch mb-[69px] ml-[1px] gap-[19px]">
						<img
							src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/rvvnfrfk_expires_30_days.png"
							className="w-[194px] h-[194px] rounded-[10px] object-fill"
							alt=""
						/>
						<img
							src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/h4d3t4aj_expires_30_days.png"
							className="w-[195px] h-[194px] rounded-[10px] object-fill"
							alt=""
						/>
					</div>
					<button
						className="flex flex-col items-start bg-[#FF7903] text-left py-3.5 px-[30px] rounded-[180px] border border-solid border-[#FFFFFF78]"
						onClick={() => alert('Pressed!')}
					>
						<span className="text-white text-base">Demander une estimation</span>
					</button>
				</div>
				<img
					src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/c2hhrfjm_expires_30_days.png"
					className="w-[592px] h-[565px] object-fill"
					alt=""
				/>
			</div>
			<div className="flex items-center self-stretch mb-[126px]">
				<button
					className="flex flex-1 flex-col items-center bg-[#FFFFFF6E] text-left py-[53px] mr-5 rounded-xl border border-solid border-[#FFFFFF82]"
					onClick={() => alert('Pressed!')}
				>
					<img
						src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/rgifq4ui_expires_30_days.png"
						className="w-[200px] h-[29px] object-fill"
						alt=""
					/>
				</button>
				<button
					className="flex flex-1 flex-col items-center bg-[#FFFFFF6E] text-left py-[52px] mr-[21px] rounded-xl border border-solid border-[#FFFFFF82]"
					onClick={() => alert('Pressed!')}
				>
					<img
						src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/8q11bxqb_expires_30_days.png"
						className="w-[223px] h-[31px] object-fill"
						alt=""
					/>
				</button>
				<div className="flex flex-1 flex-col items-start bg-[#FFFFFF6E] py-[49px] pl-[37px] mr-5 rounded-xl border border-solid border-[#FFFFFF82]">
					<img
						src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/50rg2chv_expires_30_days.png"
						className="w-[198px] h-9 object-fill"
						alt=""
					/>
				</div>
				<button
					className="flex flex-1 flex-col items-center bg-[#FFFFFF6E] text-left py-[50px] rounded-xl border border-solid border-[#FFFFFF82]"
					onClick={() => alert('Pressed!')}
				>
					<img
						src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/5h8lljea_expires_30_days.png"
						className="w-[189px] h-[34px] object-fill"
						alt=""
					/>
				</button>
			</div>
		</div>
	)
}