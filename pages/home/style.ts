import styled from "styled-components"

export const Main = styled.main`
	animation: slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;

	@keyframes slide-in-blurred-top {
		0% {
			-webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
			transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
			-webkit-transform-origin: 50% 0%;
			transform-origin: 50% 0%;
			-webkit-filter: blur(40px);
			filter: blur(40px);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateY(0) scaleY(1) scaleX(1);
			transform: translateY(0) scaleY(1) scaleX(1);
			-webkit-transform-origin: 50% 50%;
			transform-origin: 50% 50%;
			-webkit-filter: blur(0);
			filter: blur(0);
			opacity: 1;
		}
	}
`

export const Footer = styled.footer``

export default Main
