import Button from "@/src/components/button/button"
import Card from "@/src/components/orange-card/card"
import TitleBlock from "@/src/components/title-block/title-block"
import Typography from "@/src/components/typography/typography"
import Image from "next/image"

export default function Technology() {
	return (
		<section className='mt-10 mb-10'>
			<TitleBlock className='hidden md:block'>технология</TitleBlock>
			<div className='flex flex-col items-center md:flex-row md:gap-3 md:h-[280px] lg:h-[308px] lg:items-start'>
				<div className='relative w-[793px] h-[220px] max-w-full sm:h-[250px] md:h-[280px] lg:h-[308px]'>
					<Image fill src='/technology.png' alt='technology-image' />
				</div>
				<Card variant="orange" className='max-w-[793px] md:max-w-[450px]  mt-2.5 mb-2.5 pb-[19px] h-full md:mt-0 md:mb-0 lg:max-w-[563px]'>
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
