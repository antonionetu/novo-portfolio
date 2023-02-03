import Image from "next/image"
import styled from "styled-components"
import { Main } from "../style"

export const Home = () => {
	return (
		<div className="changer">
			<Main>
				<Section>
					<div className="text">
						<p>
							Desenvolvedor de software cursando Ciência da Computação na
							Universidade Tiradentes (UNIT).
						</p>
						<div className="stacks">
							<p>Next</p>
							<VerticalLine />
							<p>React</p>
							<VerticalLine />
							<p>Node</p>
							<VerticalLine />
							<p>TypeScript</p>
						</div>
					</div>
					<div className="image-container">
						<Image
							src="/myPhoto.png"
							alt="Foto de Antônio"
							width={200}
							height={200}
							priority
						/>
					</div>
				</Section>
			</Main>
		</div>
	)
}

const Section = styled.section`
	display: flex;
	@media screen and (max-width: 500px) {
		flex-direction: column-reverse;
	}
	align-items: center;
	gap: 1vw;

	div.text {
		width: "25vw";

		p {
			margin-bottom: 2vw;
			@media screen and (max-width: 500px) {
				font-size: 5vw;
				margin-bottom: 10vw;
			}
			text-align: justify;
		}

		div.stacks {
			display: flex;
			gap: 1vw;
			@media screen and (max-width: 500px) {
				gap: 5vw;
			}
			justify-content: center;
			align-items: center;

			p {
				margin: 0px;
			}
		}
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
`

const VerticalLine = styled.div`
	border-left: 2px solid white;
	height: 20px;
`

export default Home
