import Image from "next/image"
import styled from "styled-components"
import { Main } from "../style"

export const Services = () => {
	return (
		<Container className="changer">
			<Main>
				<section className="services">
					<div>
						<Image
							src={"/services/web.svg"}
							width={300}
							height={300}
							className="Image"
						/>
					</div>
					<div className="text">
						<p className="quote">
							Meu trabalho é criar soluções para serem acessadas a qualquer
							hora, em qualquer lugar ou dispositivo.
						</p>
					</div>
				</section>
				<section className="stacks">
					<h2>Minhas stacks</h2>
					<div className="stacks">
						<div className="front-end">
							<h3>front-end</h3>
							<ul>
								<li>Next JS</li>
								<li>React JS</li>
								<li>Styled Components</li>
								<li>TypeScript</li>
								<li>Html</li>
								<li>Css</li>
								<li>Javascript</li>
							</ul>
						</div>
						<div className="back-end">
							<h3>Back-end</h3>
							<ul>
								<li>Next JS</li>
								<li>Node JS</li>
								<li>MongoDB</li>
								<li>Axios</li>
								<li>TypeScript</li>
							</ul>
						</div>
						<div className="tools">
							<h3>Adicionais</h3>
							<ul>
								<li>Git/Github</li>
								<li>Clean Code</li>
								<li>Rest API</li>
								<li>Linux</li>
								<li>SCRUM</li>
								<li>UI / UX</li>
							</ul>
						</div>
					</div>
				</section>
			</Main>
		</Container>
	)
}

const Container = styled.div`
	main {
		section {
			display: flex;
			gap: 5vw;

			div.Image {
				width: 60%;
			}
			div.text {
				display: flex;
				flex-direction: column;
				gap: 2vw;
				justify-content: center;

				p.quote {
					font-style: italic;
					text-align: justify;
					position: relative;
					top: 10%;
				}
			}
		}

		section.services {
			height: 20vh;
		}

		section.stacks {
			margin-top: 5vw;

			h2 {
				text-align: center;
				margin-bottom: 0px;
			}

			flex-direction: column;
			justify-content: space-evenly;
			gap: 0px;

			div.stacks {
				display: flex;
				justify-content: center;
				gap: 3vw;

				div {
					width: 30%;
					h3 {
						text-align: center;
					}

					ul {
						li {
							font-family: "Playfair Display";
						}
					}
				}
			}
		}
	}
`

export default Services
