import { useGetBalanceQuery, useLazyMineQuery } from '~/store/api/api'
import { mineModalSlice } from '~/store/reducers/mineModalSlice'
import { useAppDispatch, useAppSelector } from './redux'
import { useAlert } from './useAlert'

export const useMine = () => {
	const [fetchMine] = useLazyMineQuery()
	const dispatch = useAppDispatch()
	const { shown, mining } = useAppSelector(state => state.mineModalReducer)
	const { setMining } = mineModalSlice.actions
	const address = useAppSelector(state => state.createWalletSlice.address)
	const { refetch } = useGetBalanceQuery(address)
	const { set } = mineModalSlice.actions
	const alert = useAlert()
	const mine = async () => {
		dispatch(setMining(true))
		try {
			dispatch(set(true))
			const { data } = await fetchMine(address)
			alert.showAlert({
				title: 'Block mined',
				description: 'You get 1 coin!',
				shown: true,
				type: 'success',
			})
		} catch (error) {
			alert.showAlert({
				title: 'Error',
				description: 'Block doesnt mined :(',
				shown: true,
				type: 'error',
			})
		}
		refetch()
		dispatch(setMining(false))
	}
	return { mining, mine, shown, dispatch, set }
}
