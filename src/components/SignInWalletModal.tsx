import { FC } from 'react'
import { useSignIn } from '~/hooks/useSignIn'
import BaseModal from './BaseModal'
import Button from './Button'
import FileInput from './FileInput'

const SignInWalletModal: FC = () => {
	const { shown, auth, dispatch, hide, handleFileChange, selectedFile } =
		useSignIn()
	return (
		<BaseModal
			setIsShown={() => {
				dispatch(hide())
			}}
			isShown={shown}
		>
			<div className='flex flex-col gap-4'>
				<h1 className='font-bold text-5xl mobile:text-2xl text-center'>
					Sign In Wallet
				</h1>

				{/* <TextField
					placeholder='Private Key'
					value={privateKey}
					onChange={e => dispatch(setPrivateKey(e.target.value))}
				/> */}
				<FileInput
					handleFileChange={handleFileChange}
					selectedFile={selectedFile}
				/>
				<Button onClick={auth}>Send</Button>
			</div>
		</BaseModal>
	)
}

export default SignInWalletModal
