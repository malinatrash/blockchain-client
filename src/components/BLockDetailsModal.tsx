import { FC } from 'react'
import { BlockData } from '~/models/BlockData'
import BaseModal from './BaseModal'
import Button from './Button'

interface BlockDetailsModalProps {
	isShown: boolean
	setIsShown: (value: boolean) => void
	blockData?: BlockData | null
}

const BlockDetailsModal: FC<BlockDetailsModalProps> = ({
	blockData,
	isShown,
	setIsShown,
}) => {
	if (!blockData) {
		return null
	}

	return (
		<BaseModal isShown={isShown} setIsShown={setIsShown}>
			<div className='fixed inset-0 flex justify-center items-center'>
				<div className='bg-background/50 p-6 rounded-lg shadow-lg'>
					<h2 className='text-4xl text-center font-semibold mb-4'>
						BLOCK DETAILS
					</h2>
					<p className='mb-2'>
						<span className='font-semibold text-xl'>Block ID:</span>{' '}
						{blockData.id}
					</p>
					<p className='mb-2'>
						<span className='font-semibold text-xl whitespace-normal'>
							Previous Hash:
						</span>{' '}
						{blockData.previousHash}
					</p>
					<p className='mb-2'>
						<span className='font-semibold text-xl'>Proof:</span>{' '}
						{blockData.proof}
					</p>
					<p className='mb-2'>
						<span className='font-semibold text-xl'>Timestamp:</span>{' '}
						{blockData.timestamp}
					</p>
					<h3 className='text-xl font-semibold mt-6 mb-4'>Transactions</h3>
					<div>
						{blockData.transactions.map((transaction, index) => (
							<div key={index} className='bg-gray-100 p-4 rounded-md mb-4'>
								<p className='mb-2'>
									<span className='font-semibold'>Amount:</span>{' '}
									{transaction.amount}
								</p>
								<p className='mb-2'>
									<span className='font-semibold'>Sender:</span>{' '}
									{transaction.sender}
								</p>
								<p className='mb-2'>
									<span className='font-semibold'>Recipient:</span>{' '}
									{transaction.recipient}
								</p>
							</div>
						))}
					</div>
					<Button onClick={() => setIsShown(false)}>Close</Button>
				</div>
			</div>
		</BaseModal>
	)
}

export default BlockDetailsModal
