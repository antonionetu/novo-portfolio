/* eslint-disable @next/next/no-img-element */
import styled from "styled-components"
import { Main } from "../style"

export const Contact = () => {
	return (
		<Main>
			<Container className="changer">
				<h2>Entre em contato</h2>
				<div className="icons">
					<div className="icon">
						<a
							href="https://wa.me/+5579988766544"
							target="_blank"
							rel="noreferrer"
						>
							<div>
								<img
									src="https://res.cloudinary.com/dxujuvdh8/image/upload/v1675688909/portfolio/contact/wpp_nsmjwi.png"
									alt="Whatsapp"
								/>
							</div>
						</a>
					</div>
					<div className="icon">
						<a
							href="https://linkedin.com/in/dev-antonio-fernandes/"
							target="_blank"
							rel="noreferrer"
						>
							<div>
								<img
									src="https://res.cloudinary.com/dxujuvdh8/image/upload/v1675688909/portfolio/contact/linkedin_jnjbjv.png"
									alt="Linkedin"
								/>
							</div>
						</a>
					</div>
					<div className="icon">
						<a
							href="https://github.com/antonionetodeveloper"
							target="_blank"
							rel="noreferrer"
						>
							<div>
								<img
									src="https://res.cloudinary.com/dxujuvdh8/image/upload/v1675688909/portfolio/contact/github_i3alve.png"
									alt="Github"
								/>
							</div>
						</a>
					</div>
				</div>
			</Container>
		</Main>
	)
}

const Container = styled.section`
	@media screen and (max-width: 500px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h2 {
		text-align: center;
	}

	div.icons {
		display: flex;
		justify-content: center;
		width: 40vw;
		gap: 3vw;
		margin-top: 5vw;

		@media screen and (max-width: 500px) {
			width: 80vw;
			gap: 3vw;
		}

		div.icon {
			@media screen and (max-width: 500px) {
				width: 100%;
			}
			width: 20%;
			padding: 0vw;
			transition: 300ms;

			a {
				div {
					@media screen and (max-width: 500px) {
						width: 25vw;
						display: flex;
						justify-content: center;
					}

					img {
						width: 80%;
					}
				}
			}

			:hover {
				cursor: pointer;
				padding: 0vw 1vw 0vw 1vw;
			}
		}
	}
`

export default Contact
