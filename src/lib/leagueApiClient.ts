export const apiKey = process.env.NEXT_PUBLIC_RIOT_GAMES_API_KEY || 'API_KEY_MISSING'

export const getSummoner = async (summonerName: string) => {
	try {
		const summonerDataResponse = await fetch(
			`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`,
			{
				headers: {
					'X-Riot-Token': apiKey,
				},
			}
		)
		if (summonerDataResponse.status === 429) {
			throw new Error('Rate limit exceeded')
		}
		return (await summonerDataResponse.json()) as Summoner
	} catch (e) {
		console.error(`Error fetching Summoner ${summonerName}: ${e}`)
	}
}

export const getEntries = async (summonerId: string) => {
	try {
		const summonerEntriesResponse = await fetch(
			`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}`,
			{
				headers: {
					'X-Riot-Token': apiKey,
				},
			}
		)
		if (summonerEntriesResponse.status === 429) {
			throw new Error('Rate limit exceeded')
		}
		return await summonerEntriesResponse.json()
	} catch (e) {
		console.error(`Error fetchin Entries for Summoner ID ${summonerId}: ${e}`)
	}
}

export interface Summoner {
	accountId: string
	id: string
	name: string
	profileIconId: number
	puuid: string
	revisionDate: number
	summonerLevel: number
}

export type Rank = 'IV' | 'III' | 'II' | 'I' | ''

export interface SummonerDetail {
	leaguePoints: number
	rank: Rank
	tier: string
	queueType: string
	summonerName: string
	wins: number
	losses: number
	hotStreak: boolean
	veteran: boolean
	freshBlood: boolean
}

export interface Player {
	summoner: Summoner
	summonerRanked5on5Stats: SummonerDetail | null
}

interface PlayerTheme {
	emblem: string
	color: string
	score: number
}

export interface ExtendedPlayer extends Player {
	theme: PlayerTheme
}
