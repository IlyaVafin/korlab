import Button from "@/src/components/button/button"
import OrangeCard from "@/src/components/orange-card/orange-card"
import Image from "next/image"

export default function Technology() {
	return (
		<section>
			<div className=''>
				<Image
					width={793}
					height={308}
					src='/technology.png'
					alt='technology-image'
				/>
				<OrangeCard>
					<p className="text-white">
						Прокачайте свой интернет с высокоскоростными технологиями mrnet. Наш
						мультироутер суммирует несколько каналов связи в один (технология
						бондинг), значительно повышая устойчивость и скорость соединения!
					</p>
					<Button variant='aqua'>о технологии</Button>
				</OrangeCard>
			</div>
		</section>
	)
}
