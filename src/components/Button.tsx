import React, { FC } from 'react'

interface PropsButton {
	onClick: () => void
	disabled?: boolean
	children?: React.ReactNode
}
const Button: FC<PropsButton> = ({ onClick, children, disabled }) => {
	return (
		<button
			disabled={disabled}
			className='bg-white/40 bg-blend-saturation rounded-md transition-all hover:scale-105 border border-green w-full h-16 mobile:h-12 px-4'
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default Button
