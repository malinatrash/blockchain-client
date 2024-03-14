import Loader from '@assets/spinner.png'
import { useEffect, useState } from 'react'
import BlockDetailsModal from '~/components/BLockDetailsModal'
import { Block } from '~/components/Block'
import Button from '~/components/Button'
import NewTransactionModal from '~/components/NewTransactionModal'
import { getUUID } from '~/funcs/getUUID'
import { BlockData } from '~/models/BlockData'
import { BLockchain } from '~/models/Blockchain'

const Home = () => {
	const [data, setData] = useState<BLockchain>()
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [newTransactionIsShown, setNewTransactionIsShown] = useState(false)
	const [currentBlock, setCurrentBlock] = useState<BlockData | undefined>(
		undefined
	)
	const [currentBlockIsShown, setCurrentBlockIsShown] = useState<boolean>(false)
	useEffect(() => {
		fetchData()
	}, [])

	const mine = async () => {
		try {
			await fetch('http://92.51.45.202:8080/mine')
			fetchData()
		} catch (error) {
			console.error('Error mine:', error)
		}
	}

	const fetchData = async () => {
		setIsLoading(true)
		try {
			const response = await fetch('http://92.51.45.202:8080/chain')
			const jsonData = await response.json()
			setData(jsonData)
		} catch (error) {
			console.error('Error fetching data:', error)
		}
		setIsLoading(false)
	}
	const wrapper =
		'container flex flex-col max-h-full min-h-screen items-center bg-background select-none'
	const content =
		'flex items-center mobile:flex-col transition-all gap-4 flex-wrap justify-center'
	return (
		<div className={wrapper + ' px-12 py-4 mobile:px-8'}>
			<NewTransactionModal
				isShown={newTransactionIsShown}
				setIsShown={() => setNewTransactionIsShown(!newTransactionIsShown)}
			/>
			<BlockDetailsModal
				blockData={currentBlock}
				isShown={currentBlockIsShown}
				setIsShown={() => setCurrentBlockIsShown(!currentBlockIsShown)}
			/>
			<div className='flex items-center w-full justify-between pr-16'>
				<h1 className='hover:scale-105 font-light p-4  transition-all duration-500 text-[5rem] mobile:text-[3rem]'>
					Blockchain
				</h1>
				<div className='flex gap-16'>
					<span className='text-lg font-bold mobile:hidden'>
						id: {getUUID()}
					</span>
					<span className='text-lg font-bold whitespace-nowrap mobile:text-sm'>
						Balance: {0}
					</span>
				</div>
			</div>
			<div className={content}>
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
			<div className='fixed bottom-16 mobile:bottom-8 flex gap-4 mobile:flex-col mobile:gap-2'>
				<Button onClick={mine}>MINE</Button>
				<Button
					onClick={() => {
						setNewTransactionIsShown(true)
					}}
				>
					NEW TRANSACTION
				</Button>
			</div>
		</div>
	)
}

export default Home
