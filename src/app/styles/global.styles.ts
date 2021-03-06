import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		font-family: 'Roboto', sans-serif;
		background-color: #111;
        color: white;
	}

	* {
		box-sizing: border-box;
	}
`
