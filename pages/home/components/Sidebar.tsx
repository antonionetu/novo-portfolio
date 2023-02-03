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
				<div className="image-container">
					<Image
						src="/logo.png"
						alt="Logo de Antônio"
						width={200}
						height={80}
						className="image"
					/>
				</div>
				<Navigation>
					<ul>
						<li
							onClick={() => {
								setContents("home")
							}}
						>
							<p>Home</p>
						</li>
						<li
							onClick={() => {
								setContents("about")
							}}
						>
							<p>Sobre mim</p>
						</li>
						<li
							onClick={() => {
								setContents("portfolio")
							}}
						>
							<p>Portifólio</p>
						</li>
						<li
							onClick={() => {
								setContents("services")
							}}
						>
							<p>Serviços</p>
						</li>
						<li
							onClick={() => {
								setContents("contact")
							}}
						>
							<p className="lastWord">Contato</p>
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

	@media screen and (max-width: 500px) {
		height: 25vh;
		width: 100%;
		justify-content: center;
		align-items: center;

		header {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		.image-container {
			width: 50%;

			div {
				position: unset !important;
			}

			.image {
				object-fit: contain;
				width: 100% !important;
				height: unset !important;
			}
		}
	}
`

const Navigation = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 2vw;

	@media screen and (max-width: 500px) {
		width: 80vw;
	}

	ul {
		list-style-type: none;
		display: flex;
		flex-direction: column;
		gap: 1vw;

		@media screen and (max-width: 500px) {
			flex-direction: row;
			justify-content: center;
			padding: 0px;
			gap: 3vw;
			li {
				p {
					font-size: 4vw;
					text-align: center;
				}
			}
		}

		li {
			p {
				font-family: "Audiowide";
			}
			color: #a0a0a0;
			font-size: 1.5vw;
			padding: 0px;
			transition: 0.3s;

			@media screen and (min-width: 500px) {
				:hover {
					font-size: 2vw;
					cursor: pointer;
					color: #fff;
					padding: 10px 0px 10px 5px;
				}
			}
		}
	}
`

export default SideBar
