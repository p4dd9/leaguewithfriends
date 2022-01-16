import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import PageWithLayoutType from '../app/layout/PageWithLayout'
import MainLayout from '../app/layout/Layout'
import { PlayerCard } from '../components/PlayerCards'

export interface InitialAppProps {
	title?: string
}

const players = ['TASBOT', 'enjuli', 'Nucle4rSunrise', 'Killerie', 'InaJ', 'Insectfreak', 'Salamaleikum']
const IndexPage: NextPage<InitialAppProps> = (props: InitialAppProps) => {
	const { title } = props
	return (
		<>
			<Head>
				<title>Index Page</title>
			</Head>
			<div>{title}</div>
			<div>
				<h1>PLAYER RANKS</h1>
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
