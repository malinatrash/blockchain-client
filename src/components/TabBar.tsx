import Pickaxe from '@assets/pickaxe.png'
import Pay from '@assets/valid.png'
import { FC, useEffect, useState } from 'react'
import TabBarButton from './TabBarButton'

interface TabBarProps {
	mine: () => void
	setNewTransactionIsShown: (value: boolean) => void
}

const TabBar: FC<TabBarProps> = ({ mine, setNewTransactionIsShown }) => {
	const [isVisible, setIsVisible] = useState(true)
	const [prevScrollY, setPrevScrollY] = useState(0)
	// const user = useAppSelector(state => state.userReducer)
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY
			if (currentScrollY > prevScrollY) {
				setIsVisible(false)
			} else {
				setIsVisible(true)
			}
			setPrevScrollY(currentScrollY)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [prevScrollY])

	return (
		<div
			className={`hidden ${
				isVisible ? 'bottom-1' : `-bottom-24`
			} flex shadow-lg left-2 right-2 transition-all duration-[300ms] bg-white rounded-3xl h-20 fixed w-[100% - 48x] items-center justify-evenly mobile:flex`}
		>
			<div onClick={mine}>
				<TabBarButton icon={Pickaxe} title={'Mine'} />
			</div>
			<div onClick={() => setNewTransactionIsShown(true)}>
				<TabBarButton icon={Pay} title={'New Transaction'} />
			</div>
		</div>
	)
}

export default TabBar
