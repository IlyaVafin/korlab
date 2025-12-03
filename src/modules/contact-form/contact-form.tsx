import Card from "@/src/components/card/card"
import Input from "@/src/components/input/input"

export default function ContactForm() {
	return (
		<section>
			<div className=''>
				<Card variant='mix'>
					<h2 className='text-[19px] font-medium leading-[25px] uppercase min-h-[220px]'>
						Хотите узнать больше, рассчитать стоимость или забрать устройство
						на бесплатный тест?
					</h2>
				</Card>
				<Card variant='aqua' className='h-[500px]'>
					<h2 className='text-white text-[19px] font-medium leading-[25px] uppercase'>
						Услуга доступна только для юридических лиц
					</h2>
					<form>
            <Input className="w-[300px] h-[52px]" placeholder="Ваше имя *" isError={true} />
          </form>
				</Card>
        <p>dasdasdsadas</p>
			</div>
		</section>
	)
}
