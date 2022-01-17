import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Summoner } from '../hooks/useSummoner'
import { AiOutlineFire, AiFillFire } from 'react-icons/ai'

interface SummonerProfile {
	profile: Summoner
	hotStreak: boolean
}

export const SummonerProfile: FunctionComponent<SummonerProfile> = ({ profile, hotStreak }: SummonerProfile) => {
	const { name } = profile
	return (
		<SummonerProfileWrapper>
			<SummonerName>{name} </SummonerName>
			<HotStreakIconWrapper title={hotStreak ? 'Hotstreak' : ''}>
				{hotStreak && <AiFillFire size={18} />}
			</HotStreakIconWrapper>
		</SummonerProfileWrapper>
	)
}

const SummonerName = styled.span`
	font-weight: bold;
`

const SummonerProfileWrapper = styled.div`
	display: flex;
	align-items: center;
`

const HotStreakIconWrapper = styled.div`
	margin-left: ${(p) => p.theme.space.xs}px;
	margin-bottom: 1px;
	display: flex;

	svg {
		color: ${(p) => p.theme.color.pastelred};
	}
`
