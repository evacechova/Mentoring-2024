import { useState, useEffect } from "react";

const ResponsiveDiv = () => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const [divWidth, setDivWidth] = useState("50%");

	useEffect(() => {
		const updateScreenWidth = () => {
			const width = window.innerWidth;
			setScreenWidth(width);

			// Adjust div width based on screen width
			if (width > 600) {
				setDivWidth("25%");
			}
		};

		// Initial calculation
		updateScreenWidth();

		// Add resize event listener
		window.addEventListener("resize", updateScreenWidth);

		// Cleanup the event listener on unmount
		return () => window.removeEventListener("resize", updateScreenWidth);
	}, []);

	return (
		<div
			style={{
				width: divWidth,
				background: "lightblue",
				padding: "1rem",
				textAlign: "center",
			}}
		>
			<p>Screen Width: {screenWidth}px</p>
			<p>Div Width: {divWidth}</p>
		</div>
	);
};

export default ResponsiveDiv;
