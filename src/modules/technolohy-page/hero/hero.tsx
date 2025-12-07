import Button from "@/src/components/button/button"
import Card from "@/src/components/card/card"
import Typography from "@/src/components/typography/typography"
import Image from "next/image"

export default function Hero() {
	return (
		<section className='mt-[50px]'>
			<div className='flex flex-col gap-2.5 lg:flex-row justify-between'>
				<Image
					src={"/hero-technology.png"}
					width={0}
					height={0}
					className='w-full h-auto lg:max-w-[563px]'
					sizes='100vw'
					alt='hero-image'
				/>
				<Card className="" variant='aqua'>
					<div className='flex flex-col justify-between h-full'>
						<Typography
							className='mb-6 lg:text-[26px] lg:leading-[35px]'
							variant='description'
						>
							РЕШЕНИЕ mrnet С ТЕХНОЛОГИЕЙ BONDING ОБЪЕДИНЯЕТ ВСЕ ДОСТУПНЫЕ
							КАНАЛЫ СВЯЗИ В ЕДИНЫЙ ВИРТУАЛЬНЫЙ КАНАЛ, СУММИРУЕТ СКОРОСТЬ
							ПЕРЕДАЧИ ДАННЫХ И ПОВЫШАЕТ НАДЕЖНОСТЬ СОЕДИНЕНИЯ
						</Typography>
						<div className='max-w-[334px]'>
							<Button variant='aqua'>оставить заявку</Button>
						</div>
						<Typography className='mt-[50px]' variant='description'>
							Оставьте заявку и с вами свяжется менеджер и договорится о запуске
							пилота. Без необходимости отключения от текущего провайдера и
							заключения договора. Все цены рассчитываются индивидуально под
							клиента
						</Typography>
					</div>
				</Card>
			</div>
		</section>
	)
}
