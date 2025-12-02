import Button from "@/src/components/button/button"
import Card from "@/src/components/orange-card/card"
import Typography from "@/src/components/typography/typography"
import Image from "next/image"
import { heroAdventages } from "./const/hero-adventages"
import HeroSlider from "./ui/hero-slider"

export default function Hero() {
	return (
		<section className='mt-10'>
			<div className='flex flex-col justify-center items-center lg:flex-row-reverse xl:items-end xl:gap-3 sm:gap-3'>
				<div className='relative mt-10 mb-2.5 h-[270px] w-full lg:h-[569px] xl:h-[569px] xl:w-[563px] md:mb-0 md:mt-0 sm:h-[400px]'>
					<Image fill src='/hero-img.png' alt='hero-router' />
				</div>
				<Card variant="orange" className='xl:max-w-[793px] xl:h-auto'>
					<h1 className='text-white text-[30px] tracking-[3%] uppercase max-[320px]:text-[25px] xl:text-[50px]'>
						Беспроводной интернет для бизнеса
					</h1>
					<p className='text-white text-[18px] uppercase mb-10 md:text-[26px]'>
						от <b>2 990 рублей </b>в месяц! <br /> Установка по любому адресу в
						РФ
					</p>
					<div className='max-w-[335px]'>
						<Button className='' variant='aqua'>
							Попробовать
						</Button>
					</div>
					<ul className='mt-10'>
						{heroAdventages.map(adv => (
							<li className='flex items-baseline gap-2' key={adv.label}>
								<Image
									width={8}
									height={8}
									src={"/list-disc.png"}
									alt='list-marker'
								/>
								<Typography className="text-2xl" variant='description'>{adv.label}</Typography>
							</li>
						))}
					</ul>
					<p className='text-(--secondary-text-color) text-[12px] mt-[35px]'>
						* Без учета стоимости оборудования, возможен выкуп оборудования или
						аренда, стоимость будет зависеть от модели мультироутера
					</p>
				</Card>
			</div>
			<HeroSlider />
		</section>
	)
}
