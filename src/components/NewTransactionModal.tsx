import { FC, useState } from 'react'
import { getUUID } from '~/funcs/getUUID'
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
	const [amount, setAmount] = useState<number | string>('')
	const [recipient, setRecipient] = useState<string>('')
	const [sender] = useState<string>(getUUID())

	const CreateNewTransaction = async (
		amount: number | string,
		recipient: string,
		sender: string
	) => {
		try {
			const response = await fetch(
				'http://92.51.45.202:8080/transactions/new',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						sender,
						recipient,
						amount,
					}),
				}
			)
			console.log(response)
			if (response.ok) {
				setIsShown(false)
			}
		} catch (error) {
			alert(error)
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
				<Button
					onClick={async () => {
						await CreateNewTransaction(amount, recipient, sender)
					}}
				>
					Send
				</Button>
			</div>
		</BaseModal>
	)
}

export default NewTransactionModal
