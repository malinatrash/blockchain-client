import { useEffect, useState } from 'react'
import BlockDetailsModal from '~/components/BLockDetailsModal'
import BlockChain from '~/components/BlockChain'
import NavigationPanel from '~/components/NavigationPanel'
import NewTransactionModal from '~/components/NewTransactionModal'
import TabBar from '~/components/TabBar'
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
	return (
		<div className={wrapper + ' px-12 py-4 mobile:px-4 mx-auto'}>
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
			</div>
			<div className='transition-all gap-8 w-full'>
				<BlockChain
					data={data}
					isLoading={isLoading}
					setCurrentBlock={setCurrentBlock}
					setCurrentBlockIsShown={setCurrentBlockIsShown}
				/>
			</div>
			<NavigationPanel
				mine={mine}
				setNewTransactionIsShown={setNewTransactionIsShown}
			/>
			<TabBar mine={mine} setNewTransactionIsShown={setNewTransactionIsShown} />
		</div>
	)
}

export default Home
