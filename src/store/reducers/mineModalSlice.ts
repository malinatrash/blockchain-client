import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface MineModalState {
	shown: boolean
	mining: boolean
}

const initialState: MineModalState = {
	shown: false,
	mining: false,
}

export const mineModalSlice = createSlice({
	name: 'mineModal',
	initialState,
	reducers: {
		set(state, action: PayloadAction<boolean>) {
			state.shown = action.payload
		},
		setMining(state, action: PayloadAction<boolean>) {
			state.mining = action.payload
		},
	},
})

export default mineModalSlice.reducer
