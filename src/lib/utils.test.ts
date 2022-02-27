import { mapRankToPoints, filterRankedSolo5x5 } from './utils'
import { summonerDetailmock1, summonerDetailmock2 } from './mocks'

describe('::: utils.ts :::', () => {
	it('mapRankToPoints: with valid ranks', () => {
		expect(mapRankToPoints('I')).toBe(400)
		expect(mapRankToPoints('II')).toBe(300)
		expect(mapRankToPoints('III')).toBe(200)
		expect(mapRankToPoints('IV')).toBe(100)
		expect(mapRankToPoints('')).toBe(0)
	})

	it('filterRankedSolo5x5: with no entries', () => {
		expect(filterRankedSolo5x5(null)).toBe(null)
		expect(filterRankedSolo5x5([])).toBe(null)
	})

	it('filterRankedSolo5x5: with entries', () => {
		expect(filterRankedSolo5x5([summonerDetailmock1])).toBe(summonerDetailmock1)
		expect(filterRankedSolo5x5([summonerDetailmock1, summonerDetailmock2])).toBe(summonerDetailmock1)
		expect(filterRankedSolo5x5([summonerDetailmock2])).toBe(null)
	})
})
