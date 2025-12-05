"use client"

import Input from "@/src/components/input/input"
import { FieldsProps } from "../../types"

export default function PhoneField({
	formData,
	errors,
	handleFieldChange,
}: FieldsProps) {
	return (
		<div className=''>
			<label
				className='absolute w-px h-px p-0 -m-px t-0 l-0 opacity-0'
				htmlFor='phone-number'
			>
				Номер телефона
			</label>
			<Input
				value={formData.phone}
				type='tel'
				className='max-w-[827px] w-full h-[52px]'
				placeholder={
					errors.phoneError
						? "Это поле обязательно для заполнения"
						: "Ваш телефон +7 (___)___-__-__ *"
				}
				isError={!!errors.phoneError}
				autoComplete='tel'
				id='phone-number'
				onChange={e => handleFieldChange("phone", e.target.value)}
			/>
		</div>
	)
}
