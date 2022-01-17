import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import PageWithLayoutType from '../app/layout/PageWithLayout'
import MainLayout from '../app/layout/Layout'
import { ScoreBoard } from '../components/Scoreboard'

export interface InitialAppProps {
	title?: string
}

const IndexPage: NextPage<InitialAppProps> = (props: InitialAppProps) => {
	return (
		<>
			<Head>
				<title>{props.title}</title>
			</Head>
			<div>
				<ScoreBoard />
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
