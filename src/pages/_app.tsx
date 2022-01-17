import React from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../app/styles/global.styles'
import { theme } from '../app/styles/Theme'
import { AppProps } from 'next/dist/pages/_app'
import { SWRConfig } from 'swr'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
interface ApiError extends Error {
	info: string
	status: number
}

const apiKey = process.env.NEXT_PUBLIC_RIOT_GAMES_API_KEY || 'API_KEY_MISSING'
function App({ Component, pageProps }: AppProps) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const Layout = (Component as any).layout ? (Component as any).layout : React.Fragment

	return (
		<React.Fragment>
			<GlobalStyle />
			<SWRConfig
				value={{
					refreshInterval: 0,
					revalidateOnFocus: false,
					shouldRetryOnError: false,
					fetcher: (resource, init = { header: {} }) =>
						fetch(resource, { ...init, headers: { ...init.headers, 'X-Riot-Token': apiKey } }).then(async (res) => {
							if (!res.ok) {
								const error = new Error('An error occurred while fetching the data.') as ApiError
								error.info = await res.json()
								error.status = res.status
								throw error
							}
							return res.json()
						}),
				}}
			>
				<ThemeProvider theme={theme}>
					{/**
					 * Produces the following warnings:
					 * Warning: Invalid prop `statusCode` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.
					 */}
					<Layout {...pageProps}>
						<Component {...pageProps} />
					</Layout>
				</ThemeProvider>
			</SWRConfig>
		</React.Fragment>
	)
}

export default App
