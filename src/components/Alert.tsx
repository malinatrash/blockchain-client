import { FC } from 'react'

export interface IAlert {
	title: string
	description: string
	type: 'error' | 'success'
	shown: boolean
}

const Alert: FC<IAlert> = ({ title, description, type, shown }) => {
	const bgColorClass = type === 'success' ? 'bg-primary/70' : 'bg-danger/40'
	return (
		<div
			className={`z-30 w-11/12 transition-all duration-700 py-4 rounded-xl flex flex-col gap-4 text-center fixed border border-primary ${bgColorClass} ${
				shown ? 'top-7' : '-top-72'
			}`}
		>
			<h1 className='text-xl'>{title}</h1>
			<p>{description}</p>
		</div>
	)
}

export default Alert
