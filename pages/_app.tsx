/* eslint-disable @next/next/no-page-custom-font */
import type { AppProps } from "next/app"
import GlobalStyle from "../styles/GlobalStyle"

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
			<link
				href="https://fonts.googleapis.com/css2?family=Audiowide&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
				rel="stylesheet"
			/>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	)
}
