import { useGetChainQuery } from '~/store/api/api'

export const useChain = () => {
	const { isFetching, refetch, currentData } = useGetChainQuery()
	return { isFetching, refetch, currentData }
}
