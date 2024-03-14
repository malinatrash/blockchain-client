import React, { InputHTMLAttributes } from 'react'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	placeholder?: string
}

const TextField: React.FC<TextFieldProps> = ({
	placeholder,
	value,
	onChange,
	...props
}) => {
	return (
		<input
			className='bg-gray-100 w-full bg-opacity-50 border border-gray-300 rounded-lg shadow-md p-3 focus:outline-none focus:ring focus:ring-blue-500 transition-all duration-200 focus:scale-105 focus:bg-opacity-100'
			type='text'
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			{...props}
		/>
	)
}

export default TextField
