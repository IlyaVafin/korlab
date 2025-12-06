"use client"
import Slider from "@/src/components/slider/slider"
import TitleBlock from "@/src/components/title-block/title-block"
import { SwiperSlide } from "swiper/react"
import { compositionDecisionCards } from "./const/compositionDecisionCards"
import CompositionCard from "./ui/composition-card"

export default function CompositionDecision() {
	return (
		<section>
			<TitleBlock className="mt-10 mb-4">Состав решения</TitleBlock>
			<Slider spaceBetween={20} hideSliderOnDesktop={true}>
				{compositionDecisionCards.map((card, i) => (
					<SwiperSlide key={card.title}>
						<CompositionCard card={card} i={i} />
					</SwiperSlide>
				))}
			</Slider>
			<div className='hidden lg:flex lg:justify-between'>
				{compositionDecisionCards.map((card, i) => (
					<CompositionCard key={card.title} card={card} i={i} />
				))}
			</div>
		</section>
	)
}
