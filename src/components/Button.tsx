import React, { FC } from 'react'

interface PropsButton {
	onClick: () => void
	children?: React.ReactNode
}
const Button: FC<PropsButton> = ({ onClick, children }) => {
	return (
		<button
			className='bg-white/60 bg-blend-saturation rounded-md transition-all hover:scale-105 border border-green w-full min-w-80 h-16 mobile:h-12 px-8 min-w-[15rem] mobile:w-96'
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default Button
