import React, { useEffect, useState } from 'react'

// https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/{NAME}
// https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/{encryptedSummonerId}
export default class SummonerDTO {
	public profileIconId = -1
	public name = ''
	public puuid = ''
	public summonerLevel = -1
	public accountId = ''
	public id = ''
	public revisionDate = -1
}

class LeagueEntryDTO {
	rank = ''
	tier = ''
	queueType = ''
	summonerName = ''
}

const apiKey = process.env.NEXT_PUBLIC_RIOT_GAMES_API_KEY || 'API_KEY_MISSING'
export const PlayerCard: React.FunctionComponent<{ summoner: string }> = ({ summoner }) => {
	const [data, setData] = useState<null | LeagueEntryDTO>(null)
	useEffect(() => {
		fetch(`/api/lol/summoner/v4/summoners/by-name/${summoner}`, {
			method: 'GET',
			headers: {
				'X-Riot-Token': apiKey,
			},
		})
			.then(async (response) => {
				const data = (await response.json()) as SummonerDTO
				fetch(`/api/lol/league/v4/entries/by-summoner/${data.id}`, {
					method: 'GET',
					headers: {
						'X-Riot-Token': apiKey,
					},
				})
					.then(async (res) => {
						const resData = (await res.json()) as LeagueEntryDTO[]
						const soloRanked5x5 = resData.find((data2) => data2.queueType === 'RANKED_SOLO_5x5') as LeagueEntryDTO
						setData(soloRanked5x5)
					})
					.catch((e) => console.log(e))
			})
			.catch((e) => {
				console.log(e)
			})
	}, [])
	return <div style={{ margin: '8px' }}>{`${summoner}: ${data ? data.tier : 'UNRANKED'} ${data ? data.rank : ''}`}</div>
}
