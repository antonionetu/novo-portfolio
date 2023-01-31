import styled from "styled-components"
import { Main } from "../style"

export const About = () => {
	return (
		<div className="changer">
			<Main>
				<Section>
					<p style={{ marginBottom: "1vw" }}>
						Antônio Fernandes. Tive início na carreira de desenvolvimento em
						2018, quando fui convidado para fazer um curso na UFS (Universidade
						Federal de Sergipe), a partir daí comecei com projetos externos como
						por exemplo: Websites, Aplicativos e Sistemas, adquirindo
						conhecimento nas diversas linguagens de programação e tecnologias
						hoje utilizadas no mercado.
					</p>

					<p>
						Participei de vários projetos propostos pela UFS (anteriormente
						citada), empresas de educação, COD3R, Fundação Bradesco, Curso em
						Video, cursos na Udemy e atualmente como universitário em Ciência da
						Computação na UNIT e freelancer na Workana.
					</p>
				</Section>
			</Main>
		</div>
	)
}

const Section = styled.section`
	p {
		text-align: justify;
		width: 80%;
	}
`

export default About
