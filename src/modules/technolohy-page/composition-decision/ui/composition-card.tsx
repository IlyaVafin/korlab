import Card from "@/src/components/card/card"
import Typography from "@/src/components/typography/typography"
import Image from "next/image"
import { CompoSitionDecisionCard } from "../const/compositionDecisionCards"

export default function CompositionCard({
	card,
	i,
}: {
	card: CompoSitionDecisionCard
	i: number
}) {
	return (
		<Card variant='aqua' className='max-h-[826px] card'>
			<div>
				<div className='text-white flex gap-[5px]'>
					<span
						style={{ width: i == 1 ? "32px" : "30px" }}
						className='border border-px border-white rounded-full w-[30px] h-[30px] flex items-center justify-center text-[10px] font-medium'
					>
						{i + 1}
					</span>
					{Array.isArray(card.place) ? (
						<div className='flex gap-2 items-center w-full'>
							<div className='flex items-center justify-center max-h-[30px] h-full uppercase w-full border border-px border-white rounded-(--radius-button-input) text-[10px] font-bold'>
								<p className=''>{card.place[0]}</p>
							</div>
							<span className='text-[10px] font-medium uppercase'>или</span>
							<div className='flex items-center justify-center max-h-[30px] h-full uppercase w-full border border-px border-white rounded-(--radius-button-input) text-[10px] font-bold'>
								<p className=''>{card.place[1]}</p>
							</div>
						</div>
					) : (
						<p className='flex items-center justify-center uppercase max-w-[109px] w-full font-medium border border-px border-white rounded-full text-[10px]'>
							{card.place}
						</p>
					)}
				</div>
				<Typography className='mt-5 lg:text-[26px]' variant='title'>
					{card.title}
				</Typography>
				{card.registry && (
					<p className='text-[14px] text-(--color-aqua) uppercase mt-3 lg:text-[26px]'>
						{card.registry}
					</p>
				)}
				{card.src && (
					<Image
						width={0}
						height={0}
						alt=''
						src={card.src}
						sizes='100vw'
						className='w-full h-auto mt-4 mb-5 lg:max-w-[290px]'
					/>
				)}
				{Array.isArray(card.description) ? (
					<div className='flex flex-col gap-3 mt-5'>
						{card.description.map((paragraph, i) => (
							<Typography
								style={{ textDecoration: i == 1 ? "underline" : "" }}
								variant='description'
								key={paragraph}
							>
								{paragraph}{" "}
								{i === 2 ? (
									<span className='underline'>оставьте заявку</span>
								) : (
									""
								)}
							</Typography>
						))}
					</div>
				) : (
					<Typography variant='description'>{card.description}</Typography>
				)}
			</div>
		</Card>
	)
}
