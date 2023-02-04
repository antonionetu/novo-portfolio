import Image from "next/image"
import { useContext } from "react"
import styled from "styled-components"
import { ContentContext } from "../.."
import { Main } from "../style"

interface PropsType {
	link: string
	image: string
	blur: string
}

export const Portfolio = () => {
	const { images } = useContext(ContentContext)
	const portfolio = images?.portfolio

	return (
		<div className="changer">
			<Main>
				<Section>
					<Item
						image={portfolio?.jessica_bede}
						blur={portfolio?.blurred_jessica_bede}
						link="https://jessica-bede.vercel.app"
					/>
					<hr />
					<Item
						image={portfolio?.netflix_clone}
						blur={portfolio?.blurred_netflix_clone}
						link="https://github.com/antonionetodeveloper/netflix-clone"
					/>
					<hr />
					<Item
						image={portfolio?.escolinha}
						blur={portfolio?.blurred_escolinha}
						link="https://learning-next-beryl.vercel.app"
					/>
					<hr />
					<Item
						image={portfolio?.CRUD}
						blur={portfolio?.blurred_CRUD}
						link="https://github.com/antonionetodeveloper/CRUD"
					/>
					<hr />
					<Item
						image={portfolio?.site2it}
						blur={portfolio?.blurred_site2it}
						link="https://site2it.com"
					/>
					<hr />
					<Item
						image={portfolio?.login_azure}
						blur={portfolio?.blurred_login_azure}
						link="https://github.com/antonionetodeveloper/login_ui"
					/>
				</Section>
			</Main>
		</div>
	)
}
const Section = styled.section`
	height: 80vh;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	gap: 2vw;

	@media screen and (max-width: 500px) {
		width: 90vw;
		height: 70vh;
	}

	hr {
		width: 90%;
	}
`

const Item = ({ link, image, blur }: PropsType) => {
	return (
		<ItemContent>
			<div>
				<Image
					src={image}
					alt="projeto"
					width={300}
					height={200}
					layout="responsive"
					placeholder="blur"
					blurDataURL={blur}
				/>
			</div>
			<a href={link} target="_blank" rel="noreferrer">
				saiba mais{" "}
				<img src="/linkIcon.png" alt="Ícone de link" className="linkIcon" />
			</a>
		</ItemContent>
	)
}
const ItemContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	gap: 2vw;

	div {
		width: 25vw;
	}

	a {
		width: 20%;
		display: flex;
		@media screen and (max-width: 500px) {
			display: none;
		}
		align-items: center;
		justify-content: center;
		font-size: 1.5vw;
		gap: 0.5vw;
		text-decoration: none;
		color: #cccccc;

		:hover {
			cursor: pointer;
			text-decoration: underline;
		}

		img.linkIcon {
			width: 15%;
		}
	}
`

export default Portfolio
