import { Tier } from '../components/PlayerCard'
import { ExtendedPlayer, getEntries, getSummoner, Rank, Summoner, SummonerDetail } from './leagueApiClient'
import { playersDB } from './playersDb'
import { theme } from '../app/styles/Theme'

export const getPlayers = async () => {
	const players = [] as ExtendedPlayer[]
	for (const summonerName of playersDB) {
		const summoner = await getSummoner(summonerName)
		if (!summoner) {
			continue
		}

		const player = await getPlayer(summoner)
		players.push(player)
		await sleep()
	}

	return players
}

const getPlayer = async (summoner: Summoner) => {
	const entries = await getEntries(summoner.id)
	const summonerRanked5on5Stats = filterRankedSolo5x5(entries)

	const theme = mapToTheme(summonerRanked5on5Stats)
	return {
		summoner,
		summonerRanked5on5Stats,
		theme,
	}
}

export const mapToTheme = (summonerRanked5on5Stats?: SummonerDetail | null) => {
	if (!summonerRanked5on5Stats) {
		return { ...theme.tier.unranked }
	}

	const tier = (summonerRanked5on5Stats?.tier ?? 'URANKED') as Tier
	const leaguePoints = summonerRanked5on5Stats?.leaguePoints ?? 0
	const rank = mapRankToPoints(summonerRanked5on5Stats?.rank) ?? 0

	switch (tier) {
		case 'IRON': {
			return { ...theme.tier.iron, score: theme.tier.iron.score + leaguePoints + rank }
		}
		case 'BRONZE': {
			return { ...theme.tier.bronze, score: theme.tier.bronze.score + leaguePoints + rank }
		}
		case 'SILVER': {
			return { ...theme.tier.silver, score: theme.tier.silver.score + leaguePoints + rank }
		}
		case 'GOLD': {
			return { ...theme.tier.gold, score: theme.tier.gold.score + leaguePoints + rank }
		}
		case 'PLATINUM': {
			return { ...theme.tier.platinum, score: theme.tier.platinum.score + leaguePoints + rank }
		}
		case 'DIAMOND': {
			return { ...theme.tier.diamond, score: theme.tier.diamond.score + leaguePoints + rank }
		}
		case 'MASTER': {
			return { ...theme.tier.master, score: theme.tier.master.score + leaguePoints + rank }
		}
		case 'GRANDMASTER': {
			return { ...theme.tier.grandmaster, score: theme.tier.grandmaster.score + leaguePoints + rank }
		}
		case 'CHALLENGER': {
			return { ...theme.tier.challenger, score: theme.tier.challenger.score + leaguePoints + rank }
		}
		default: {
			return { ...theme.tier.unranked }
		}
	}
}

export const mapRankToPoints = (rank: Rank) => {
	switch (rank) {
		case 'I': {
			return 400
		}
		case 'II': {
			return 300
		}
		case 'III': {
			return 200
		}
		case 'IV': {
			return 100
		}
		default: {
			return 0
		}
	}
}
export const filterRankedSolo5x5 = (entries: [] | null) => {
	if (!entries) return null
	return (entries as SummonerDetail[]).find((el) => el.queueType === 'RANKED_SOLO_5x5') ?? null
}

export const sleep = async (time = 1000) => {
	return new Promise((resolve) => setTimeout(resolve, time))
}
