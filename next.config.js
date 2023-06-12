/** @type {import('next').NextConfig} */

const nextConfig = {
	compiler: {
		styledComponents: true,
	},
	i18n: {
		locales: ["pt-BR", "en-US"],
		defaultLocale: "pt-BR",
	},
}

module.exports = nextConfig
