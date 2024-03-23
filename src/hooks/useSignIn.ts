import { useState } from 'react'
import { useGetBalanceQuery, useUploadFileMutation } from '~/store/api/api'
import { createWalletSlice } from '~/store/reducers/createWalletSlice'
import { signInModalSlice } from '~/store/reducers/signInWalletModalSlice'
import { useAppDispatch, useAppSelector } from './redux'
import { useAlert } from './useAlert'

export const useSignIn = () => {
	const dispatch = useAppDispatch()
	const action = createWalletSlice.actions
	const [fetch] = useUploadFileMutation()
	const { address, privateKey, shown } = useAppSelector(
		state => state.signInWalletModalReducer
	)
	const { hide, setAddress, setPrivateKey, show } = signInModalSlice.actions
	const [selectedFile, setSelectedFile] = useState<File | null>(null)
	const { refetch } = useGetBalanceQuery(address)

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files && event.target.files[0]
		if (file) {
			setSelectedFile(file)
		}
	}

	const alert = useAlert()

	const auth = async () => {
		try {
			if (selectedFile) {
				const formData = new FormData()
				formData.append('file', selectedFile)
				const response = await fetch(formData).unwrap()
				console.log('File uploaded:', response)
				dispatch(action.setAddress(response.address))
				dispatch(hide())
				refetch()
			}
			refetch()
		} catch (error) {
			console.error('Error during authentication:', error)
		}
	}

	return {
		address,
		privateKey,
		hide,
		show,
		auth,
		shown,
		dispatch,
		setAddress,
		setPrivateKey,
		alert,
		selectedFile,
		setSelectedFile,
		handleFileChange,
	}
}
