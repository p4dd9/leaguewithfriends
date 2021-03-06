/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({
	experimental: {
		styledComponents: true,
		exclude: ['error'],
	},
})
