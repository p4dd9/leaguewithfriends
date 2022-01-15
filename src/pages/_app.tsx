import React from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../app/styles/global.styles'
import { theme } from '../app/styles/Theme'
import { AppProps } from 'next/dist/pages/_app'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App({ Component, pageProps }: AppProps) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const Layout = (Component as any).layout ? (Component as any).layout : React.Fragment

	return (
		<React.Fragment>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				{/**
				 * Produces the following warnings:
				 * Warning: Invalid prop `statusCode` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.
				 */}
				<Layout {...pageProps}>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</React.Fragment>
	)
}

export default App
