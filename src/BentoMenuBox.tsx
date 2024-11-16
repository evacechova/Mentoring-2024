import { Link } from "react-router-dom";

type BentoMenuBoxProps = {
	text: string;
	to: string;
};

export const BentoMenuBox: React.FC<BentoMenuBoxProps> = ({ text, to }) => {
	return (
		<div>
			<Link to={to}>
				<img src="" alt="" />
				<h2>{text}</h2>
			</Link>
		</div>
	);
};
