import Head from "next/head"
import { Content } from "./home/index"
import { createContext, useState } from "react"
import { ContextData } from "../types/"

export const ContentContext = createContext<ContextData>({} as ContextData)

// eslint-disable-next-line react/prop-types
export default function Index() {
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

const images = {
	logo: "/logo_be87dl.png",
	profile: "/myPhoto_jsruis.png",
	portfolio: {
		jessica_bede: "/jessica_bede_kjkilr.png",
		blurred_jessica_bede: "/jessica_bede_kjkilr.png",
		netflix_clone: "/netflix_clone_xkzipt.png",
		CRUD: "/CRUD_ynni3g.png",
		login_azure: "/login_azure_flhiqx.png",
		site2it: "/site2it_w2wt53.png",
		escolinha: "/escolinha_orbnuy.png",
	},
	contact: {
		whatsapp: "/wpp_nsmjwi.png",
		linkedin: "/linkedin_jnjbjv.png",
		github: "/github_yhj9w7.png",
	},
}

export const cloudinaryBaseUrl = `https://res.cloudinary.com/dxujuvdh8/image/upload/v1675471479/`
