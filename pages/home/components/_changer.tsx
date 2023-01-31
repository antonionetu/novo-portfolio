import { useContext } from "react"
import { ContentContext } from "../.."

import { Home } from "./home"
import { About } from "./about"
import { Portfolio } from "./portfolio"
import { Services } from "./Services"
import { Contact } from "./Contact"

export const Changer = () => {
	const { contents } = useContext(ContentContext)

	if (contents == "home") {
		return <Home />
	}
	if (contents == "about") {
		return <About />
	}
	if (contents == "portfolio") {
		return <Portfolio />
	}
	if (contents == "services") {
		return <Services />
	}
	if (contents == "contact") {
		return <Contact />
	}
}
