import useSWR from 'swr'

interface SummonerEntries {
	rank: string
	tier: string
	queueType: string
	summonerName: string
}

interface SummonerEntriesResponse {
	data: SummonerEntries[] | undefined
	isLoading: boolean
	isError: Error | undefined
}

/** Encrypted summoner ID retrieved from useSummoner */
export const useSummonerEntries = (id: string): SummonerEntriesResponse => {
	const { data, error } = useSWR<SummonerEntries[], Error>(`/api/lol/league/v4/entries/by-summoner/${id}`)
	return {
		data,
		isLoading: !error && !data,
		isError: error,
	}
}
