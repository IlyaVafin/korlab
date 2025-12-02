"use client"
import Card from "@/src/components/card/card"
import Slider from "@/src/components/slider/slider"
import TitleBlock from "@/src/components/title-block/title-block"
import Typography from "@/src/components/typography/typography"
import { solutionCards } from "./const/solution-cards"
import { SwiperSlide } from "swiper/react"

export default function Solution() {
	return (
		<section>
			<TitleBlock>Решение, созданное айтишниками для айтишников</TitleBlock>
			<Slider slidesPerView={1}>
				{solutionCards.map(card => (
					<SwiperSlide key={card.title}>
						<Card variant='orange'>
							<Typography variant='title'>{card.title}</Typography>
							<div className=''>
								<Typography variant='description'>
									{card.paragraphTop}
								</Typography>
								<Typography variant='description'>
									{card.paragraphBottom}
								</Typography>
							</div>
						</Card>
					</SwiperSlide>
				))}
			</Slider>
		</section>
	)
}
