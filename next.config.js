/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	i18n: {
		locales: ["pt-BR", "en-US"],
		defaultLocale: "pt-BR",
	},
	images: {
		domains: ["res.cloudinary.com"],
	},
}

module.exports = nextConfig
