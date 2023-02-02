import Image from "next/image"
import styled from "styled-components"
import { Main } from "../style"

export const Contact = () => {
	return (
		<Container className="changer">
			<Main>
				<h2>Entre em contato</h2>
				<div className="icons">
					<div className="icon">
						<a
							href="https://wa.me/+5579988766544"
							target="_blank"
							rel="noreferrer"
						>
							<Image
								src={"/contact/wpp.png"}
								width={100}
								height={100}
								alt="Whatsapp"
							/>
						</a>
					</div>
					<div className="icon">
						<a
							href="https://linkedin.com/in/dev-antonio-fernandes/"
							target="_blank"
							rel="noreferrer"
						>
							<Image
								src={"/contact/linkedin.png"}
								width={100}
								height={100}
								alt="Linkedin"
							/>
						</a>
					</div>
					<div className="icon">
						<a
							href="https://github.com/antonionetodeveloper"
							target="_blank"
							rel="noreferrer"
						>
							<Image
								src={"/contact/github.png"}
								width={100}
								height={100}
								alt="Github"
							/>
						</a>
					</div>
				</div>
			</Main>
		</Container>
	)
}

const Container = styled.section`
	main {
		h2 {
			text-align: center;
		}

		div.icons {
			display: flex;
			justify-content: center;
			width: 40vw;
			gap: 3vw;
			margin-top: 5vw;

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
	}
`

export default Contact
