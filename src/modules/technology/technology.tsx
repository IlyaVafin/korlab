import Button from "@/src/components/button/button"
import Card from "@/src/components/card/card"
import TitleBlock from "@/src/components/title-block/title-block"
import Typography from "@/src/components/typography/typography"
import Image from "next/image"

export default function Technology() {
	return (
		<section className='mt-10 mb-10'>
			<TitleBlock className='hidden md:block'>технология</TitleBlock>
			<div className='flex flex-col gap-2.5 xl:gap-3 items-center xl:flex-row'>
				<Image
					width='0'
					height='0'
					sizes='100vw'
					className='w-full h-auto'
					src='/technology.png'
					alt='technology-image'
				/>
				<Card
					variant='orange'
					className='pb-[19px]  h-full xl:h-[308px]'
				>
					<Typography
						variant='description'
						className='mb-[21px] xl:text-[24px] leading-[30px]'
					>
						Прокачайте свой интернет с высокоскоростными технологиями{" "}
						<span className='font-medium'>mrnet</span>. Наш мультироутер
						суммирует несколько каналов связи в один (технология бондинг),
						значительно повышая устойчивость и скорость соединения!
					</Typography>
					<Button className='mb-2' variant='aqua'>
						о технологии
					</Button>
				</Card>
			</div>
		</section>
	)
}
