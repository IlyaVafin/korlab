"use client"
import Card from "@/src/components/card/card"
import Slider from "@/src/components/slider/slider"
import TitleBlock from "@/src/components/title-block/title-block"
import Typography from "@/src/components/typography/typography"
import { solutionCards } from "./const/solution-cards"
import { SwiperSlide } from "swiper/react"
import Image from "next/image"
import Button from "@/src/components/button/button"
import SolutionCard from "./ui/solution-card"

export default function Solution() {
	return (
		<section className='mt-[42px]'>
			<TitleBlock className='mb-6'>
				Решение, созданное айтишниками для айтишников
			</TitleBlock>
			<Slider spaceBetween={20} slidesPerView={1}>
				{solutionCards.map(card => (
					<SwiperSlide key={card.title}>
						<SolutionCard card={card} />
					</SwiperSlide>
				))}
			</Slider>
			<ul className='hidden lg:flex gap-3 mb-3'>
				{solutionCards.map(card => (
					<li key={card.title}>
						<SolutionCard card={card} />
					</li>
				))}
			</ul>
			<div className='flex flex-col gap-2.5 lg:flex-row-reverse'>
				<Image
					width='0'
					height='0'
					alt='solution-image'
					src='/solution.png'
					sizes='100vw'
					className='w-full h-auto max-h-[398px]'
				/>
				<div className='flex'>
					<Card
						className='max-h-[398px] min-h-[310px] h-full w-full pb-4'
						variant='mix'
					>
						<div className="flex gap-30 flex-col justify-between lg:h-full">
							<TitleBlock
								color='black'
								className='font-medium lg:text-[45px] lg:leading-[53px]'
							>
								Попробуйте <br /> 14 дней бесплатно
							</TitleBlock>
							<Typography
								className='lg:text-2xl lg:leading-8'
								color='black'
								variant='description'
							>
								Развивайте свою инфру с 
								<span className='font-medium'>mrnet</span>. Без лишних затрат и
								костылей. Высокоскоростной интернет — удобно, эффективно!
							</Typography>
						</div>
					</Card>
				</div>
			</div>
			<div className='flex justify-center'>
				<div className='max-w-[335px] w-full mt-[35px]'>
					<Button className='mt-2.5 max-w-[335px]' variant='mix'>
						начать!
					</Button>
				</div>
			</div>
		</section>
	)
}
