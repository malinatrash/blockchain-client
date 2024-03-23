import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '~/hooks/redux'
import { createWalletSlice } from '~/store/reducers/createWalletSlice'
import BaseModal from './BaseModal'
import Button from './Button'

const CreateWalletModal = () => {
	const [copiedAddress, setCopiedAddress] = useState(false)
	const [, setCopiedKey] = useState(false)
	const { setIsShown } = createWalletSlice.actions
	const dispatch = useDispatch()
	const wallet = useAppSelector(state => state.createWalletSlice)

	const short = (str: string) =>
		str
			? str.length > 8
				? `${str.substring(0, 26)}...${str.substring(str.length - 4)}`
				: str
			: 'nil'

	const copyToClipboard = (text: string, type: string) => {
		navigator.clipboard.writeText(text)
		if (type === 'address') {
			setCopiedAddress(true)
			setTimeout(() => setCopiedAddress(false), 3000)
		} else if (type === 'privateKey') {
			setCopiedKey(true)
			setTimeout(() => setCopiedKey(false), 3000)
		}
	}

	return (
		<BaseModal setIsShown={() => {}} isShown={wallet.shown}>
			<div className='flex justify-center items-center'>
				<div className='bg-background/50 p-6 rounded-lg shadow-lg flex items-center flex-col justify-center'>
					<h1 className='font-bold text-4xl mb-4 mobile:text-2xl'>
						Wallet successully created
					</h1>
					<div className='p-2 flex items-center flex-col'>
						<span className='py-1 font-bold text-xl'>Address:</span>{' '}
						<span
							className='block transition-all cursor-pointer hover:scale-110 hover:font-extrabold hover:text-lg'
							onClick={() => copyToClipboard(wallet.address, 'address')}
						>
							{short(wallet.address)}
						</span>
						{copiedAddress && (
							<span className='text-green-500 opacity-50'>
								Copied to clipboard!
							</span>
						)}
					</div>
					{/* <div className='p-2 flex items-center flex-col'>
						<span className='py-1 font-bold text-xl'>Private Key:</span>{' '}
						<span
							className='block transition-all cursor-pointer hover:scale-110 hover:font-extrabold hover:text-lg'
							onClick={() => copyToClipboard(wallet.privateKey, 'privateKey')}
						>
							{short(wallet.privateKey)}
						</span>
						{copiedKey && (
							<span className='text-green-500 opacity-50'>
								Copied to clipboard!
							</span>
						)}
					</div> */}
					<Button onClick={() => dispatch(setIsShown(false))}>Ok</Button>
				</div>
			</div>
		</BaseModal>
	)
}

export default CreateWalletModal
