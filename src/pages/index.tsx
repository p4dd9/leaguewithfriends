import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import PageWithLayoutType from '../app/layout/PageWithLayout'
import MainLayout from '../app/layout/Layout'
import { ScoreBoard } from '../components/Scoreboard'
import { ExtendedPlayer } from '../lib/leagueApiClient'
import { getPlayers } from '../lib/utils'

export interface InitialAppProps {
	title?: string
	players: ExtendedPlayer[]
}

const IndexPage: NextPage<InitialAppProps> = (props: InitialAppProps) => {
	return (
		<React.Fragment>
			<Head>
				<title>{props.title}</title>
			</Head>
			<div>
				<ScoreBoard players={props.players} />
			</div>
		</React.Fragment>
	)
}

export const getStaticProps: GetStaticProps<InitialAppProps> = async () => {
	const players = await getPlayers()

	return {
		props: {
			players,
			title: 'League With Friends',
		},
		revalidate: 60 * 5,
	}
}
;(IndexPage as PageWithLayoutType).layout = MainLayout

export default IndexPage
