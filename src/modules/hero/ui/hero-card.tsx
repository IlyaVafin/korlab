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
		<div className='flex flex-col justify-between h-[220px] bg-(image:--gradient-blue) rounded-(--radius-blocks) pl-[15px] pt-[15px] pb-[15px] lg:pl-6 lg:pt-5 lg:pb-4 border border-px border-(--color-aqua)'>
			<Image
				width={slide.width}
				height={60}
				src={slide.src}
				alt='slide-image'
			/>
			<h3 className='text-white text-[20px] uppercase max-w-[387px]'>
				{slide.label}
			</h3>
		</div>
	)
}
