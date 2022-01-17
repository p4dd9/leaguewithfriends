import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Player } from '../pages'
import { PlayerCard } from './PlayerCard'

interface ScoreboardProps {
	players: Player[]
}

export const ScoreBoard: FunctionComponent<ScoreboardProps> = ({ players }: ScoreboardProps) => {
	return (
		<Wrapper>
			<Title>League With Friends</Title>
			{players.map((player) => (
				<PlayerCard player={player} key={player.summonerProfile.accountId} />
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
