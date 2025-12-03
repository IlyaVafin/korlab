"use client"
import Image from "next/image"
import { ReactNode, useRef } from "react"
import { FreeMode, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperClass } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import "./slider.css"
import { SwiperOptions } from "swiper/types"
interface SliderProps extends SwiperOptions {
	children: ReactNode
	hideSliderOnDesktop: boolean
}
export default function Slider({
	children,
	hideSliderOnDesktop,
	...rest
}: SliderProps) {
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
				{...rest}
				className={hideSliderOnDesktop ? "mySwiper" : ""}
				onBeforeInit={swiper => (swiperRef.current = swiper)}
				modules={[Navigation, Pagination, FreeMode]}
				navigation={true}
				pagination={pagination}
			>
				{children}
				<div className='flex justify-between pl-5 pr-5'>
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
		</>
	)
}
