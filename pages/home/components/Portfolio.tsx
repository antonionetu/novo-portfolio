/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import { useContext } from "react"
import styled from "styled-components"
import { ContentContext, cloudinaryBaseUrl } from "../.."
import { Main } from "../style"

interface PropsType {
	link: string
	image: string
	blurImageUrl: string
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
						blurImageUrl={portfolio?.jessica_bede}
						link="https://jessica-bede.vercel.app"
					/>
					<hr />
					<Item
						image={portfolio?.netflix_clone}
						blurImageUrl={portfolio?.netflix_clone}
						link="https://netflix-clone-ebon-sigma.vercel.app"
					/>
					<hr />
					<Item
						image={portfolio?.escolinha}
						blurImageUrl={portfolio?.escolinha}
						link="https://learning-next-beryl.vercel.app"
					/>
					<hr />
					<Item
						image={portfolio?.CRUD}
						blurImageUrl={portfolio?.CRUD}
						link="https://crud-antonio-neto.vercel.app"
					/>
					<hr />
					<Item
						image={portfolio?.site2it}
						blurImageUrl={portfolio?.site2it}
						link="https://site2it.com"
					/>
					<hr />
					<Item
						image={portfolio?.login_azure}
						blurImageUrl={portfolio?.login_azure}
						link="https://loginui-azure.vercel.app"
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
		position: relative;
		bottom: 5vh;
	}

	hr {
		width: 90%;
	}
`

const Item = ({ link, image, blurImageUrl }: PropsType) => {
	return (
		<ItemContent>
			<div>
				<Image
					src={image}
					alt="projeto"
					width={300}
					height={230}
					layout="responsive"
					placeholder="blur"
					blurDataURL={`${cloudinaryBaseUrl}/e_blur:1800/portfolio/portfolio/${blurImageUrl}`}
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
		@media screen and (max-width: 500px) {
			width: 70vw;
		}
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
