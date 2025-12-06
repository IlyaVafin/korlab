import TitleBlock from "@/src/components/title-block/title-block"
import Image from "next/image"

export default function Scheme() {
	return (
		<section className='mt-11'>
			<TitleBlock className='mb-6'>Схема работы решения mrnet </TitleBlock>
			<div className='border border-px border-(--color-aqua) rounded-(--radius-blocks) shadow-[0_0_7px_4px_var(--color-aqua)] pl-10 pr-10 pb-[50px] pt-[50px]'>
				<Image
					src={"/scheme.svg"}
					alt='schema'
					width={0}
					height={0}
					className='hidden w-full h-auto sm:block'
				/>
				<Image
					src={"/scheme_m.svg"}
					alt='schema-mobile'
					width={0}
					height={0}
					className='w-full h-auto sm:hidden'
				/>
			</div>
		</section>
	)
}
