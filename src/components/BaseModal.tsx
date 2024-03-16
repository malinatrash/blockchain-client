import { FC } from 'react'
import { CSSTransition } from 'react-transition-group'

interface IBaseModal {
	children: React.ReactNode
	isShown: boolean
	setIsShown: (value: boolean) => void
}

const BaseModal: FC<IBaseModal> = ({ children, isShown, setIsShown }) => {
	return (
		<CSSTransition in={isShown} timeout={200} classNames='modal' unmountOnExit>
			<div className='fixed transition-all duration-1000 z-10 h-screen'>
				<div
					className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md'
					style={{ pointerEvents: isShown ? 'auto' : 'none' }}
					onClick={() => setIsShown(false)}
				></div>
				<div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
					{children}
				</div>
			</div>
		</CSSTransition>
	)
}

export default BaseModal
