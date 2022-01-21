import { Tier } from '../components/PlayerCard'
import { ExtendedPlayer, getEntries, getSummoner, Rank, Summoner, SummonerDetail } from './leagueApiClient'
import { playersDB } from './playersDb'

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
		return { emblem: 'URANKED', color: '#86807e', score: 0 }
	}

	const tier = (summonerRanked5on5Stats?.tier ?? 'URANKED') as Tier
	const leaguePoints = summonerRanked5on5Stats?.leaguePoints ?? 0
	const rank = mapRankToPoints(summonerRanked5on5Stats?.rank) ?? 0

	switch (tier) {
		case 'IRON': {
			// TODO: read color from theme
			return { emblem: '/emblems/Emblem_Iron.png', color: '#86807e', score: 0 + leaguePoints + rank }
		}
		case 'BRONZE': {
			return { emblem: '/emblems/Emblem_Bronze.png', color: '#915335', score: 1000 + leaguePoints + rank }
		}
		case 'SILVER': {
			return { emblem: '/emblems/Emblem_Silver.png', color: '#748e95', score: 2000 + leaguePoints + rank }
		}
		case 'GOLD': {
			return { emblem: '/emblems/Emblem_Gold.png', color: '#ecc368', score: 3000 + leaguePoints + rank }
		}
		case 'PLATINUM': {
			return { emblem: '/emblems/Emblem_Platinum.png', color: '#507a77', score: 4000 + leaguePoints + rank }
		}
		case 'DIAMOND': {
			return { emblem: '/emblems/Emblem_Diamond.png', color: '#a188c4', score: 5000 + leaguePoints + rank }
		}
		case 'MASTER': {
			return { emblem: '/emblems/Emblem_Master.png', color: '#bb13bd', score: 6000 + leaguePoints + rank }
		}
		case 'GRANDMASTER': {
			return { emblem: '/emblems/Emblem_Grandmaster.png', color: '#d7272b', score: 7000 + leaguePoints + rank }
		}
		case 'CHALLENGER': {
			return { emblem: '/emblems/Emblem_Challenger.png', color: '#2dbbfe', score: 8000 + leaguePoints + rank }
		}
		default: {
			// TODO: find better fallback for UNRANKED profile theme
			return { emblem: 'URANKED', color: '#86807e', score: 0 }
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
