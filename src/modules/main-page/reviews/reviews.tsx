"use client"

import Card from "@/src/components/card/card"
import Slider from "@/src/components/slider/slider"
import TitleBlock from "@/src/components/title-block/title-block"
import Typography from "@/src/components/typography/typography"
import { SwiperSlide } from "swiper/react"
import { reviewsCards } from "./const/reviewsCards"
import Container from "@/src/components/container/container"

export default function Reviews() {
	return (
		<section className='max-[1200px]:pr-5 max-[1200px]:pl-5'>
			<Container className="p-0">
				<TitleBlock className='max-w-[650px] mb-6 mt-10 lg:h-[123px]'>
					95% клиентов выбирают{" "}
					<span className='font-medium lowercase'>mrnet</span> после тест-драйва
				</TitleBlock>
						</Container>
				<Slider
					slidesPerView={"auto"}
					freeMode={true}
					spaceBetween={12}
					hideSliderOnDesktop={false}
				>
					{reviewsCards.map(review => (
						<SwiperSlide className='h-full max-w-[563px]' key={review.name}>
							<Card
								className='width-[335px] max-w-[563px] sm:min-h-[366px] sm:max-h-[626px] h-full pb-[47px]'
								variant='aqua'
							>
								<div className='flex gap-2'>
									<p className='text-(--color-aqua) text-[12px]'>
										<span className='uppercase font-medium'>
											{review.company}
										</span>
										<br /> {review.name}
									</p>
									<p className='text-white text-[12px]'>
										{" "}
										{review.jobTitleTop} <br />
										{review.jobTitle}
									</p>
								</div>
								<Typography className='mt-[50px]' variant='description'>
									{review.review}
								</Typography>
							</Card>
						</SwiperSlide>
					))}
				</Slider>
		</section>
	)
}
