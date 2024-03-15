import Loader from '@assets/spinner.png'
import { FC } from 'react'
import { BlockData } from '~/models/BlockData'
import { BLockchain } from '~/models/Blockchain'
import { Block } from './Block'
interface BlockchainProps {
	isLoading: boolean
	data?: BLockchain
	setCurrentBlockIsShown: (value: boolean) => void
	setCurrentBlock: (block: BlockData) => void
}

const BlockChain: FC<BlockchainProps> = ({
	isLoading,
	data,
	setCurrentBlock,
	setCurrentBlockIsShown,
}) => {
	return (
		<div className='flex gap-8 overflow-x-scroll mobile:flex-col mobile:px-8 py-4 '>
			{isLoading ? (
				<img
					className='w-32 animate-spin fixed bottom-1/2 transition-all duration-500 hover:scale-150'
					src={Loader}
				/>
			) : data?.chain ? (
				data.chain
					.map((block, index) => (
						<Block
							onClick={() => {
								setCurrentBlockIsShown(true)
								setCurrentBlock(block)
							}}
							key={index}
							{...block}
						/>
					))
					.reverse()
			) : (
				<>No data</>
			)}
		</div>
	)
}

export default BlockChain
