import styled from "styled-components"
import { Changer } from "./components/_changer"
import { SideBar } from "./components/sidebar"

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
`

const Contents = styled.div`
	height: 100vh;
	width: 70%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	div {
		width: 45vw;

		position: relative;
		right: 5vw;
	}
`
