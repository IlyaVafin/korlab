"use client"

import { FormEvent, useState } from "react"

export const useContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		telegram: "",
	})
	const [errors, setErrors] = useState({
		nameError: "",
		phoneError: "",
		telegramError: "",
	})

  
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const { name, phone, telegram } = formData
		if (isInvalidFormData(name, phone, telegram)) return
		else {
			setFormData({ name: "", phone: "", telegram: "" })
			setErrors({ nameError: "", phoneError: "", telegramError: "" })
			alert("Success")
		}
	}

	const handleFieldChange = (field: string, value: string) => {
		setFormData(prev => ({ ...prev, [field]: value }))
	}

	const isInvalidFormData = (name: string, phone: string, telegram: string) => {
		let newErrors = {
			nameError: "",
			phoneError: "",
			telegramError: "",
		}
		let hasErrors = false
		if (!name.trim()) {
			newErrors = { ...newErrors, nameError: "Имя обязательно для заполнения" }
			hasErrors = true
		}

		if (!phone.trim()) {
			newErrors = {
				...newErrors,
				phoneError: "Телефон обязателен для заполнения",
			}
			hasErrors = true
		}

		if (!telegram.trim()) {
			newErrors = {
				...newErrors,
				telegramError: "Телеграм обязателен для заполнения",
			}
			hasErrors = true
		}
		if (hasErrors) {
			setErrors(newErrors)
		}
		return hasErrors
	}
	return {
		handleSubmit,
		errors,
		formData,
		handleFieldChange,
	}
}
