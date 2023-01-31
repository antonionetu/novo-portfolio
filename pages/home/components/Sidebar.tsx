import Image from "next/image"
import styled from "styled-components"
import { useContext } from "react"
import { ContentContext } from "../.."

export const SideBar = () => {
	const { setContents } = useContext(ContentContext)

	return (
		<Container>
			<header
				style={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				<Image
					src="/logo.png"
					alt="Picture of the author"
					width={200}
					height={80}
				/>
				<Navigation>
					<ul>
						<li
							onClick={() => {
								setContents("home")
							}}
						>
							Home
						</li>
						<li
							onClick={() => {
								setContents("about")
							}}
						>
							Sobre mim
						</li>
						<li
							onClick={() => {
								setContents("portfolio")
							}}
						>
							Portifólio
						</li>
						<li
							onClick={() => {
								setContents("services")
							}}
						>
							Serviços
						</li>
						<li
							onClick={() => {
								setContents("contact")
							}}
						>
							Contato
						</li>
					</ul>
				</Navigation>
			</header>
		</Container>
	)
}

const Container = styled.div`
	height: 100vh;
	width: 30%;

	display: flex;
	justify-content: end;
	align-items: center;
	z-index: 2;
`

const Navigation = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 2vw;

	ul {
		list-style-type: none;
		display: flex;
		flex-direction: column;
		gap: 1vw;

		li {
			font-family: "Audiowide";
			color: #a0a0a0;
			font-size: 1.5vw;
			padding: 0px;
			transition: 0.3s;

			:hover {
				font-size: 2vw;
				cursor: pointer;
				color: #fff;
				padding: 10px 0px 10px 5px;
			}
		}
	}
`

export default SideBar
