import { useContext } from "react"
import { ContentContext } from "../.."

import { Home } from "./Home"
import { About } from "./About"
import { Portfolio } from "./Portfolio"
import { Services } from "./Services"
import { Contact } from "./Contact"

export const Changer = () => {
	const { contents } = useContext(ContentContext)

	if (contents == "home" || contents == "indexState") {
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

export default Changer
