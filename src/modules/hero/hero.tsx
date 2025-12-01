import Button from "@/src/components/button/button"
import Image from "next/image"

export default function Hero() {
	return (
		<section>
			<div className='flex flex-col justify-center items-center lg:flex-row-reverse xl:items-end xl:gap-3'>
				<div className='relative mt-10 mb-2.5 h-[270px] w-full lg:h-[469px] xl:h-[525px] xl:w-[525px] md:mb-0 md:mt-0 sm:w-[500px] sm:h-[300px] max-[1280px]:h-[300px]'>
					<Image fill src='/hero-img.png' alt='hero-router' />
				</div>
				<div className='bg-(image:--gradient-orange) rounded-(--radius-blocks) pt-[11px] pl-[15px] pr-[15px] pb-[11px] border border-px border-(--color-orange) w-full xl:h-[525px] xl:w-[793px]'>
					<h1 className='text-white text-[30px] tracking-[3%] uppercase max-[320px]:text-[25px] '>
						Беспроводной интернет для бизнеса
					</h1>
					<p className='text-white text-[18px] uppercase mb-10 md:text-[26px] md:max-w[]'>
						от <b>2 990 рублей </b>в месяц! <br /> Установка по любому адресу в РФ
					</p>
					<div className='max-w-[335px]'>
						<Button className='' variant='aqua'>
							Попробовать
						</Button>
					</div>
					<ul className='mt-10'>
						<li className='text-white list-disc text-[18px] flex items-baseline gap-2'>
							<Image src={"/list-disc.png"} alt='' width={8} height={8} />
							Мультироутер с технологией суммирования нескольких каналов связи в
							один
						</li>
						<li className='text-white list-disc text-[18px] flex items-baseline gap-2'>
							<Image src={"/list-disc.png"} alt='' width={8} height={8} />
							Высокая скорость и отказоустойчивость интернет-соединения{" "}
						</li>
						<li className='text-white list-disc text-[18px] flex items-baseline gap-2'>
							<Image src={"/list-disc.png"} alt='' width={8} height={8} />
							Единый договор на ПО, оборудование и связь
						</li>
						<li className='text-white list-disc text-[18px] flex items-baseline gap-2'>
							<Image src={"/list-disc.png"} alt='' width={8} height={8} />
							Простое подключение за 7 минут
						</li>
						<li className='text-white relative text-[18px] flex items-baseline gap-2'>
							<Image src={"/list-disc.png"} alt='' width={8} height={8} />
							Моментальная техподдержка 24/7 в Telegram
						</li>
					</ul>
					<p className='text-(--secondary-text-color) text-[12px] mt-[35px]'>
						* Без учета стоимости оборудования, возможен выкуп оборудования или
						аренда, стоимость будет зависеть от модели мультироутера
					</p>
				</div>
			</div>
		</section>
	)
}
