import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface SummonerProfile {
	profileIconId: number
	level: number
}

export const SummonerAvatar: FunctionComponent<SummonerProfile> = ({ profileIconId, level }: SummonerProfile) => {
	return (
		<Wrapper>
			<SummonerAvatarIcon
				alt="Summoner Profile Icon"
				src={`https://ddragon.leagueoflegends.com/cdn/11.14.1/img/profileicon/${profileIconId}.png`}
			/>
			<SummonerLevelText>{level}</SummonerLevelText>
		</Wrapper>
	)
}

const SummonerAvatarIcon = styled.img`
	height: 75px;
	width: 75px;
	border-radius: 50%;
	border: 3px solid black;
`

const Wrapper = styled.div`
	position: relative;
`

const SummonerLevelText = styled.div`
	position: absolute;
	bottom: 0;
	background-color: ${(p) => p.theme.color.dark};
	color: ${(p) => p.theme.color.white};
	padding: 4px 8px;
	border-radius: 10px;
	font-size: 10px;
	left: 50%;
	transform: translateX(-50%);
`
