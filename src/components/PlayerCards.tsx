import React from 'react'
import { useSummoner } from '../hooks/useSummoner'
import { useSummonerEntries } from '../hooks/useSummonerEntries'

export const PlayerCard: React.FunctionComponent<{ summoner: string }> = ({ summoner }) => {
	const { data: summonerProfile, isLoading: isLoadingProfile, isError: isErrorSummoner } = useSummoner(summoner)

	// TODO: conditionally fetch if id is given or not
	const {
		data: summonerEntries,
		isLoading: isLoadingEntries,
		isError: isErrorSummonerEntries,
	} = useSummonerEntries(summonerProfile?.id ?? '')

	const isLoading = isLoadingProfile && isLoadingEntries
	const isError = isErrorSummoner || isErrorSummonerEntries

	// TODO: create nicer generic error component
	if (isError) {
		return <div>Fehler. {isError.message}</div>
	}

	// TODO: extract this logic to somewhere else
	let ranked5on5Stats
	if (summonerEntries) {
		ranked5on5Stats = summonerEntries.find((el) => el.queueType === 'RANKED_SOLO_5x5')
	}

	return (
		<div style={{ margin: '8px' }}>
			<span>{summoner}: </span>
			{isLoading ? <div>Loading ...</div> : <strong>{ranked5on5Stats ? ranked5on5Stats.tier : 'UNRANKED'}</strong>}{' '}
			{ranked5on5Stats ? `${ranked5on5Stats.rank}` : ''}
			{' <('}
			{ranked5on5Stats ? `WINS: ${ranked5on5Stats.wins} | ` : '- | '}
			{ranked5on5Stats ? `LOSSES: ${ranked5on5Stats.losses})>` : '-)>'}
		</div>
	)
}
