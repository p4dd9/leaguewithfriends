import React, { FunctionComponent } from 'react'
import { SummonerDetail } from '../lib/leagueApiClient'

interface SummonerDetailsProps {
	details: SummonerDetail
}

export const SummonerDetails: FunctionComponent<SummonerDetailsProps> = ({ details }: SummonerDetailsProps) => {
	const { rank, tier, wins, losses, leaguePoints } = details

	const winRate = Math.round((wins / (wins + losses)) * 100)
	return (
		<div>
			<div>
				{tier} {rank}, {leaguePoints}LP, W: {wins}, L: {losses}, WR: {winRate}%
			</div>
		</div>
	)
}
