import React from 'react'
import styled from 'styled-components'
import { ExtendedPlayer } from '../lib/leagueApiClient'
import { SummonerAvatar } from './SummonerAvatar'
import { SummonerDetails } from './SummonerDetails'
import { SummonerProfile } from './SummonerProfile'

export const PlayerCard: React.FunctionComponent<{ player: ExtendedPlayer }> = ({ player }) => {
	const { summoner, summonerRanked5on5Stats, theme } = player

	return (
		<OuterWrapper>
			<Wrapper borderColor={theme.color}>
				<div style={{ display: 'flex' }}>
					<a
						href={`https://euw.op.gg/summoner/userName=${player.summoner.name}`}
						target="_blank"
						rel="noreferrer"
						title={`https://euw.op.gg/summoner/userName=${player.summoner.name}`}
					>
						{summoner && <SummonerAvatar level={summoner.summonerLevel} profileIconId={summoner.profileIconId} />}
					</a>

					<SummonerProfileWrapper>
						{summoner && (
							<SummonerProfile
								profile={summoner}
								hotStreak={summonerRanked5on5Stats?.hotStreak ?? false}
								freshBlood={summonerRanked5on5Stats?.freshBlood ?? false}
								veteran={summonerRanked5on5Stats?.veteran ?? false}
							/>
						)}
						{summonerRanked5on5Stats && <SummonerDetails details={summonerRanked5on5Stats} />}
					</SummonerProfileWrapper>
				</div>
				<SummonerAvatarBorder imageUrl={theme.image} />
			</Wrapper>
		</OuterWrapper>
	)
}

export type Tier =
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
