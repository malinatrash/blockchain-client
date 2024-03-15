import { FC } from 'react'
import { useNavigate } from 'react-router'

interface ITabBarButton {
	icon: string
	title: string
	path?: string
	action?: () => void
}

const TabBarButton: FC<ITabBarButton> = ({ icon, title, path, action }) => {
	const navigate = useNavigate()
	const tabBarButtonStyles =
		'flex outline-none flex-col gap-2 items-center justify-center active:opacity-20 transition-all duration-3000 cursor-pointer'
	const titleStyles = 'text-opacity-70 text-[#000]'
	const imgStyles = 'w-6 h-6 fill-black select-none'
	const tabBarButtonClick = () => {
		if (path) {
			navigate(path)
		}
		if (action) {
			action()
		}
	}
	return (
		<div onClick={tabBarButtonClick} className={tabBarButtonStyles}>
			<img className={imgStyles} src={icon} alt='TabBarButtonIcon' />
			<span className={titleStyles}>{title}</span>
		</div>
	)
}

export default TabBarButton
