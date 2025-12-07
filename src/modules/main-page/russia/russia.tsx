import TitleBlock from "@/src/components/title-block/title-block"
import Image from "next/image"
import { mobileListSalesDepartament } from "./const/mobileListSalesDepartament"

export default function Russia() {
	return (
		<section className='px-4 md:px-6 overflow-hidden'>
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
						<div className='col-start-2 col-end-4 justify-self-start row-start-6 row-end-9 self-end'>
							<Image
								alt='star'
								src='/star.svg'
								width={0}
								height={0}
								className='w-full h-auto row-3 col-12 self-end justify-self-end max-w-40 max-h-40'
							/>
						</div>
						<div className='col-11 row-12 self-center justify-self-start max-w-40 max-h-40'>
							<Image
								alt='star'
								src='/star.svg'
								width={0}
								height={0}
								className='w-full h-auto animate-(--scale-animation)'
							/>
						</div>
						<Image
							alt='star'
							src='/star.svg'
							width={0}
							height={0}
							className='w-full h-auto col-11 row-10 justify-end animate-(--scale-animation)  max-w-40 max-h-40'
						/>
						<div className='col-start-4 col-end-6 row-start-5 row-end-8 justify-self-center self-center'>
							<Image
								alt='star'
								src='/star.svg'
								width={0}
								height={0}
								className='w-full h-auto max-w-30 max-h-30 animate-(--scale-animation)'
							/>
						</div>
						<div className='col-start-9 col-end-11 row-7 self-center justify-self-end'>
							<Image
								alt='star'
								src='/star.svg'
								width={0}
								height={0}
								className='w-full h-auto  max-w-30 max-h-30  animate-(--scale-animation)  '
							/>
						</div>
						<div className='col-start-4 col-end-6 row-7'>
							<Image
								alt='star'
								src='/star.svg'
								width={0}
								height={0}
								className='w-full h-auto max-w-30 max-h-30 animate-(--scale-animation)'
							/>
						</div>

						<Image
							alt='star'
							src='/star.svg'
							width={0}
							height={0}
							className='h-auto w-full row-8 col-5 animate-(--scale-animation)  max-w-40 max-h-40'
						/>
						<Image
							alt='star'
							src='/star.svg'
							width={0}
							height={0}
							className='h-auto w-full row-8 col-8 animate-(--scale-animation) delay-150 max-w-40 max-h-40'
						/>
						<Image
							alt='star'
							src='/star.svg'
							width={0}
							height={0}
							className='h-auto w-full row-9 col-7 animate-(--scale-animation) max-w-40 max-h-40'
						/>
						<Image
							alt='star'
							src='/star.svg'
							width={0}
							height={0}
							className='h-auto w-full row-7 col-9 animate-(--scale-animation) max-w-40 max-h-40 self-start'
						/>
						<Image
							alt='star'
							src='/star.svg'
							width={0}
							height={0}
							className='h-auto  animate-(--scale-animation) max-w-40 max-h-40'
						/>
						<div className='row-6 col-start-2 col-end-4 justify-self-start'>
							<Image
								alt='star'
								src='/star.svg'
								width={0}
								height={0}
								className='w-full h-auto  max-w-30 max-h-30'
							/>
						</div>
						<div className='col-start-4 col-end-5 row-5 justify-self-start'>
							<Image
								alt='star'
								src='/star.svg'
								width={0}
								height={0}
								className='w-full h-auto max-w-30 max-h-30 animate-(--scale-animation)'
							/>
						</div>
						<div className='row-6 col-start-3 col-end-5 justify-self-center'>
							<Image
								alt='star'
								src='/star.svg'
								width={0}
								height={0}
								className='w-full h-auto max-w-30 max-h-30 animate-(--scale-animation)'
							/>
						</div>
						<div className='row-8 col-start-1 col-end-3 justify-self-end'>
							<Image
								alt='star'
								src='/star.svg'
								width={0}
								height={0}
								className='w-full h-auto max-w-40 max-h-40 animate-(--scale-animation)'
							/>
						</div>
						<div className='col-start-10 col-end-12 row-start-3 row-end-5 self-center justify-self-center'>
							<Image
								alt='star'
								src='/star.svg'
								width={0}
								height={0}
								className='w-full h-auto max-w-40 max-h-40 animate-(--scale-animation)'
							/>
						</div>
						<div className='col-start-3 col-end-5 justify-self-end row-start-8 row-end-11 self-center'>
							<Image
								alt='star'
								src='/star.svg'
								width={0}
								height={0}
								className='w-full h-auto max-w-40 max-h-40'
							/>
						</div>

						<Image
							alt='star'
							src='/star.svg'
							width={0}
							height={0}
							className='h-auto w-full row-7 col-7 animate-(--scale-animation)  max-w-40 max-h-40'
						/>
						<Image
							alt='star'
							src='/star.svg'
							width={0}
							height={0}
							className='h-auto w-full row-9 col-9 animate-(--scale-animation) delay-150 max-w-40 max-h-40'
						/>
						<div className='row-5 col-start-6 col-end-8 justify-self-center'>
							<Image
								alt='star'
								src='/star.svg'
								width={0}
								height={0}
								className='h-auto w-full  animate-(--scale-animation) max-w-30 max-h-30'
							/>
						</div>
						<Image
							alt='star'
							src='/star.svg'
							width={0}
							height={0}
							className='h-auto w-full row-6 col-8 animate-(--scale-animation) max-w-40 max-h-40'
						/>
						<div className='row-8 col-1'>
							<Image
								alt='star'
								src='/star.svg'
								width={0}
								height={0}
								className='w-full h-auto animate-(--scale-animation) max-w-40 max-h-40'
							/>
						</div>
						<div className='col-start-1 col-end-3 justify-self-end row-5'>
							<Image
								alt='star'
								src='/star.svg'
								width={0}
								height={0}
								className='w-full h-full max-w-40 max-h-40 animate-(--scale-animation)'
							/>
						</div>
						<div className='col-start-5 col-end-7 row-10 justify-self-center'>
							<Image
								alt='star'
								src='/star.svg'
								width={0}
								height={0}
								className='w-full h-auto  max-w-30 max-h-30 animate-(--scale-animation)'
							/>
						</div>
						<div className='col-6 row-8 justify-self-end'>
							<Image
								alt='star'
								src='/star.svg'
								width={0}
								height={0}
								className='w-full h-auto max-w-40 max-h-40 animate-(--scale-animation)'
							/>
						</div>
						<div className='col-start-3 col-end-5 row-8 justify-self-end'>
							<Image
								alt='star'
								src='/star.svg'
								width={0}
								height={0}
								className='w-full h-auto  max-w-30 max-h-30'
							/>
						</div>
						<div className='row-7 col-start-5 col-end-7 justify-self-center self-center'>
							<Image
								alt='star'
								src='/star.svg'
								width={0}
								height={0}
								className='w-full h-auto max-w-30 max-h-30 animate-(--scale-animation)'
							/>
						</div>
						<div className='col-start-8 col-end-12 justify-self-center row-4'>
							<Image
								alt='star'
								src='/star.svg'
								width={0}
								height={0}
								className='w-full h-auto max-w-30 max-h-30 animate-(--scale-animation)'
							/>
						</div>
						<Image
							alt='star'
							src='/star.svg'
							width={0}
							height={0}
							className='h-auto w-full row-7 col-7 animate-(--scale-animation)  max-w-40 max-h-40'
						/>
						<Image
							alt='star'
							src='/star.svg'
							width={0}
							height={0}
							className='h-auto w-full row-8 col-8 animate-(--scale-animation) delay-150 max-w-40 max-h-40'
						/>
						<div className='row-5 col-start-10 col-end-12 justify-self-center'>
							<Image
								alt='star'
								src='/star.svg'
								width={0}
								height={0}
								className='h-auto w-full  animate-(--scale-animation) max-w-30 max-h-30 '
							/>
						</div>
						<Image
							alt='star'
							src='/star.svg'
							width={0}
							height={0}
							className='h-auto w-full row-6 col-12 animate-(--scale-animation) max-w-40 max-h-40'
						/>
						<div className='col-start-2 col-end-4 justify-self-center row-6'>
							<Image
								alt='star'
								src='/star.svg'
								width={0}
								height={0}
								className='h-auto w-full animate-(--scale-animation) max-w-30 max-h-30'
							/>
						</div>
						<div className='col-start-2 col-end-5 justify-self-center row-start-5 row-end-9 self-end'>
							<Image
								alt='star'
								src='/star.svg'
								width={0}
								height={0}
								className='h-auto w-full animate-(--scale-animation) max-w-40 max-h-40'
							/>
						</div>
						<div className='col-start-2 col-end-4 justify-self-center row-start-5 row-end-9 self-end'>
							<Image
								alt='star'
								src='/star.svg'
								width={0}
								height={0}
								className='h-auto w-full animate-(--scale-animation) max-w-30 max-h-30'
							/>
						</div>
						<div className='h-[15px] w-[15px] bg-(--color-aqua) text-[12px] flex justify-center items-center row-6 col-2 justify-self-end lg:hidden z-10'>
							1
						</div>
						<div className='h-[15px] w-[15px] bg-(--color-aqua) text-[12px] flex justify-center items-center row-5 col-2 justify-self-end lg:hidden z-10'>
							2
						</div>
						<div className='h-[15px] w-[15px] bg-(--color-aqua) text-[12px] flex justify-center items-center row-7 col-3 lg:hidden z-10'>
							3
						</div>
						<div className='h-[15px] w-[15px] bg-(--color-aqua) text-[12px] flex justify-center items-center  col-1 row-9 justify-self-end lg:hidden z-10'>
							4
						</div>
						<div className='h-[15px] w-[15px] bg-(--color-aqua) text-[12px] flex justify-center items-center row-8 col-3 justify-self-end lg:hidden z-10'>
							5
						</div>
						<div className='h-[15px] w-[15px] bg-(--color-aqua) text-[12px] flex justify-center items-center row-7 col-4 self-end  lg:hidden z-10'>
							6
						</div>
						<div className='h-[15px] w-[15px] bg-(--color-aqua) text-[12px] flex justify-center items-center row-10 col-6 lg:hidden z-10'>
							7
						</div>
						<div className='h-[15px] w-[15px] bg-(--color-aqua) text-[12px] flex justify-center items-center row-end-13 col-11 lg:hidden z-10'>
							8
						</div>
						<ul className='hidden lg:absolute lg:inset-0 lg:grid lg:grid-rows-24 lg:grid-cols-24'>
							{mobileListSalesDepartament.map((dep, i) => (
								<li
									style={{
										gridColumnStart: dep.startCol,
										gridColumnEnd: dep.endCol,
										gridRowStart: dep.startRow,
										gridRowEnd: dep.startRow,
										justifySelf: dep.self,
									}}
									className=' w-[157px]'
									key={dep.city}
								>
									{i === 4 ? (
										<>
											<div className='bg-white w-3 h-3'></div>
											<h4 className='inline-block bg-(--color-aqua) ml-3 pr-2'>
												{dep.city}
											</h4>{" "}
											<p className='inline-block bg-(--color-aqua) ml-3 pr-2'>
												{dep.phone}
											</p>
										</>
									) : (
										<>
											<h4 className='inline-block bg-(--color-aqua) ml-3 pr-2'>
												{dep.city}
											</h4>{" "}
											<p className='inline-block bg-(--color-aqua) ml-3 pr-2'>
												{dep.phone}
											</p>
											<div className='bg-white w-3 h-3'></div>
										</>
									)}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className=''>
				<h3 className='text-white text-[12px] uppercase h-[43px] mt-[34px]'>
					Отделы продаж:
				</h3>
				<ul className='grid grid-cols-2 lg:hidden'>
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
