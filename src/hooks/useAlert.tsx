import { IAlert } from '~/components/Alert'
import { alertSlice } from '~/store/reducers/alertSlice'
import { useAppDispatch } from './redux'
export const useAlert = () => {
	const dispatch = useAppDispatch()
	const { show, hide } = alertSlice.actions
	const showAlert = (data: IAlert) => {
		dispatch(show(data))
		setTimeout(() => {
			dispatch(hide())
		}, 2200)
	}
	const hideAlert = () => dispatch(hide)
	return { showAlert, hideAlert }
}
