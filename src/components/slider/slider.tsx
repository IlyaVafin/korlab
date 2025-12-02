import Image from "next/image"
import { ReactNode, useRef } from "react"
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperClass } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "./slider.css"
import { SwiperOptions } from "swiper/types"
interface SliderProps extends SwiperOptions {
	children: ReactNode
}
export default function Slider({ children, ...rest }: SliderProps) {
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
				className='mySwiper'
				onBeforeInit={swiper => (swiperRef.current = swiper)}
				modules={[Navigation, Pagination]}
				navigation={true}
				pagination={pagination}
			>
				{children}
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
		</>
	)
}
