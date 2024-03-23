import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Wallet } from '~/models/Wallet'

export interface CreateWalletState extends Wallet {
	shown: boolean
}

const initialState: CreateWalletState = {
	address: '',
	shown: false,
}

export const createWalletSlice = createSlice({
	name: 'CreateWallet',
	initialState,
	reducers: {
		setAddress(state, action: PayloadAction<string>) {
			state.address = action.payload
		},
		show(state, action: PayloadAction<CreateWalletState>) {
			const data = action.payload
			state.address = data.address
			state.shown = true
		},
		hide(state) {
			state.shown = false
		},
		setIsShown(state, action: PayloadAction<boolean>) {
			state.shown = action.payload
		},
	},
})

export default createWalletSlice.reducer
