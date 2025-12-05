import Link from "next/link";

export default function FormPolitic() {
	return (
		<>
			<p className='text-(--secondary-text-color) text-[12px] max-w-[798px]'>
				Я даю согласие (активная ссылка на согласие, отдельный файл в
				документах) на обработку моих персональных данных в форме обращения на
				странице сайта. Ознакомиться с условиями{" "}
				<Link className='underline' href=''>
					Политики обработки персональных данных ООО «НЬЮКОМ ДИСТРИБЬЮШН»
				</Link>
			</p>
			<p className='text-(--secondary-text-color) text-[12px] mt-6'>
				* Поля, обязательные для заполнения
			</p>
		</>
	)
}
