"use client"
import Slider from "@/src/components/slider/slider"
import Image from "next/image"
import { SwiperSlide } from "swiper/react"
import PrincipleCard from "./principle-card"
import { principleCards } from "../const/principleCards"

export default function OperatingPrincipleMobile() {
	return (
		<Slider
			breakpoints={{ 768: { slidesPerView: 3 } }}
			slidesPerView={1}
			hideSliderOnDesktop={true}
		>
			{principleCards.map(card => (
				<SwiperSlide key={card.src}>
					<div className='flex justify-center'>
						<PrincipleCard className='p-[15px] w-full h-[343px]' key={card.src}>
							<div className='flex flex-col justify-between h-full  max-h-[387px] gap-4'>
								<Image
									width={0}
									height={0}
									className='w-full h-auto max-h-[250px]'
									sizes='100vw'
									src={card.src}
									alt=''
								/>
								<p className=' leading-[100%] uppercase text-[19px]'>
									{card.description}
								</p>
							</div>
						</PrincipleCard>
					</div>
				</SwiperSlide>
			))}
		</Slider>
	)
}
