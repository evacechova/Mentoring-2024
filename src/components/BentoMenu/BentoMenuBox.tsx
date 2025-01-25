import styles from "./BentoMenu.module.scss";
import globalstyles from "../../globalStyles.module.scss";
import { Link } from "react-router-dom";

type BentoMenuBoxProps = {
	text: string;
	to: string;
	className: string;
	image: string;
};

export const BentoMenuBox: React.FC<BentoMenuBoxProps> = ({ text, to, image }) => {
	return (
		<Link to={to}>
			<div
				style={{
					backgroundImage: `url(${image})`,
				}}
				className={styles.photo}
			></div>
			<h2 className={`${globalstyles.poppins_semibold} `}>{text}</h2>
		</Link>
	);
};
