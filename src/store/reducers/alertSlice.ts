import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IAlert } from '~/components/Alert'

interface AlertState extends IAlert {}

const initialState: AlertState = {
	shown: false,
	title: 'default',
	description: 'default',
	type: 'success',
}

export const alertSlice = createSlice({
	name: 'alert',
	initialState,
	reducers: {
		show(state, action: PayloadAction<IAlert>) {
			const data = action.payload
			state.description = data.description
			state.title = data.title
			state.type = data.type
			state.shown = true
		},
		hide(state) {
			state.shown = false
		},
	},
})

export default alertSlice.reducer
