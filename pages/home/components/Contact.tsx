import Image from "next/image"
import { useContext } from "react"
import styled from "styled-components"
import { ContentContext } from "../.."
import { Main } from "../style"

export const Contact = () => {
	const { images } = useContext(ContentContext)

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
								<Image
									src={images?.contact.whatsapp}
									width={100}
									height={100}
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
								<Image
									src={images?.contact.linkedin}
									width={100}
									height={100}
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
								<Image
									src={images?.contact.github}
									width={100}
									height={100}
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
		}

		div.icon {
			width: 20%;
			padding: 0vw;
			transition: 300ms;

			:hover {
				cursor: pointer;
				padding: 0vw 1vw 0vw 1vw;
			}
		}
	}
`

export default Contact
