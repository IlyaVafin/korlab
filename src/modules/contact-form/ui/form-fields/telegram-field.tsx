import Input from "@/src/components/input/input";
import { FieldsProps } from "../../types";

export default function TelegramField({formData, errors, handleFieldChange}: FieldsProps) {
	return (
		<div className='relative'>
			<label
				className='absolute w-px h-px p-0 -m-px t-0 l-0 opacity-0'
				htmlFor='username-telegram'
			>
				Никнейм телеграмм
			</label>
			<Input
				value={formData.telegram}
				id='username-telegram'
				placeholder={
					errors.telegramError
						? "Это поле обязательно для заполнения"
						: "Ваш ник в tg"
				}
				className='max-w-[827px] w-full h-[52px]'
				isError={!!errors.telegramError}
				onChange={e => handleFieldChange("telegram", e.target.value)}
			/>
		</div>
	)
}
