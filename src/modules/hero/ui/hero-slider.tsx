"use client"
import Slider from "@/src/components/slider/slider"
import { SwiperSlide } from "swiper/react"
import { heroCards } from "../const/hero-cards"
import HeroCard from "./hero-card"

export default function HeroSlider() {
	return (
		<>
			<Slider hideSliderOnDesktop={true} spaceBetween={20} slidesPerView={1}>
				{heroCards.map(slide => (
					<SwiperSlide className='min-h-[220px] mt-2.5' key={slide.label}>
						<HeroCard slide={slide} />
					</SwiperSlide>
				))}
			</Slider>
			<ul className='hidden justify-between mt-3 lg:flex max-[1280px]:gap-3'>
				{heroCards.map(slide => (
					<li key={slide.label}>
						<HeroCard slide={slide} />
					</li>
				))}
			</ul>
		</>
	)
}
