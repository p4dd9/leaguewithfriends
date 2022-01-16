import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import PageWithLayoutType from '../app/layout/PageWithLayout'
import MainLayout from '../app/layout/Layout'
import { PlayerCard } from '../components/PlayerCards'

export interface InitialAppProps {
	title?: string
}

const players = [
	'TASBOT',
	'Nucle4rSunrise',
	'Killerie',
	'Salamaleikum',
	'Insectfreak',
	'InaJ',
	'enjuli',
	'El Feo Demente',
]
const IndexPage: NextPage<InitialAppProps> = (props: InitialAppProps) => {
	return (
		<>
			<Head>
				<title>{props.title}</title>
			</Head>
			<div>
				<h1 style={{ margin: '8px' }}>Player Scores 5on5 RANKED </h1>
				{players.map((player) => (
					<PlayerCard summoner={player} key={player} />
				))}
			</div>
		</>
	)
}

export const getStaticProps: GetStaticProps<InitialAppProps> = async () => {
	return {
		props: {
			title: 'Dashboard',
		},
	}
}
;(IndexPage as PageWithLayoutType).layout = MainLayout

export default IndexPage
