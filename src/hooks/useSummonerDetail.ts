import useSWR from 'swr'

export interface SummonerDetail {
	leaguePoints: number
	rank: string
	tier: string
	queueType: string
	summonerName: string
	wins: number
	losses: number
	hotStreak: boolean
}

interface SummonerDetailResponse {
	data: SummonerDetail[] | undefined
	isLoading: boolean
	isError: Error | undefined
}

/** Encrypted summoner ID retrieved from useSummoner */
export const useSummonerDetail = (id: string): SummonerDetailResponse => {
	const { data, error } = useSWR<SummonerDetail[], Error>(`/api/lol/league/v4/entries/by-summoner/${id}`)
	return {
		data,
		isLoading: !error && !data,
		isError: error,
	}
}
