export const apiKey = process.env.RIOT_GAMES_API_KEY || 'API_KEY_MISSING'

// TODO: add matchIds query
// https://developer.riotgames.com/apis#match-v5/
export const getMatchIds = async (puuid: string) => {
	try {
		const matchIdsResponse = await fetch(`https://euw1.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids`, {
			headers: {
				'X-Riot-Token': apiKey,
			},
		})
		if (matchIdsResponse.status === 429) {
			throw new Error('Rate limit exceeded')
		}
		return (await matchIdsResponse.json()) as string[]
	} catch (e) {
		console.error(`Error fetching Match Ids by puuid: ${puuid}: ${e}`)
	}
}

// https://developer.riotgames.com/apis#match-v5/
export const getMatch = async (matchId: string) => {
	try {
		const matchResponse = await fetch(`https://euw1.api.riotgames.com/lol/match/v5/matches/${matchId}`, {
			headers: {
				'X-Riot-Token': apiKey,
			},
		})
		if (matchResponse.status === 429) {
			throw new Error('Rate limit exceeded')
		}
		return await matchResponse.json()
	} catch (e) {
		console.error(`Error fetching Matches by id: ${matchId}: ${e}`)
	}
}

// https://developer.riotgames.com/apis#summoner-v4
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

// https://developer.riotgames.com/apis#league-v4
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
	image: string
	color: string
	score: number
}

export interface ExtendedPlayer extends Player {
	theme: PlayerTheme
}
