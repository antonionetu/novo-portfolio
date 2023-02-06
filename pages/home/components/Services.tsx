import styled from "styled-components"
import { Main } from "../style"

export const Services = () => {
	return (
		<Container className="changer">
			<Main>
				<section className="services">
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
	@media screen and (max-width: 500px) {
		width: 90%;
	}

	main {
		section {
			display: flex;
			gap: 5vw;

			div.text {
				display: flex;
				flex-direction: column;
				gap: 2vw;
				justify-content: center;

				p.quote {
					font-style: italic;
					text-align: justify;
				}
			}
		}

		h3 {
			text-align: center;
			@media screen and (max-width: 500px) {
				font-size: 4.5vw;
			}
		}

		ul {
			li {
				font-family: "Playfair Display";
			}
		}

		h2 {
			text-align: center;
			margin-bottom: 0px;
			@media screen and (max-width: 500px) {
				margin-top: 10vw;
			}
		}

		section.stacks {
			flex-direction: column;
			justify-content: space-evenly;
			gap: 0px;

			div.stacks {
				display: flex;
				justify-content: center;
				@media screen and (max-width: 500px) {
					justify-content: space-between;
				}
				gap: 3vw;

				div {
					width: 30%;

					ul {
						@media screen and (max-width: 500px) {
							padding: 0px;
							list-style-type: none;
						}
					}
				}
			}
		}
	}
`

export default Services
