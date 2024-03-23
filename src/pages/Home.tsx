import { useEffect, useState } from 'react'
import Alert from '~/components/Alert'
import BlockDetailsModal from '~/components/BLockDetailsModal'
import BlockChain from '~/components/BlockChain'
import CreateWalletModal from '~/components/CreateWalletModal'
import Header from '~/components/Header'
import MineModal from '~/components/MineModal'
import NavigationPanel from '~/components/NavigationPanel'
import NewTransactionModal from '~/components/NewTransactionModal'
import SignInWalletModal from '~/components/SignInWalletModal'
import TabBar from '~/components/TabBar'
import { useAppSelector } from '~/hooks/redux'
import { useChain } from '~/hooks/useChain'
import { useMine } from '~/hooks/useMine'
import { BlockData } from '~/models/BlockData'

const Home = () => {
	const alertData = useAppSelector(state => state.alertReducer)
	const { currentData } = useChain()
	const [isLoading] = useState<boolean>(false)
	const [newTransactionIsShown, setNewTransactionIsShown] = useState(false)
	const [currentBlock, setCurrentBlock] = useState<BlockData | undefined>(
		undefined
	)
	const { mine } = useMine()
	const wallet = useAppSelector(state => state.createWalletSlice)
	useEffect(() => {}, [])
	const [currentBlockIsShown, setCurrentBlockIsShown] = useState<boolean>(false)

	const wrapper =
		'container flex flex-col max-h-full min-h-screen items-center bg-background select-none'
	return (
		<div className={wrapper + ' px-12 py-4 mobile:px-4 mx-auto'}>
			<MineModal />
			<SignInWalletModal />
			<Alert
				title={alertData.title}
				description={alertData.description}
				shown={alertData.shown}
				type={alertData.type}
			/>
			<NewTransactionModal
				isShown={newTransactionIsShown}
				setIsShown={() => setNewTransactionIsShown(!newTransactionIsShown)}
			/>
			<CreateWalletModal />
			<BlockDetailsModal
				blockData={currentBlock}
				isShown={currentBlockIsShown}
				setIsShown={() => setCurrentBlockIsShown(!currentBlockIsShown)}
			/>
			<Header />
			<div className='transition-all gap-8 w-full'>
				<BlockChain
					data={currentData}
					isLoading={isLoading}
					setCurrentBlock={setCurrentBlock}
					setCurrentBlockIsShown={setCurrentBlockIsShown}
				/>
			</div>
			{wallet.address != '' && (
				<>
					<NavigationPanel
						mine={mine}
						setNewTransactionIsShown={setNewTransactionIsShown}
					/>
					<TabBar
						mine={mine}
						setNewTransactionIsShown={setNewTransactionIsShown}
					/>
				</>
			)}
		</div>
	)
}

export default Home
