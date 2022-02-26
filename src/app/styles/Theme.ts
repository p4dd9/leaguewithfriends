// References to https://blog.agney.dev/styled-components-&-typescript/
const customMediaQuery = (minWidth: number): string => `@media (min-width: ${minWidth}px)`

const responsiveMaxSizeThreshold = {
	phone: 576,
	tablet: 910,
}

export const theme = {
	color: {
		white: 'white',
		black: 'black',
		primary: 'red',
		secondary: 'green',
		blackPeral: '#050F1A',
		dark: '#111111',
		willhaben: '#049EE7',
		decentBeton: '#E6E6E6',
		emerald: '#50C878',
		recordRed: '#F16373',
		charityPink: '#C03BE4',
		charityBlue: '#0999F9',
		charityTeal: '#7DF8FF',
		iron: '#86807e',
		silver: '#748e95',
		bronze: '#915335',
		gold: '#ecc368',
		platinum: '#507a77',
		diamond: '#a188c4',
		master: '#bb13bd',
		grandmaster: '#d7272b',
		challenger: '#2dbbfe',
		pastelred: '#eb5d5d',
		freshBlood: '#ff9800',
		veteran: '#406ed5',
	},
	fontSize: {
		s: 12,
		m: 14,
		l: 18,
		xl: 24,
	},
	gridGrap: {
		phone: 8,
		tablet: 24,
		desktop: 28,
	},
	space: {
		xs: 4,
		s: 8,
		m: 12,
		l: 16,
		xl: 24,
		xxl: 36,
	},
	media: {
		desktop: customMediaQuery(responsiveMaxSizeThreshold.tablet),
		tablet: customMediaQuery(responsiveMaxSizeThreshold.phone),
		phone: customMediaQuery(0),
	},
	tier: {
		iron: {
			name: 'IRON',
			image: '/emblems/Emblem_Iron.png',
			color: '#86807e',
			score: 0,
		},
		bronze: {
			name: 'BRONZE',
			image: '/emblems/Emblem_Bronze.png',
			color: '#915335',
			score: 1000,
		},
		silver: {
			name: 'SILVER',
			image: '/emblems/Emblem_Silver.png',
			color: '#748e95',
			score: 2000,
		},
		gold: {
			name: 'GOLD',
			image: '/emblems/Emblem_Gold.png',
			color: '#ecc368',
			score: 3000,
		},
		platinum: {
			name: 'PLATINUM',
			image: '/emblems/Emblem_Platinum.png',
			color: '#507a77',
			score: 4000,
		},
		diamond: {
			name: 'DIAMOND',
			image: '/emblems/Emblem_Diamond.png',
			color: '#a188c4',
			score: 5000,
		},
		master: {
			name: 'MASTER',
			image: '/emblems/Emblem_Master.png',
			color: '#bb13bd',
			score: 6000,
		},
		grandmaster: {
			name: 'GRANDMASTER',
			image: '/emblems/Emblem_Grandmaster.png',
			color: '#d7272b',
			score: 7000,
		},
		challenger: {
			name: 'CHALLENGER',
			image: '/emblems/Emblem_Challenger.png',
			color: '#2dbbfe',
			score: 8000,
		},
		unranked: {
			name: 'URANKED',
			image: '',
			color: '#86807e',
			score: -1000,
		},
	},
}

export type Theme = typeof theme
