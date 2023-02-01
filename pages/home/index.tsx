import styled from "styled-components"
import { Changer } from "./components/_changer"
import { SideBar } from "./components/Sidebar"

export function Content() {
	return (
		<Container className="PAGE">
			<SideBar />

			<Contents>
				<Changer />
			</Contents>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
`

const Contents = styled.div`
	height: 100vh;
	width: 70%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	div.changer {
		width: 55vw;
		position: relative;

		p {
			font-size: 1.3vw;
		}
	}
`
export default Content
