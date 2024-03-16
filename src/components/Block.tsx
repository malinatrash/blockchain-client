/* eslint-disable no-mixed-spaces-and-tabs */
import { FC } from 'react'
import { BlockData } from '~/models/BlockData'

interface BlockProps extends Omit<BlockData, 'id'> {
	id: number
	onClick: () => void
}

export const Block: FC<BlockProps> = ({
	id,
	previousHash,
	proof,
	timestamp,
	transactions,
	onClick,
}) => {
	const blockStyle =
		'border rounded-xl p-4 mb-4 bg-white/60 transition-all hover:scale-105 hover:shadow-lg min-w-[300px] min-h-[150px]'

	const truncatedHash = previousHash
		? previousHash.length > 8
			? `${previousHash.substring(0, 4)}...${previousHash.substring(
					previousHash.length - 4
			  )}`
			: previousHash
		: 'nil'

	return (
		<div onClick={onClick} className={blockStyle}>
			<h2 className='text-xl font-semibold mb-2'>Block ID: {id}</h2>
			<p className='mb-2 break-all'>
				<span className='font-semibold'>Previous Hash:</span> {truncatedHash}
			</p>
			<p className='mb-2'>
				<span className='font-semibold'>Proof:</span> {proof}
			</p>
			<p className='mb-2'>
				<span className='font-semibold'>Timestamp:</span> {timestamp}
			</p>
			<div>Transactions quantity: {transactions ? transactions.length : 0}</div>
		</div>
	)
}
