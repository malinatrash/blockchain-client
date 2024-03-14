import { Transaction } from './Transaction'

export interface BlockData {
	id: number
	previousHash: string
	proof: number
	timestamp: string
	transactions: Transaction[]
}
