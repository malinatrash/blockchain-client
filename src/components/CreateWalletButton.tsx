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

	const handleCreateWallet = async () => {
		try {
			const { data } = await fetchCreateWallet()
			console.log(data)
			const state: CreateWalletState = {
				address: data?.address ?? '',
				privateKey: data?.privateKey ?? '',
				shown: true,
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
