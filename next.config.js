/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
	experimental: {
		// ssr and displayName are configured by default
		styledComponents: true,
		exclude: ['error'],
	},
})

module.exports = withBundleAnalyzer({})
