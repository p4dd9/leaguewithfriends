import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import PageWithLayoutType from '../app/layout/PageWithLayout'
import MainLayout from '../app/layout/Layout'
import { ScoreBoard } from '../components/Scoreboard'
import { apiKey } from './_app'

export interface InitialAppProps {
	title?: string
	players: Player[]
}

const IndexPage: NextPage<InitialAppProps> = (props: InitialAppProps) => {
	return (
		<>
			<Head>
				<title>{props.title}</title>
			</Head>
			<div>
				<ScoreBoard players={props.players} />
			</div>
		</>
	)
}

const playersDB = [
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

export interface Summoner {
	accountId: string
	id: string
	name: string
	profileIconId: number
	puuid: string
	revisionDate: number
	summonerLevel: number
}
export interface SummonerDetail {
	leaguePoints: number
	rank: string
	tier: string
	queueType: string
	summonerName: string
	wins: number
	losses: number
	hotStreak: boolean
	veteran: boolean
	freshBlood: boolean
}

export interface Player {
	summonerProfile: Summoner
	summonerRanked5on5Stats: SummonerDetail | null
}

const requestThrottle = 100
export const getStaticProps: GetStaticProps<InitialAppProps> = async () => {
	const players = [] as Player[]

	for (let i = 0; i < playersDB.length; i++) {
		const summonerDataResponse = await fetch(
			`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${playersDB[i]}`,
			{
				headers: {
					'X-Riot-Token': apiKey,
				},
			}
		)
		const summonerData = (await summonerDataResponse.json()) as Summoner
		const summonerEntriesResponse = await fetch(
			`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerData.id}`,
			{
				headers: {
					'X-Riot-Token': apiKey,
				},
			}
		)

		const summonerEntries = await summonerEntriesResponse.json()
		let summonerRanked5on5Stats = null
		if (summonerEntries) {
			summonerRanked5on5Stats =
				(summonerEntries as SummonerDetail[]).find((el) => el.queueType === 'RANKED_SOLO_5x5') ?? null
		}

		/**
		 Throttle to ensure rate-limit is not exceeded
		 20 requests every 1 second
		 100 requests every 2 minutes
		*/
		await new Promise((resolve) => setTimeout(() => resolve(true), requestThrottle))

		players.push({ summonerProfile: summonerData, summonerRanked5on5Stats: summonerRanked5on5Stats } as Player)
	}

	return {
		props: {
			players,
			title: 'League With Friends',
		},
		// revalidate static page every 5 minutes
		revalidate: 60 * 5,
	}
}
;(IndexPage as PageWithLayoutType).layout = MainLayout

export default IndexPage
