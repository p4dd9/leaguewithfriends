import React from 'react'
import styled from 'styled-components'
import { useSummoner } from '../hooks/useSummoner'
import { useSummonerDetail } from '../hooks/useSummonerDetail'
import { SummonerAvatar } from './SummonerAvatar'
import { SummonerDetails } from './SummonerDetails'
import { SummonerProfile } from './SummonerProfile'

export const PlayerCard: React.FunctionComponent<{ summoner: string }> = ({ summoner }) => {
	const { data: summonerProfile, isLoading: isLoadingProfile, isError: isErrorSummoner } = useSummoner(summoner)

	// TODO: conditionally fetch if id is given or not
	const {
		data: summonerEntries,
		isLoading: isLoadingEntries,
		isError: isErrorSummonerEntries,
	} = useSummonerDetail(summonerProfile?.id ?? '')

	// TODO: use isLoading state for skeleton loading
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

	const profileTheme = mapTierToProfileTheme((ranked5on5Stats?.tier ?? 'URANKED') as Tier)
	return (
		<OuterWrapper>
			<Wrapper borderColor={profileTheme.color}>
				<div style={{ display: 'flex' }}>
					<a
						href={`https://euw.op.gg/summoner/userName=${summoner}`}
						target="_blank"
						rel="noreferrer"
						title={`https://euw.op.gg/summoner/userName=${summoner}`}
					>
						{summonerProfile && (
							<SummonerAvatar level={summonerProfile.summonerLevel} profileIconId={summonerProfile.profileIconId} />
						)}
					</a>

					<SummonerProfileWrapper>
						{summonerProfile && (
							<SummonerProfile profile={summonerProfile} hotStreak={ranked5on5Stats?.hotStreak ?? false} />
						)}
						{ranked5on5Stats && <SummonerDetails details={ranked5on5Stats} />}
					</SummonerProfileWrapper>
				</div>
				<SummonerAvatarBorder imageUrl={profileTheme.emblem} />
			</Wrapper>
		</OuterWrapper>
	)
}

type Tier =
	| 'IRON'
	| 'BRONZE'
	| 'SILVER'
	| 'GOLD'
	| 'PLATINUM'
	| 'DIAMOND'
	| 'MASTER'
	| 'GRANDMASTER'
	| 'CHALLENGER'
	| 'URANKED'

const mapTierToProfileTheme = (tier: Tier) => {
	switch (tier) {
		case 'IRON': {
			// TODO: read color from theme
			return { emblem: '/emblems/Emblem_Iron.png', color: '#86807e' }
		}
		case 'BRONZE': {
			return { emblem: '/emblems/Emblem_Bronze.png', color: '#915335' }
		}
		case 'SILVER': {
			return { emblem: '/emblems/Emblem_Silver.png', color: '#748e95' }
		}
		case 'GOLD': {
			return { emblem: '/emblems/Emblem_Gold.png', color: '#ecc368' }
		}
		case 'PLATINUM': {
			return { emblem: '/emblems/Emblem_Platinum.png', color: '#507a77' }
		}
		case 'DIAMOND': {
			return { emblem: '/emblems/Emblem_Diamond.png', color: '#a188c4' }
		}
		case 'MASTER': {
			return { emblem: '/emblems/Emblem_Master.png', color: '#bb13bd' }
		}
		case 'GRANDMASTER': {
			return { emblem: '/emblems/Emblem_Grandmaster.png', color: '#d7272b' }
		}
		case 'CHALLENGER': {
			return { emblem: '/emblems/Emblem_Challenger.png', color: '#2dbbfe' }
		}
		default: {
			// TODO: find better fallback for UNRANKED profile theme
			return { emblem: 'URANKED', color: '#86807e' }
		}
	}
}

const OuterWrapper = styled.div`
	a {
		text-decoration: none;
	}
`

// TODO: update to 2022 emblems https://leagueoflegends.fandom.com/wiki/Rank_(League_of_Legends)
const SummonerAvatarBorder = styled.div<{ imageUrl: string }>`
	width: 66px;
	background-image: url(${(p) => p.imageUrl});
	background-repeat: no-repeat;
	background-size: cover;
`

const Wrapper = styled.div<{ borderColor: string }>`
	padding: ${(p) => p.theme.space.m}px ${(p) => p.theme.space.xl}px;
	background-color: ${(p) => p.theme.color.decentBeton};
	margin-bottom: ${(p) => p.theme.space.m}px;
	min-height: 90px;
	display: flex;
	box-shadow: 4px 4px ${(p) => p.borderColor};
	justify-content: space-between;
`

const SummonerProfileWrapper = styled.div`
	color: ${(p) => p.theme.color.blackPeral};
	margin: ${(p) => p.theme.space.l}px ${(p) => p.theme.space.l}px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`
