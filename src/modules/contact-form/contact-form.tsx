import Card from "@/src/components/card/card"
import Form from "./ui/form"

export default function ContactForm() {

	return (
		<section className="mt-10">
			<div className='flex flex-col gap-2.5 lg:flex-row lg:justify-between'>
				<Card variant='mix' className="lg:max-w-lg lg:w-full">
					<h2 className='text-[19px] font-medium leading-[25px] uppercase min-h-[220px] lg:text-[32px] lg:max-w-[280px] lg:leading-10'>
						Хотите узнать больше, рассчитать стоимость или забрать устройство
						на бесплатный тест?
					</h2>
				</Card>
				<Card variant='aqua' className="lg:max-w-[908px] pb-[25px]">
					<h2 className='text-white text-[19px] font-medium leading-[25px] uppercase max-w-[280px] mb-2.5'>
						Услуга доступна только для юридических лиц
					</h2>
					<Form/>
				</Card>
			</div>
		</section>
	)
}
