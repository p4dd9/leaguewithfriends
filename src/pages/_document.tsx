import React from 'react'
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

const fontDisplayOptions = {
	swap: 'swap',
	auto: 'auto',
	block: 'block',
	fallback: 'fallback',
	optional: 'optional',
}

const fontDisplay = fontDisplayOptions.block

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet()
		const view = ctx.renderPage

		try {
			ctx.renderPage = () =>
				view({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
				})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: (
					<React.Fragment>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</React.Fragment>
				),
			}
		} finally {
			sheet.seal()
		}
	}

	render() {
		return (
			<Html lang="de">
				<Head>
					<link
						href={`https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=${fontDisplay}`}
						rel="stylesheet"
					></link>
					<link rel="apple-touch-icon" sizes="57x57" href="/favicon/pple-icon-57x57.png" />
					<link rel="apple-touch-icon" sizes="60x60" href="/favicon/pple-icon-60x60.png" />
					<link rel="apple-touch-icon" sizes="72x72" href="/favicon/pple-icon-72x72.png" />
					<link rel="apple-touch-icon" sizes="76x76" href="/favicon/pple-icon-76x76.png" />
					<link rel="apple-touch-icon" sizes="114x114" href="/favicon/pple-icon-114x114.png" />
					<link rel="apple-touch-icon" sizes="120x120" href="/favicon/pple-icon-120x120.png" />
					<link rel="apple-touch-icon" sizes="144x144" href="/favicon/pple-icon-144x144.png" />
					<link rel="apple-touch-icon" sizes="152x152" href="/favicon/pple-icon-152x152.png" />
					<link rel="apple-touch-icon" sizes="180x180" href="/favicon/pple-icon-180x180.png" />
					<link rel="icon" type="image/png" sizes="192x192" href="/favicon/ndroid-icon-192x192.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
					<link rel="manifest" href="/favicon/manifest.json" />
					<meta name="msapplication-TileColor" content="#ffffff" />
					<meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
					<meta name="theme-color" content="#ffffff"></meta>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
