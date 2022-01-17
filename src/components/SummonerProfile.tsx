import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { AiFillFire } from 'react-icons/ai'
import { FaMedal } from 'react-icons/fa'
import { MdBloodtype } from 'react-icons/md'
import { Summoner } from '../pages'

interface SummonerProfile {
	profile: Summoner
	hotStreak: boolean
	veteran: boolean
	freshBlood: boolean
}

export const SummonerProfile: FunctionComponent<SummonerProfile> = ({
	profile,
	hotStreak,
	veteran,
	freshBlood,
}: SummonerProfile) => {
	const { name } = profile
	return (
		<SummonerProfileWrapper>
			<SummonerName>{name} </SummonerName>
			<HotStreakIconWrapper title={hotStreak ? 'Hotstreak' : ''}>
				{hotStreak && <AiFillFire size={18} />}
			</HotStreakIconWrapper>
			<FreshBloodIconWrapper title={freshBlood ? 'Freshblood' : ''}>
				{freshBlood && <MdBloodtype size={19} />}
			</FreshBloodIconWrapper>

			<VeteranIconWrapper title={veteran ? 'Veteran' : ''}>{veteran && <FaMedal size={16} />}</VeteranIconWrapper>
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

const FreshBloodIconWrapper = styled.div`
	margin-left: ${(p) => p.theme.space.xs}px;
	margin-bottom: 1px;
	display: flex;

	svg {
		color: ${(p) => p.theme.color.freshBlood};
	}
`

const VeteranIconWrapper = styled.div`
	margin-left: ${(p) => p.theme.space.xs}px;
	margin-bottom: 1px;
	display: flex;

	svg {
		color: ${(p) => p.theme.color.veteran};
	}
`
