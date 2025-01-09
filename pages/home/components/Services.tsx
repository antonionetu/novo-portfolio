import styled from "styled-components"
import { Main } from "../style"

export const Services = () => {
	return (
		<Container className="changer">
			<Main>
				<section className="services">
					<div className="text">
						<p className="quote">
							My job is to create solutions that can be accessed anytime,
							anywhere, on any device.
						</p>
					</div>
				</section>
				<section className="stacks">
					<h2>My stacks</h2>
					<div className="stacks">
						<div className="front-end">
							<h3>front-end</h3>
							<ul>
								<li>React</li>
								<li>Vue</li>
								<li>Angular</li>
								<li>Javascript</li>
								<li>TypeScript</li>
								<li>Ajax</li>
								<li>JQuery</li>
								<li>Css</li>
								<li>Bootstrap</li>
								<li>Tailwind</li>
								<li>Metronic</li>
							</ul>
						</div>
						<div className="back-end">
							<h3>Back-end</h3>
							<ul>
								<li>Django</li>
								<li>FastAPI</li>
								<li>Go</li>
								<li>Node JS</li>
								<li>MySQL</li>
								<li>Redis</li>
								<li>MongoDB</li>
								<li>AWS</li>
								<li>RDS</li>
								<li>S3</li>
								<li>EC2</li>
								<li>Docker</li>
							</ul>
						</div>
						<div className="tools">
							<h3>Plus</h3>
							<ul>
								<li>Git</li>
								<li>Unit Tests</li>
								<li>Clean Code</li>
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
		position: relative;
		bottom: 60px;
	}

	main {
		section {
			display: flex;
			justify-content: center;
			gap: 8vw;
			margin-bottom: 20px;

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
