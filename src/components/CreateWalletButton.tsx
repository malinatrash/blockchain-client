import { useAppDispatch } from '~/hooks/redux'
import { useAlert } from '~/hooks/useAlert'
import { useLazyCreateWalletQuery } from '~/store/api/api'
import {
	CreateWalletState,
	createWalletSlice,
} from '~/store/reducers/createWalletSlice'
import Button from './Button'

function CreateWalletButton() {
	const [fetchCreateWallet, { isLoading }] = useLazyCreateWalletQuery()
	const { show } = createWalletSlice.actions
	const dispatch = useAppDispatch()
	const alert = useAlert()
	const download = async (address: string) => {
		const link = `http://localhost:8080/wallet/download?address=${address}`
		try {
			const response = await fetch(link)
			if (!response.ok) {
				throw new Error('Network response was not ok')
			}
			const blob = await response.blob()
			const filename = address + '.pem'
			const url = window.URL.createObjectURL(blob)
			const a = document.createElement('a')
			a.href = url
			a.download = filename
			document.body.appendChild(a)
			a.click()
			window.URL.revokeObjectURL(url)
			document.body.removeChild(a)
			console.log('File downloaded successfully')
		} catch (error) {
			console.error('There was a problem with your fetch operation:', error)
		}
	}

	const handleCreateWallet = async () => {
		try {
			const { data } = await fetchCreateWallet()
			const state: CreateWalletState = {
				address: data?.address ?? '',
				shown: true,
			}
			try {
				await download(data?.address ?? '')
			} catch (error) {
				alert.showAlert({
					title: 'Error',
					description: 'Private key is not created',
					shown: true,
					type: 'error',
				})
			}
			dispatch(show(state))
			alert.showAlert({
				title: 'Success',
				description: 'Wallet is created',
				shown: true,
				type: 'success',
			})
		} catch (error) {
			alert.showAlert({
				title: 'Error',
				description: 'Wallet not created',
				shown: true,
				type: 'error',
			})
		}
	}

	return (
		<div className='max-w-52'>
			<Button onClick={handleCreateWallet} disabled={isLoading}>
				{isLoading ? 'Creating...' : 'Create Wallet'}
			</Button>
		</div>
	)
}

export default CreateWalletButton
