import { FC } from 'react'
import Button from './Button'

interface INavigationPanel {
	mine: () => void
	setNewTransactionIsShown: (value: boolean) => void
}

const NavigationPanel: FC<INavigationPanel> = ({
	mine,
	setNewTransactionIsShown,
}) => {
	return (
		<div className='fixed mobile:hidden bottom-16 flex gap-8'>
			<Button onClick={mine}>MINE</Button>
			<Button
				onClick={() => {
					setNewTransactionIsShown(true)
				}}
			>
				NEW TRANSACTION
			</Button>
		</div>
	)
}

export default NavigationPanel
