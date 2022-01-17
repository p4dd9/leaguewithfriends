import useSWR from 'swr'

export interface Summoner {
	accountId: string
	id: string
	name: string
	profileIconId: number
	puuid: string
	revisionDate: number
	summonerLevel: number
}

interface SummonerResponse {
	data: Summoner | undefined
	isLoading: boolean
	isError: Error | undefined
}

export const useSummoner = (summoner: string): SummonerResponse => {
	const { data, error } = useSWR<Summoner, Error>(`/api/lol/summoner/v4/summoners/by-name/${summoner}`)
	return {
		data,
		isLoading: !error && !data,
		isError: error,
	}
}
