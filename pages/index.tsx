import Head from "next/head"
import { Content } from "./home/index"
import { createContext, useState } from "react"

interface ContextData {
	contents: string
	setContents: any
}

export const ContentContext = createContext<ContextData>({} as ContextData)

export default function Index() {
	const [contents, setContents] = useState("home")

	return (
		<>
			<Head>
				<title>Portifólio</title>
			</Head>

			<ContentContext.Provider value={{ contents, setContents }}>
				<Content />
			</ContentContext.Provider>
		</>
	)
}
