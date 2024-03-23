import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface SignInModalState {
	shown: boolean
	address: string
	privateKey: string
}

const initialState: SignInModalState = {
	shown: false,
	address: '',
	privateKey: '',
}

export const signInModalSlice = createSlice({
	name: 'SignInModal',
	initialState,
	reducers: {
		setAddress(state, action: PayloadAction<string>) {
			state.address = action.payload
		},
		setPrivateKey(state, action: PayloadAction<string>) {
			state.privateKey = action.payload
		},
		show(state) {
			state.shown = true
		},
		hide(state) {
			state.shown = false
		},
	},
})

export default signInModalSlice.reducer
