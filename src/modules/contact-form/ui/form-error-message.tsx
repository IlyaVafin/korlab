import { FormDataErrors } from "../types"

export default function FormErrorMessage({ errors }: {errors: FormDataErrors}) {
	return (
		<>
			{(errors.nameError.length > 0 ||
				errors.phoneError.length > 0 ||
				errors.telegramError.length > 0) && (
				<p className='leading-5 text-(--color-orange) mt-4'>
					Пожалуйста, попробуйте ещё раз! Не все поля формы заполнены корректно.
				</p>
			)}
		</>
	)
}
