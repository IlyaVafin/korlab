import TitleBlock from "@/src/components/title-block/title-block";
import { Swiper, SwiperSlide } from "swiper/react";

export default function QuantityClients() {
  return (
    <section>
      <TitleBlock>500+ клиентов уже с нами</TitleBlock>
      <Swiper>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </section>
  )
}