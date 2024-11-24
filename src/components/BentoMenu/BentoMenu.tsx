import styles from "./BentoMenu.module.scss";
import { BentoMenuBox } from "./BentoMenuBox";
import { ROUTES } from "../../globalVariables";

export const BentoMenu = () => {
	return (
		<div className={styles.container}>
			{Object.entries(ROUTES).map(([key, { title, route }], index) => (
				<BentoMenuBox key={key} text={title} to={route} className={`item${index + 1}`} />
			))}
		</div>
	);
};
