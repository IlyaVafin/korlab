"use client"

import Button from "@/src/components/button/button"
import Checkbox from "@/src/components/checkbox/checkbox"
import { useContactForm } from "../hooks/useContactForm"
import FormErrorMessage from "./form-error-message"
import NameField from "./form-fields/name-field"
import PhoneField from "./form-fields/phone-field"
import TelegramField from "./form-fields/telegram-field"
import FormPolitic from "./form-politic"

export default function Form() {
	const { errors, formData, handleSubmit, handleFieldChange } = useContactForm()
	return (
		<form onSubmit={e => handleSubmit(e)}>
			<NameField
				errors={errors}
				formData={formData}
				handleFieldChange={handleFieldChange}
			/>
			<fieldset className='flex flex-col gap-2.5 mt-4'>
				<legend className='text-white mt-4 mb-4 pl-[30px]'>
					Оставьте ваши контакты
				</legend>
				<PhoneField
					errors={errors}
					formData={formData}
					handleFieldChange={handleFieldChange}
				/>
				<TelegramField
					errors={errors}
					formData={formData}
					handleFieldChange={handleFieldChange}
				/>
				<div className='flex items-baseline mt-[18px] gap-3'>
					<Checkbox />
					<div className=''>
						<FormPolitic />
						<FormErrorMessage errors={errors} />
					</div>
				</div>
			</fieldset>
			<div className='mt-11 max-w-[335px]'>
				<Button type='submit' variant='mix'>
					начать
				</Button>
			</div>
		</form>
	)
}
