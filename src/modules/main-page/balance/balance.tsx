import TitleBlock from "@/src/components/title-block/title-block"
import Image from "next/image"

export default function Balance() {
	return (
		<section>
			<div className='flex flex-col items-center gap-[43px] sm:flex-row sm:justify-between'>
				<div className='w-[678px] max-w-full h-auto'>
					<TitleBlock className='h-16'>не балансируем</TitleBlock>

					<Image
						width='0'
						height='0'
						className='w-full h-auto'
						sizes='100vw'
						src='/train-old.png'
						alt='old train'
					/>
				</div>
				<div className='w-[678px] max-w-full'>
					<TitleBlock className='h-16'>а суммируем</TitleBlock>
					<Image
						width='0'
						height='0'
						className='w-full h-auto'
						sizes='100vw'
						src='/train-modern.png'
						alt='modern train'
					/>
				</div>
			</div>
		</section>
	)
}
