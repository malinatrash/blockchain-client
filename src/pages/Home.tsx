import Favicon from '@assets/logo.png'
import { useEffect, useState } from 'react'
import { Block } from '~/components/Block'
import Button from '~/components/Button'
import { BLockchain } from '~/models/Blockchain'

const Home = () => {
	const [data, setData] = useState<BLockchain>()

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		try {
			const response = await fetch('http://92.51.45.202:8080/chain')
			const jsonData = await response.json()
			setData(jsonData)
		} catch (error) {
			console.error('Error fetching data:', error)
		}
	}
	const wrapper =
		'container flex flex-col max-h-full min-h-screen items-center bg-background select-none'
	const content =
		'flex items-center mobile:flex-col-reverse gap-4 flex-wrap justify-center'
	return (
		<div className={wrapper + ' px-12 py-4'}>
			<div className='flex items-center w-full'>
				<h1 className='hover:scale-105 font-light  transition-all duration-500 text-[4rem] mobile:text-[3rem]'>
					Blockchain
				</h1>
				<img className='w-60 transition-all duration-500' src={Favicon} />
			</div>
			<div className={content}>
				{data?.chain ? (
					data.chain.map((block, index) => <Block key={index} {...block} />)
				) : (
					<></>
				)}
			</div>
			<div className='fixed bottom-16 flex gap-4'>
				<Button onClick={() => {}}>MINE</Button>
				<Button onClick={() => {}}>NEW TRANSACTION</Button>
			</div>
		</div>
	)
}

export default Home
