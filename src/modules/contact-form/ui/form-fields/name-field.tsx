import Input from "@/src/components/input/input"
import { FieldsProps } from "../../types"

export default function NameField({
	errors,
	formData,
	handleFieldChange,
}: FieldsProps) {
	return (
		<div className=''>
			<label
				htmlFor='name'
				className='absolute w-px h-px p-0 -m-px t-0 l-0  opacity-0'
			>
				Name:
			</label>
			<Input
				value={formData.name}
				className='max-w-[827px] w-full h-[52px]'
				placeholder={
					errors.nameError ? "Это поле обязательно для заполнения" : "Ваше имя *"
				}
				onChange={e => handleFieldChange("name", e.target.value)}
				isError={!!errors.nameError}
				autoComplete='name'
				id='name'
			/>
		</div>
	)
}
