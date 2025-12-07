"use client"

import Modal from "@/src/components/modal/modal"
import Link from "next/link"
import { useCookieModal } from "./hooks/useCookieModal"

export default function CookieModal() {
	const { isShow, setIsShow } = useCookieModal()

	return (
		<>
			{isShow && (
				<Modal
					onClose={() => setIsShow(false)}
					variantButton='aqua'
					textButton='согласен'
					variantModal='aqua'
					className='max-w-[1368px] lg:flex-col bg-black'
				>
					<p className='text-white max-w-[700px]'>
						ООО «НЬЮКОМ ДИСТРИБЬЮШН» использует файлы-cookie и инструменты
						веб-аналитики Яндекс.Метрика с целью оценки посещаемости и анализа
						поведения пользователей сайта, полученные данные передаются в сервис
						Яндекс.Метрика в соответствии с политикой этого сервиса. Актуальная
						версия списка собираемых данных:
						<Link href='https://yandex.ru/support/metrica/code/data-collected.html'>
							https://yandex.ru/support/metrica/code/data-collected.html
						</Link>{" "}
						<br />
						Нажимая на кнопку «Согласен», Вы соглашаетесь на сбор файлов-cookies
					</p>
				</Modal>
			)}
		</>
	)
}
