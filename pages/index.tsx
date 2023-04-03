import Head from "next/head"
import { Content } from "./home/index"
import { createContext, useState } from "react"
import { ContextData } from "../types/"

export const ContentContext = createContext<ContextData>({} as ContextData)

// eslint-disable-next-line react/prop-types
export default function Index({ images }) {
	const [contents, setContents] = useState("home")
	return (
		<>
			<Head>
				<title>Portifólio</title>
			</Head>

			<ContentContext.Provider value={{ contents, setContents, images }}>
				<Content />
			</ContentContext.Provider>
		</>
	)
}

async function getBlurredImage(imageId: string): Promise<string | undefined> {
	const response = await fetch(
		`https://res.cloudinary.com/dxujuvdh8/image/upload/w_100/e_blur:500,q_auto,f_webp/v1675471479/${imageId}`,
	)
	const buffer = await response.arrayBuffer()
	const data = Buffer.from(buffer).toString("base64")
	return `data:image/webp;base64,${data}`
}

export async function getStaticProps() {
	return {
		props: {
			images: {
				logo: "portfolio/logo_be87dl.png",
				profile: "portfolio/myPhoto_jsruis.png",
				portfolio: {
					jessica_bede: "portfolio/portfolio/jessica_bede_kjkilr.png",
					blurred_jessica_bede: await getBlurredImage(
						"portfolio/portfolio/jessica_bede_kjkilr.png",
					),

					netflix_clone: "portfolio/portfolio/netflix_clone_xkzipt.png",
					blurred_netflix_clone: await getBlurredImage(
						"portfolio/portfolio/netflix_clone_xkzipt.png",
					),

					CRUD: "portfolio/portfolio/CRUD_ynni3g.png",
					blurred_CRUD: await getBlurredImage(
						"portfolio/portfolio/CRUD_ynni3g.png",
					),

					login_azure: "portfolio/portfolio/login_azure_flhiqx.png",
					blurred_login_azure: await getBlurredImage(
						"portfolio/portfolio/login_azure_flhiqx.png",
					),

					site2it: "portfolio/portfolio/site2it_w2wt53.png",
					blurred_site2it: await getBlurredImage(
						"portfolio/portfolio/site2it_w2wt53.png",
					),

					escolinha: "portfolio/portfolio/escolinha_orbnuy.png",
					blurred_escolinha: await getBlurredImage(
						"portfolio/portfolio/escolinha_orbnuy.png",
					),
				},
				contact: {
					whatsapp: "portfolio/contact/wpp_nsmjwi.png",
					linkedin: "portfolio/contact/linkedin_jnjbjv.png",
					github: "portfolio/contact/github_yhj9w7.png",
				},
			},
		},
	}
}
