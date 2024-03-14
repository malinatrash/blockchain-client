import React, { FC } from 'react'

interface PropsButton {
	onClick: () => void
	children?: React.ReactNode
}
const Button: FC<PropsButton> = ({ onClick, children }) => {
	return (
		<button
			className='bg-white/40 rounded-md transition-all hover:scale-105 border border-green w-80 h-16 mobile:w-96 mobile:h-12'
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default Button
