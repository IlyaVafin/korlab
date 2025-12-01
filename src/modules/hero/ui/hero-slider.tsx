"use client"
import Image from "next/image"
import { useRef } from "react"
import "swiper/css"
import "swiper/css/pagination"
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react"
import { heroCards } from "../const/hero-cards"
import "./hero-slider.css"
import HeroCard from "./hero-card"
export default function HeroSlider() {
	const swiperRef = useRef<SwiperClass | null>(null)
	const pagination = {
		clickable: true,
		renderBullet: function (index: number, className: string) {
			return '<span class="' + className + '">' + "</span>"
		},
	}
	return (
		<>
			<Swiper
				className='mySwiper'
				onBeforeInit={swiper => (swiperRef.current = swiper)}
				modules={[Navigation, Pagination]}
				slidesPerView={1}
				navigation={true}
				pagination={pagination}
			>
				{heroCards.map(slide => (
					<SwiperSlide className='min-h-[220px] mt-2.5' key={slide.label}>
						<HeroCard slide={slide} />
					</SwiperSlide>
				))}
				<div className='flex justify-between'>
					<button
						onClick={() => swiperRef.current?.slidePrev()}
						className='rotate-180'
					>
						<Image
							width={48}
							height={48}
							src={"/slider-button.svg"}
							alt='slider-button-prev'
						/>
					</button>
					<button onClick={() => swiperRef.current?.slideNext()}>
						<Image
							width={48}
							height={48}
							src={"/slider-button.svg"}
							alt='slider-button-next'
						/>
					</button>
				</div>
			</Swiper>
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
