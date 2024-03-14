import { useEffect, useState } from 'react'

interface Transaction {
	amount: number
	recipient: string
	sender: string
}

interface BlockData {
	id: number
	previousHash: string
	proof: number
	timestamp: string
	transactions: Transaction[]
}

function Block({
	id,
	previousHash,
	proof,
	timestamp,
	transactions,
}: BlockData) {
	return (
		<div className='border border-gray-300 p-4 mb-4 rounded-lg'>
			<h2 className='text-lg font-semibold mb-2'>Block ID: {id}</h2>
			<p className='mb-2'>
				<span className='font-semibold'>Previous Hash:</span> {previousHash}
			</p>
			<p className='mb-2'>
				<span className='font-semibold'>Proof:</span> {proof}
			</p>
			<p className='mb-2'>
				<span className='font-semibold'>Timestamp:</span> {timestamp}
			</p>
			<div>
				<h3 className='text-md font-semibold mb-2'>Transactions:</h3>
				{transactions ? (
					<ul>
						{transactions.map((transaction, index) => (
							<li key={index} className='mb-1'>
								<span className='font-semibold'>Amount:</span>{' '}
								{transaction.amount},
								<span className='font-semibold'> Recipient:</span>{' '}
								{transaction.recipient},
								<span className='font-semibold'> Sender:</span>{' '}
								{transaction.sender}
							</li>
						))}
					</ul>
				) : (
					<p>No transactions</p>
				)}
			</div>
		</div>
	)
}

function App() {
	const [data, setData] = useState<BlockData[] | null>(null)

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		try {
			const response = await fetch('http://92.51.45.202:8080/chain')
			const jsonData = await response.json()
			setData(jsonData.chain) // Update this line to setData(jsonData.chain);
		} catch (error) {
			console.error('Error fetching data:', error)
		}
	}

	return (
		<div className='container mx-auto px-4 py-8'>
			<h1 className='text-2xl font-bold mb-4'>JSON Data:</h1>
			{data ? (
				<div>
					<h2 className='text-lg font-semibold mb-4'>
						Blockchain Length: {data.length}
					</h2>
					{data.map(
						(
							block,
							index // Update this line to data.map
						) => (
							<Block key={index} {...block} />
						)
					)}
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	)
}

export default App
