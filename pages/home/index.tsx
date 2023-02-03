import styled from "styled-components"
import { Changer } from "./components/_changer"
import { SideBar } from "./components/Sidebar"

export function Content() {
	return (
		<Container>
			<SideBar />

			<Contents>
				<Changer />
			</Contents>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	@media screen and (max-width: 500px) {
		flex-direction: column;
	}
`

const Contents = styled.div`
	height: 100vh;
	@media screen and (max-width: 500px) {
		height: 75vh;
		width: 100%;
	}

	width: 70%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media screen and (min-width: 501px) {
		div.changer {
			width: 55vw;
			position: relative;

			p {
				font-size: 1.3vw;
			}
		}
	}
`
export default Content
