import Link from "next/link"
import { footerLinks, footerLinksSecond } from "./const/footer-links"
import Image from "next/image"

export default function Footer() {
	return (
		<footer className='mt-10 text-[11px] text-white md:text-[12px] font-light'>
			<div className='max-w-[1408px] mt-0 mb-0 mr-auto ml-auto pr-5 pl-5'>
				<h2 className='text-[14px] mb-4 lg:text-[20px] leading-10'>Дефолтный подвал</h2>
				<div className='grid grid-cols-2 grid-rows-2 gap-4 lg:grid-cols-3'>
					<p className=''>
						ООО «Ньюком Дистрибьюшн», <br />
						ОГРН: 1207700420784, <br /> Юридический адрес: 119017, Российская{" "}
						<br /> Федерация, г. Москва, <br /> ул. Большая Ордынка, д. 54 стр.
						2
					</p>
					<p className='mt-4 items-baseline sm:mt-0'>
						Почта: <span className="underline">info@mrnet.ru</span> <br /> График работы: по будням <br /> с 9:00
						до 19:00 по Москве
					</p>
					<p className='row-1 col-2 sm:row-2'>
						Служба поддержки: <br /> <span className="underline">Тел: 8 (495) 308-41-51</span> <br /> <span className="underline">Тел: 8 (800)
						600-35-38</span> <br />
						Почта: <span className="underline">helpdesk@mrnet.ru</span> <br /> График работы: 24/7
					</p>
					<nav className='col-span-2 h-[254px] md:grid md:grid-cols-2 md:grid-rows-1 lg:grid-rows-2 lg:grid-cols-1 lg:col-3 lg:row-span-4 lg:gap-20'>
						<ul className=''>
							{footerLinks.map(link => (
								<li key={link}>
									<Link className='text-white underline' href=''>
										{link}
									</Link>
								</li>
							))}
						</ul>
						<ul className='mt-4'>
							{footerLinksSecond.map(link => (
								<li key={link}>
									<Link className='underline' href=''>
										{link}
									</Link>
								</li>
							))}
						</ul>
					</nav>
					<div className='flex gap-[30px] mt-6 lg:row-2 lg:col-1'>
						<div className='flex flex-col gap-4'>
							<Image
								alt='logo'
								src='/logo.svg'
								width={0}
								height={0}
								className=' max-w-[185px] max-h-[41px] h-auto w-full'
							/>
							<p className=''>
								КАТЕГОРИЧЕСКИ НОВЫЙ <br /> ИНТЕРНЕТ ДЛЯ БИЗНЕСА
							</p>
						</div>
					</div>
					<p className='col-2 row-4 max-w-[129px] md:max-w-[229px] self-center'>©2025 mrnet.ru Все права защищены</p>
				</div>
			</div>

			<Image
				width={0}
				height={0}
				className='max-w-[367px] w-full h-auto max-h-[300px] absolute right-0'
				src='/footer-img.svg'
				alt=''
			/>
		</footer>
	)
}
