import React from 'react'
import styled from 'styled-components'
import { PlayerCard } from './PlayerCard'

const players = [
	'TASBOT',
	'Nucle4rSunrise',
	'Killerie',
	'Salamaleikum',
	'Stoned Weaver',
	'cibo',
	'Insectfreak',
	'InaJ',
	'enjuli',
	'El Feo Demente',
	'Netxus',
	'Worufy',
	'Zeroxter',
	'Lydina',
]
export const ScoreBoard = () => {
	return (
		<Wrapper>
			<Title>Scoreboard 5on5 RANKED </Title>
			{players.map((player) => (
				<PlayerCard summoner={player} key={player} />
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
