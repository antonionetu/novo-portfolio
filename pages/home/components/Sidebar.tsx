import Image from "next/image"
import styled, { css } from "styled-components"
import { useContext } from "react"
import { ContentContext } from "../.."

export const SideBar = () => {
	const { contents, setContents, images } = useContext(ContentContext)

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
						src={images?.logo}
						alt="Logo de Antônio"
						width={200}
						height={80}
						className="image"
						priority
					/>
				</div>
				<Navigation currentSection={contents}>
					<ul>
						<li
							className="home"
							onClick={() => {
								setContents("home")
							}}
						>
							<p>Home</p>
						</li>
						<li
							className="about"
							onClick={() => {
								setContents("about")
							}}
						>
							<p>Sobre mim</p>
						</li>
						<li
							className="portfolio"
							onClick={() => {
								setContents("portfolio")
							}}
						>
							<p>Portifólio</p>
						</li>
						<li
							className="services"
							onClick={() => {
								setContents("services")
							}}
						>
							<p>Serviços</p>
						</li>
						<li
							className="contact"
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
			height: 12vh;
			position: absolute;
			top: 2vh;

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

const Navigation: any = styled.nav`
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 500px) {
		width: 80vw;
		height: 13vh;
		position: absolute;
		top: 12vh;
		gap: 2vw;
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

			${(props: any): any => {
				if (props.currentSection) {
					return css`
						li.${props.currentSection} {
							font-size: 2vw;
							cursor: pointer;
							color: #fff;
							margin-top: 2vw;
							padding: 0px 5px 0px 5px;
						}
					`
				}
			}}
		}

		${(props: any): any => {
			if (props.currentSection) {
				return css`
					li.${props.currentSection} {
						font-size: 2vw;
						cursor: pointer;
						color: #fff;
						padding: 10px 0px 10px 5px;
					}
				`
			}
		}}

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
