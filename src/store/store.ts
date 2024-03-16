import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { api } from './api/api'
import alertReducer from './reducers/alertSlice'
import createWalletSlice from './reducers/createWalletSlice'
import mineModalReducer from './reducers/mineModalSlice'
const rootReducer = combineReducers({
	alertReducer,
	createWalletSlice,
	mineModalReducer,
	[api.reducerPath]: api.reducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(api.middleware),
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
