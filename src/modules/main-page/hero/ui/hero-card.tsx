import Card from "@/src/components/card/card"
import Typography from "@/src/components/typography/typography"
import Image from "next/image"

export default function HeroCard({
	slide,
}: {
	slide: {
		width: number
		src: string
		label: string
	}
}) {
	return (
		<Card variant="aqua" className='flex flex-col justify-between h-[220px] pl-[15px] pt-[15px] pb-[15px] lg:pl-6 lg:pt-5 lg:pb-4 xl:max-w-md 2xl:w-[436px]'>
			<Image
				width={0}
				style={{maxWidth: `${slide.width}px`}}
				className={`w-full h-auto max-h-[60px]`}
				height={0}
				src={slide.src}
				alt='slide-image'
			/>
			<Typography
				sizeTitle="19px"
				variant='title'
				className=' uppercase max-w-[387px] lg:max-w-[360px]'
			>
				{slide.label}
			</Typography>
		</Card>
	)
}
