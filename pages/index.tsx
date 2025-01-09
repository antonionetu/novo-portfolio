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
				<title>Portfolio</title>
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
	experiences: {
		ufs: "/dlkkwxfm30czqovkabtw.png",
		freelancer: "/nhnsucs0d5xtyjwp39oj.png",
		quantum: "/lnuzcr0hi0mcnugxdjfi.png",
		tiradentesGroup: "/kbn8x2pvqdjtdhbyfuoe.png",
		apoioFiel: "/dijv9wqr14vieg3wb0b8.png",
		sinqia: "/x7xtybqu2cpxryrddtsd.png",
		unit: "/wlddoteqhaly2emgqhtx.png",
		rtu: "/oceurxqvrilecncgr3pr.png",
	},
	contact: {
		whatsapp: "/wpp_nsmjwi.png",
		linkedin: "/linkedin_jnjbjv.png",
		github: "/github_yhj9w7.png",
	},
}

export const cloudinaryBaseUrl = `https://res.cloudinary.com/dxujuvdh8/image/upload/v1675471479/`
export const newCloudinaryBaseUrl = `https://res.cloudinary.com/dgqppfmnh/image/upload/v1736394710/portfolio/`
