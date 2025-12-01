"use client"
import TitleBlock from "@/src/components/title-block/title-block"
import { Swiper, SwiperSlide } from "swiper/react"
import { clientsLogo } from "./const/clients-logo"
import Image from "next/image"

export default function QuantityClients() {
	return (
		<section className="mt-[75px]">
			<TitleBlock>500+ клиентов уже с нами</TitleBlock>
			<Swiper className="mt-10" breakpoints={{1024: {
        slidesPerView: 5,
      }, 1280: {
        slidesPerView: 6,
      }}} slidesPerView={3} spaceBetween={20}>
				{clientsLogo.map(logo => (
					<SwiperSlide key={logo.src}>
						<Image className="h-20" src={logo.src} width={220} height={80} alt='' />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}
