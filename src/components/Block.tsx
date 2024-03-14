import { FC } from 'react'
import { BlockData } from '~/models/BlockData'

interface BlockProps
	extends BlockData,
		React.HtmlHTMLAttributes<HTMLDivElement> {}
export const Block: FC<BlockProps> = ({
	id,
	previousHash,
	proof,
	timestamp,
	transactions,
	...props
}: BlockData) => {
	const blockStyle = 'max-w-md mobile:max-w-[100vw] border rounded-xl p-4 mb-4'

	const truncatedHash = previousHash
		? previousHash.length > 8
			? previousHash.substring(0, 4) +
			  '...' +
			  previousHash.substring(previousHash.length - 4)
			: previousHash
		: 'nil'

	return (
		<div {...props} className={blockStyle}>
			<div className='block-content'>
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
				<div>
					Transactions quantity: {transactions ? transactions.length : 0}
				</div>
			</div>
		</div>
	)
}
