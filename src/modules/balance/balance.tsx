import TitleBlock from "@/src/components/title-block/title-block"
import Image from "next/image"

export default function Balance() {
	return (
		<section>
			<div className='flex flex-col items-center gap-[43px] sm:flex-row sm:justify-between'>
				<div className="w-[678px] max-w-full">
					<TitleBlock className="h-16">не балансируем</TitleBlock>
					<div className='relative max-w-full h-[220px] lg:h-80 xl:h-[452px]'>
						<Image fill src='/train-old.png' alt='old train' />
					</div>
				</div>
				<div className="w-[678px] max-w-full">
					<TitleBlock className="h-16">а суммируем</TitleBlock>
					<div className='relative h-[220px] lg:h-80 xl:h-[452px]'>
						{" "}
						<Image fill src='/train-modern.png' alt='modern train' />
					</div>
				</div>
			</div>
		</section>
	)
}
