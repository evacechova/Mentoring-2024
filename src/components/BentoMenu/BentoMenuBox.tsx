import styles from "./BentoMenu.module.scss";
import { Link } from "react-router-dom";

type BentoMenuBoxProps = {
	text: string;
	to: string;
	className: string;
	image: string;
};

export const BentoMenuBox: React.FC<BentoMenuBoxProps> = ({ text, to, image }) => {
	return (
		<Link
			to={to}
			style={{
				backgroundImage: `url(${image})`,
			}}
			className={styles.link}
		>
			<h2>{text}</h2>
		</Link>
	);
};
