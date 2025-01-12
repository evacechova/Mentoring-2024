import styles from "./BentoMenu.module.scss";
import { Link } from "react-router-dom";

type BentoMenuBoxProps = {
	text: string;
	to: string;
	className: string;
	image: string;
};

export const BentoMenuBox: React.FC<BentoMenuBoxProps> = ({ text, to, className, image }) => {
	return (
		<Link to={to}>
			<div
				className={`${styles.container_item} ${styles[className]}`}
				// style={{ backgroundImage: `url(${image})` }}
			>
				{/* add alt */}
				<img className={styles.container_item_img} src={image} alt="" />
				<h2>{text}</h2>
			</div>
		</Link>
	);
};
