import styles from "./BentoMenu.module.scss";
import { Link } from "react-router-dom";

type BentoMenuBoxProps = {
	text: string;
	to: string;
	className: string;
};

export const BentoMenuBox: React.FC<BentoMenuBoxProps> = ({ text, to, className }) => {
	return (
		<Link to={to}>
			<div className={`${styles.container_item} ${styles[className]}`}>
				<h2>{text}</h2>
			</div>
		</Link>
	);
};
