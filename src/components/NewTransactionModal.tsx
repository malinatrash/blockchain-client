import { FC, useState } from 'react'
import { useAppSelector } from '~/hooks/redux'
import { useAlert } from '~/hooks/useAlert'
import { useCreateTransactionMutation } from '~/store/api/api'
import BaseModal from './BaseModal'
import Button from './Button'
import TextField from './TextField'

interface NewTransactionModalProps {
	isShown: boolean
	setIsShown: (value: boolean) => void
}

const NewTransactionModal: FC<NewTransactionModalProps> = ({
	isShown,
	setIsShown,
}) => {
	const senderAddress = useAppSelector(state => state.createWalletSlice.address)
	const [amount, setAmount] = useState<string>('')
	const [recipient, setRecipient] = useState<string>('')
	const alert = useAlert()

	const [createTransaction] = useCreateTransactionMutation()
	const handleCreateTransaction = async () => {
		try {
			const response = await createTransaction({
				sender: senderAddress,
				recipient,
				amount: parseInt(amount),
			})
			if (response.error) {
				alert.showAlert({
					description: String(error),
					shown: true,
					title: 'Error',
					type: 'error',
				})
			}
			setIsShown(false)
			alert.showAlert({
				description: 'The transaction was successfully sent',
				shown: true,
				title: 'Successful',
				type: 'success',
			})
		} catch (error) {
			alert.showAlert({
				description: String(error),
				shown: true,
				title: 'Error',
				type: 'error',
			})
		}
	}

	return (
		<BaseModal isShown={isShown} setIsShown={setIsShown}>
			<div className='flex flex-col gap-4'>
				<h1 className='font-bold text-5xl mobile:text-2xl text-center'>
					NEW TRANSACTION
				</h1>
				<TextField
					placeholder='Amount'
					value={amount}
					onChange={e => setAmount(e.target.value)}
				/>
				<TextField
					placeholder='Recipient'
					value={recipient}
					onChange={e => setRecipient(e.target.value)}
				/>
				<Button onClick={handleCreateTransaction}>Send</Button>
			</div>
		</BaseModal>
	)
}

export default NewTransactionModal
