import { useContext } from "react"
import { ContentContext } from "../.."

import { Home } from "./Home"
import { About } from "./About"
import { Experience } from "./Experience"
import { Services } from "./Services"
import { Contact } from "./Contact"

export const Changer = () => {
	const { contents } = useContext(ContentContext)

	switch (contents) {
		case "home":
			return <Home />
		case "about":
			return <About />
		case "experience":
			return <Experience />
		case "services":
			return <Services />
		case "contact":
			return <Contact />
		default:
			return <></>
	}
}

export default Changer
