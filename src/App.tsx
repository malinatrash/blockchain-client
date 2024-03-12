import { useEffect, useState } from 'react'
import './App.css'

function App() {
	const [data, setData] = useState(null)

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		try {
			const response = await fetch('http://localhost:8001/chain')
			const jsonData = await response.json()
			setData(jsonData)
		} catch (error) {
			console.error('Error fetching data:', error)
		}
	}

	return (
		<div className='App'>
			<h1>JSON Data:</h1>
			{data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
		</div>
	)
}

export default App
