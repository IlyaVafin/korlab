import Button from "@/src/components/button/button"
import Card from "@/src/components/card/card"
import TitleBlock from "@/src/components/title-block/title-block"
import Typography from "@/src/components/typography/typography"
import Image from "next/image"

export default function TuneNetWork() {
	return (
		<section>
			<TitleBlock className='mb-6 mt-[42px] max-w-[1023px]'>
				Настраивайте сеть и управляйте всеми устройствами через единый личный
				кабинет
			</TitleBlock>
			<div className='grid gap-2.5 sm:grid-rows-1 sm:grid-cols-2 sm:gap-3 lg:mt-10'>
				<div className=''>
					<Card
						className='min-h-[220px] flex flex-col justify-between pr-0'
						variant='aqua'
					>
						<Typography sizeTitle='26px' variant='title'>
							мониторинг
						</Typography>
						<div className=''>
							<Typography className='mb-4' variant='description'>
								Графики потребления трафика
							</Typography>
							<Typography className='max-w-[439px]' variant='description'>
								Просмотр подключенных к мультироутеру сетевых устройств
							</Typography>
						</div>
					</Card>
					<Card
						className='flex justify-between flex-col min-h-[220px] mt-2.5 sm:mt-3'
						variant='aqua'
					>
						<Typography sizeTitle='26px' variant='title'>
							тонкая настройка
						</Typography>
						<div className=''>
							<Typography className='mb-4' variant='description'>
								Настройка тоннелей PPTP, L2TP, GRE, IPIP
							</Typography>
							<Typography variant='description'>
								Настройка пробросов портов
							</Typography>
						</div>
					</Card>
				</div>
				<div className='relative max-w-[793px] h-[310px] sm:h-[452px]'>
					<Image src='/macbook.png' alt='macbook' fill />
				</div>
				<div className='max-w-[335px] w-full mt-[35px] col-span-2 justify-self-center'>
					<Button variant='aqua'>
						Испытать все возможности
					</Button>
				</div>
			</div>
		</section>
	)
}
