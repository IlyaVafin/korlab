export interface FormDataState {
	name: string
	phone: string
	telegram: string
}

export interface FormDataErrors {
	nameError: string
	phoneError: string
	telegramError: string
}

export interface FieldsProps {
	formData: FormDataState
	errors: FormDataErrors
	handleFieldChange: FieldChange
}

export type FieldChange = (field: string, value: string) => void
