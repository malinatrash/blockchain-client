import Pickaxe from '@assets/pickaxe.svg'
import { FC } from 'react'
import { useChain } from '~/hooks/useChain'
import { useMine } from '~/hooks/useMine'
import BaseModal from './BaseModal'
import Button from './Button'

const MineModal: FC = () => {
	const { mining, shown, dispatch, set } = useMine()
	const { refetch } = useChain()
	return (
		<BaseModal setIsShown={() => {}} isShown={shown}>
			<div className='flex justify-center items-center'>
				<div className='bg-background/50 p-6 rounded-lg shadow-lg flex items-center flex-col justify-center'>
					<h1 className='font-bold text-4xl'>{mining ? 'Mining!' : 'Done!'}</h1>
					<img
						className={`${mining ? 'animate-spin' : 'animate-bounce'}`}
						src={Pickaxe}
					/>
					<Button
						onClick={() => {
							dispatch(set(false))
							refetch()
						}}
					>
						Ok
					</Button>
				</div>
			</div>
		</BaseModal>
	)
}

export default MineModal
