import { mapRankToPoints } from './utils'

describe('::: utils.ts :::', () => {
	it('mapRankToPoints: with valid ranks', () => {
		expect(mapRankToPoints('I')).toBe(400)
		expect(mapRankToPoints('II')).toBe(300)
		expect(mapRankToPoints('III')).toBe(200)
		expect(mapRankToPoints('IV')).toBe(100)
		expect(mapRankToPoints('')).toBe(0)
	})
})
