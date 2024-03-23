import { FC } from 'react'
import { useAppDispatch } from '~/hooks/redux'
import { signInModalSlice } from '~/store/reducers/signInWalletModalSlice'
import Button from './Button'

const SignInWalletButton: FC = () => {
	const dispath = useAppDispatch()
	const { show } = signInModalSlice.actions
	return (
		<div className='max-w-52'>
			<Button
				onClick={() => {
					dispath(show())
				}}
				disabled={false}
			>
				Open wallet
			</Button>
		</div>
	)
}

export default SignInWalletButton
