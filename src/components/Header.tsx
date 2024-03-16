import { FC } from 'react'
import { useAppSelector } from '~/hooks/redux'
import { useGetBalanceQuery } from '~/store/api/api'
import CreateWalletButton from './CreateWalletButton'
import SignInWalletButton from './SignInWalletButton'

const Header: FC = () => {
	const wallet = useAppSelector(state => state.createWalletSlice)
	const balance = useGetBalanceQuery(wallet.address)
	return (
		<div className='flex items-center w-full justify-between pr-16'>
			<h1 className='hover:scale-105 font-light p-4  transition-all duration-500 text-[5rem] mobile:text-[1.7rem]'>
				Blockchain
			</h1>
			{wallet.address != '' && (
				<span className='font-bold text-lg'>
					balance: {balance.currentData?.balance ?? '...'} coins
				</span>
			)}
			{wallet.address == '' && (
				<div className='flex gap-4'>
					{' '}
					<CreateWalletButton /> <SignInWalletButton />{' '}
				</div>
			)}
		</div>
	)
}

export default Header
