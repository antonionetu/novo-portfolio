import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0px;
		color: white;

		h1, h2, h3{
			font-family: "Audiowide";
		}

		p {
			font-family: "Playfair Display";
			font-weight: 600;
			margin: 0px;
		}
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask2483%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%23SvgjsLinearGradient2484)'%3e%3c/rect%3e%3cpath d='M1440 0L721.56 0L1440 142.81z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M721.56 0L1440 142.81L1440 373.1L542.8 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M542.8 0L1440 373.1L1440 472.94000000000005L366.17999999999995 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M366.17999999999984 0L1440 472.94000000000005L1440 519.23L126.09999999999982 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 560L416.47 560L0 429.89z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 429.89L416.47 560L545.22 560L0 203.29999999999998z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 203.29999999999995L545.22 560L1030.99 560L0 198.56999999999996z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 198.56999999999994L1030.99 560L1226.31 560L0 84.12999999999994z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask2483'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='15.28%25' y1='139.29%25' x2='84.72%25' y2='-39.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient2484'%3e%3cstop stop-color='rgba(45%2c 45%2c 45%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(0%2c 0%2c 0%2c 0.96)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
  }
`

export default GlobalStyle
