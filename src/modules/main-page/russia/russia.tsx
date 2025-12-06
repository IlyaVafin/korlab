import TitleBlock from "@/src/components/title-block/title-block"
import Image from "next/image"
import { mobileListSalesDepartament } from "./const/mobileListSalesDepartament"

export default function Russia() {
	return (
		<section className='px-4 md:px-6'>
			<TitleBlock>Делаем стабильный Интернет в любой точке России</TitleBlock>

			<div className='rounded-(--radius-blocks) border border-px border-(--color-orange) shadow-[0_0_7px_4px_rgba(255,76,0,0.6)] pb-6 md:pb-[82px] relative mt-6'>
				<div className='flex items-center p-4 md:p-6'>
					<Image
						className='max-w-[50px] md:max-w-[70px] w-full h-auto'
						src={"/star.svg"}
						alt='star'
						width='0'
						height='0'
						sizes='100vw'
					/>
					<span className='text-white text-[10px] md:text-[12px] uppercase ml-2'>
						Наши клиенты
					</span>
				</div>

				<div className='relative px-4 md:px-8'>
					<Image
						width='0'
						height='0'
						src='/russia.svg'
						className='w-full h-auto'
						alt='Карта России с точками клиентов'
						sizes='(max-width: 768px) 100vw, 1200px'
					/>

					<div className='absolute inset-0 grid grid-cols-12 grid-rows-12'>
						<Image
							alt='star'
							src='/star.svg'
							width={0}
							height={0}
							className='w-full h-auto row-6 col-2 self-end justify-self-end'
						/>
						<Image
							alt='star'
							src='/star.svg'
							width={0}
							height={0}
							className='w-full h-auto '
						/>
						<Image
							alt='star'
							src='/star.svg'
							width={0}
							height={0}
							className='w-full h-auto '
						/>
						<Image
							alt='star'
							src='/star.svg'
							width={0}
							height={0}
							className='w-full h-auto '
						/>
						<Image
							alt='star'
							src='/star.svg'
							width={0}
							height={0}
							className='w-full h-auto '
						/>
						<Image
							alt='star'
							src='/star.svg'
							width={0}
							height={0}
							className='w-full h-auto col-4'
						/>

						<Image
							alt='star'
							src='/star.svg'
							width={0}
							height={0}
							className='h-auto w-full row-7 col-7 animate-(--scale-animation) '
						/>
						<Image
							alt='star'
							src='/star.svg'
							width={0}
							height={0}
							className='h-auto w-full row-8 col-8 animate-(--scale-animation) delay-150'
						/>
						<Image
							alt='star'
							src='/star.svg'
							width={0}
							height={0}
							className='h-auto w-full row-8 col-7 animate-(--scale-animation)'
						/>
						<Image
							alt='star'
							src='/star.svg'
							width={0}
							height={0}
							className='h-auto w-full row-7 col-8 animate-(--scale-animation)'
						/>
						<Image
							alt='star'
							src='/star.svg'
							width={0}
							height={0}
							className='h-auto w-[120px]  animate-(--scale-animation)'
						/>
						<div className='h-[15px] w-[15px] bg-(--color-aqua) text-[12px] flex justify-center items-center row-6 col-2 justify-self-end'>
							1
						</div>
						<div className='h-[15px] w-[15px] bg-(--color-aqua) text-[12px] flex justify-center items-center row-5 col-2 justify-self-end'>
							2
						</div>
						<div className='h-[15px] w-[15px] bg-(--color-aqua) text-[12px] flex justify-center items-center row-7 col-3'>
							3
						</div>
						<div className='h-[15px] w-[15px] bg-(--color-aqua) text-[12px] flex justify-center items-center  col-1 row-9 justify-self-end'>
							4
						</div>
						<div className='h-[15px] w-[15px] bg-(--color-aqua) text-[12px] flex justify-center items-center row-8 col-3 justify-self-end'>
							5
						</div>
						<div className='h-[15px] w-[15px] bg-(--color-aqua) text-[12px] flex justify-center items-center row-7 col-4 self-end '>
							6
						</div>
						<div className='h-[15px] w-[15px] bg-(--color-aqua) text-[12px] flex justify-center items-center row-10 col-6'>
							7
						</div>
						<div className='h-[15px] w-[15px] bg-(--color-aqua) text-[12px] flex justify-center items-center row-end-13 col-11'>
							8
						</div>
					</div>
				</div>
			</div>
			<div className=''>
				<h3 className='text-white text-[12px] uppercase h-[43px] mt-[34px]'>
					Отделы продаж:
				</h3>
				<ul className='grid grid-cols-2'>
					{mobileListSalesDepartament.map((salesDep, i) => (
						<li key={salesDep.city} className='flex items-baseline gap-3'>
							<div className='text-[12px] bg-(--color-aqua) w-[15px] h-[15px] flex items-center justify-center'>
								{i + 1}
							</div>
							<div className=''>
								<p className='text-white'>{salesDep.city}</p>
								<p className='text-white'>{salesDep.phone}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
