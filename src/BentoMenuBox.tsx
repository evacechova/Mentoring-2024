import { Link } from "react-router-dom";

export const BentoMenuBox = ({ text, to }: { text: string; to: string }) => {
	return (
		<div>
			<Link to={to}>
				<img src="" alt="" />
				<h2>{text}</h2>
			</Link>
		</div>
	);
};
