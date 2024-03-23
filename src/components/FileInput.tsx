import { FC } from 'react'

interface IFileInput {
	selectedFile: File | null
	handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const FileInput: FC<IFileInput> = ({ selectedFile, handleFileChange }) => {
	return (
		<div className='flex flex-col items-center justify-center space-y-4'>
			<input
				className='opacity-70'
				id='fileInput'
				type='file'
				onChange={handleFileChange}
			/>
			{selectedFile && (
				<div>
					<p>Selected File: {selectedFile.name}</p>
					<p>File Size: {selectedFile.size} bytes</p>
				</div>
			)}
		</div>
	)
}

export default FileInput
