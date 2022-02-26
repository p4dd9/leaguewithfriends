import React, { FunctionComponent } from 'react'
import { SummonerDetail } from '../lib/leagueApiClient'

interface SummonerDetailsProps {
	details: SummonerDetail
}

export const SummonerDetails: FunctionComponent<SummonerDetailsProps> = ({ details }: SummonerDetailsProps) => {
	const { rank, tier, wins, losses, leaguePoints } = details
	const gamesCount = wins + losses
	const winRate = Math.round((wins / gamesCount) * 100)

	return (
		<div>
			{tier} {rank}, {leaguePoints}LP, Games: {gamesCount}, Wins: {wins}, Losses: {losses}, Winrate: {winRate}%
		</div>
	)
}
