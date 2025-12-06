import TitleBlock from "@/src/components/title-block/title-block"
import { supportCards } from "./const/supportCards"
import Card from "@/src/components/card/card"
import Typography from "@/src/components/typography/typography"
import Image from "next/image"

export default function Support() {
	return (
		<section className="mt-[73px]">
			<TitleBlock>ТЕХПОДДЕРЖКА 24/7</TitleBlock>
			<div className='grid grid-rows-2 grid-cols-1 gap-2.5 lg:grid-cols-2 lg:grid-rows-1'>
				{supportCards.map(card => (
					<Card
						className='flex flex-col justify-between h-[253px] lg:max-h-[146px] lg:bg-[linear-gradient(250.93deg,rgba(0,0,0,0)_17.65%,#FF4C00_100%)]'
						key={card.title}
						variant='orange'
					>
						<div className='flex flex-col lg:flex-row lg:justify-between'>
							<Typography className="lg:text-[26px]" variant='title'>{card.title}</Typography>
							<Image
								src={card.src}
								alt=''
								width={0}
								height={0}
								sizes='100vw'
								className='w-full h-auto max-h-[60px] max-w-20'
							/>
						</div>
						<ul className="lg:mb-[18px]">
							{card.items.map(item => (
								<li className='text-white flex items-center gap-2' key={item}>
									<Image
										src='/list-disc.png'
										alt=''
										width={0}
										height={0}
										className='w-full h-auto max-w-2 max-h-2'
									/>
									{item}
								</li>
							))}
						</ul>
					</Card>
				))}
			</div>
		</section>
	)
}
