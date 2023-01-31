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
					<Image
						src="/myPhoto.png"
						alt="Foto de Antônio"
						width={200}
						height={200}
					/>
				</Section>
			</Main>
		</div>
	)
}

const Section = styled.section`
	display: flex;
	align-items: center;
	gap: 0.5vw;

	div.text {
		width: "25vw";

		p {
			margin-bottom: 2vw;
		}

		div.stacks {
			display: flex;
			gap: 1vw;
			justify-content: center;
			align-items: center;

			p {
				margin: 0px;
			}
		}
	}
`

const VerticalLine = styled.div`
	border-left: 2px solid white;
	height: 20px;
`

export default Home
