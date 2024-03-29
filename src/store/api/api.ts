import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BLockchain } from '~/models/Blockchain'
import { Wallet } from '~/models/Wallet'

const API_URL = import.meta.env.DEV
	? 'http://localhost:8080'
	: 'http://92.51.45.202:8080'

interface GetBalanceResponse {
	balance: number
}

export const api = createApi({
	reducerPath: '/',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: builder => ({
		createWallet: builder.query<Wallet, void>({
			query: () => ({
				url: '/wallet',
				method: 'GET',
			}),
		}),
		getChain: builder.query<BLockchain, void>({
			query: () => ({
				url: `/chain`,
				method: 'GET',
			}),
		}),
		mine: builder.query<object, string>({
			query: (address: string) => ({
				url: `/mine?address=${address}`,
				method: 'GET',
			}),
		}),
		uploadFile: builder.mutation<File, FormData>({
			query: formData => ({
				url: '/wallet/get',
				method: 'POST',
				body: formData,
			}),
		}),
		getBalance: builder.query<GetBalanceResponse, string>({
			query: (address: string) => ({
				url: `/balance?address=${address}`,
				method: 'GET',
			}),
		}),
		createTransaction: builder.mutation<
			void,
			{ sender: string; recipient: string; amount: number }
		>({
			query: ({ sender, recipient, amount }) => ({
				url: '/transactions/new',
				method: 'POST',
				body: { sender, recipient, amount },
			}),
		}),
	}),
})

export const {
	useLazyCreateWalletQuery,
	useLazyMineQuery,
	useGetChainQuery,
	useLazyGetChainQuery,
	useGetBalanceQuery,
	useCreateTransactionMutation,
	useUploadFileMutation,
} = api
