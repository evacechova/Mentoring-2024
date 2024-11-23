import styles from "./BentoMenu.module.scss";
import { BentoMenuBox } from "./BentoMenuBox";
import { ROUTES } from "./globalVariables";

export const BentoMenu = () => {
	return (
		<div className={styles.container}>
			{Object.entries(ROUTES).map(([key, { title, route }]) => (
				<BentoMenuBox key={key} text={title} to={route} />
			))}
		</div>
	);
};
