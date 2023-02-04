/** @type {import('next').NextConfig} */

const cloudinaryBaseUrl = `https://res.cloudinary.com/dxujuvdh8/image/upload/v1675471479/`

const nextConfig = {
	images: {
		loader: "cloudinary",
		path: cloudinaryBaseUrl,
	},
	compiler: {
		styledComponents: true,
	},
	i18n: {
		locales: ["pt-BR", "en-US"],
		defaultLocale: "pt-BR", // if in english "en"
	},
}

module.exports = nextConfig
