import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { ExtendedPlayer } from '../lib/leagueApiClient'
import { PlayerCard } from './PlayerCard'

interface ScoreboardProps {
	players: ExtendedPlayer[]
}

export const ScoreBoard: FunctionComponent<ScoreboardProps> = ({ players }: ScoreboardProps) => {
	console.log(players)
	const stortedPlayers = players.sort((a, b) => (a.theme.score < b.theme.score ? 1 : -1))
	return (
		<Wrapper>
			<Title>League With Friends</Title>
			{stortedPlayers.map((player) => (
				<PlayerCard player={player} key={player.summoner.accountId} />
			))}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	max-width: 900px;
	margin: auto;
	margin-bottom: 75px;
`

const Title = styled.h1`
	margin: 48px 0;
	color: #e91e63;
	font-family: 'Helvetica Neue', sans-serif;
	font-size: 48px;
	font-weight: bold;
	letter-spacing: -1px;
	line-height: 1;
	box-shadow: -9px -7px #e6e6e6;
	display: inline-block;
	padding: 13px;
`
