import { Tier } from '../components/PlayerCard'

export const mapTierToProfileTheme = (tier: Tier, leaguePoints: number) => {
	switch (tier) {
		case 'IRON': {
			// TODO: read color from theme
			return { emblem: '/emblems/Emblem_Iron.png', color: '#86807e', score: 0 + leaguePoints }
		}
		case 'BRONZE': {
			return { emblem: '/emblems/Emblem_Bronze.png', color: '#915335', score: 1000 + leaguePoints }
		}
		case 'SILVER': {
			return { emblem: '/emblems/Emblem_Silver.png', color: '#748e95', score: 2000 + leaguePoints }
		}
		case 'GOLD': {
			return { emblem: '/emblems/Emblem_Gold.png', color: '#ecc368', score: 3000 + leaguePoints }
		}
		case 'PLATINUM': {
			return { emblem: '/emblems/Emblem_Platinum.png', color: '#507a77', score: 4000 + leaguePoints }
		}
		case 'DIAMOND': {
			return { emblem: '/emblems/Emblem_Diamond.png', color: '#a188c4', score: 5000 + leaguePoints }
		}
		case 'MASTER': {
			return { emblem: '/emblems/Emblem_Master.png', color: '#bb13bd', score: 6000 + leaguePoints }
		}
		case 'GRANDMASTER': {
			return { emblem: '/emblems/Emblem_Grandmaster.png', color: '#d7272b', score: 7000 + leaguePoints }
		}
		case 'CHALLENGER': {
			return { emblem: '/emblems/Emblem_Challenger.png', color: '#2dbbfe', score: 8000 + leaguePoints }
		}
		default: {
			// TODO: find better fallback for UNRANKED profile theme
			return { emblem: 'URANKED', color: '#86807e', score: 0 }
		}
	}
}
