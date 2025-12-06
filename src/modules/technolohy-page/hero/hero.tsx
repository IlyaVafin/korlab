import Button from "@/src/components/button/button"
import Card from "@/src/components/card/card"
import Typography from "@/src/components/typography/typography"
import Image from "next/image"

export default function Hero() {
	return (
		<section>
			<div className=''>
				<Image
					src={"/hero-technology.png"}
					width={0}
					height={0}
					sizes='100vw'
					alt='hero-image'
				/>
				<Card variant='aqua'>
					<Typography variant='description'>
						РЕШЕНИЕ mrnet С ТЕХНОЛОГИЕЙ BONDING ОБЪЕДИНЯЕТ ВСЕ ДОСТУПНЫЕ КАНАЛЫ
						СВЯЗИ В ЕДИНЫЙ ВИРТУАЛЬНЫЙ КАНАЛ, СУММИРУЕТ СКОРОСТЬ ПЕРЕДАЧИ ДАННЫХ
						И ПОВЫШАЕТ НАДЕЖНОСТЬ СОЕДИНЕНИЯ
					</Typography>
					<Button variant='aqua'>оставить заявку</Button>
					<Typography variant="description">
						Оставьте заявку и с вами свяжется менеджер и договорится о запуске
						пилота. Без необходимости отключения от текущего провайдера и
						заключения договора. Все цены рассчитываются индивидуально под
						клиента
					</Typography>
				</Card>
			</div>
		</section>
	)
}
