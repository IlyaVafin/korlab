"use client"
import TitleBlock from "@/src/components/title-block/title-block"
import { principleCards } from "./const/principleCards"
import Image from "next/image"
import Slider from "@/src/components/slider/slider"
import { SwiperSlide } from "swiper/react"
import Typography from "@/src/components/typography/typography"
import PrincipleCard from "./ui/principle-card"

export default function OperatingPrinciple() {
	return (
		<section className="mt-[43px]">
			<TitleBlock className="mb-[22px]">Принцип работы</TitleBlock>
			<Slider
				breakpoints={{ 768: { slidesPerView: 3 } }}
				slidesPerView={1}
				hideSliderOnDesktop={true}
			>
				{principleCards.map(card => (
					<SwiperSlide key={card.src}>
						<div className='flex justify-center'>
							<PrincipleCard
								className='p-[15px] w-full h-[343px]'
								key={card.src}
							>
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
			<ul className='hidden lg:flex gap-1 xl:justify-between'>
				{principleCards.map(card => (
					<li key={card.src}>
						<PrincipleCard className='max-w-md h-[387px] flex flex-col justify-between p-[15px]'>
							<Image
								width={0}
								height={0}
								className='w-full h-full max-h-[200px]'
								sizes='100vw'
								src={card.src}
								alt=''
							/>
							<p className="text-[20px] leading-[100%] uppercase">{card.description}</p>
						</PrincipleCard>
					</li>
				))}
			</ul>
		</section>
	)
}
