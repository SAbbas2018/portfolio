// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

const breakpoints = ["360px", "768px", "1024px", "1440px"];
const theme = extendTheme({
	styles: {
		global: {
			body: {
				margin: "0",
				height: "100vh",
				boxSizing: "border-box",
				overflowX: "hidden",
				color: "palette.nyanza",
				backgroundColor: "palette.blackRock",
			},
		},
	},
	breakpoints,
	colors: {
		palette: {
			nyanza: "#DAF7DC",
			prussianBlue: "#092A49",
			darkSlateBlue: "#4C5C96",
			platinum: "#EAEAEA",
			blackRock: "#2E3141",
			bunting: "#353849",
			richBlack: "#070B0D",
			sunGlow: "#FFD147",
		},
	},
	fonts: {
		heading: "Roboto",
	},
});

export { theme };
