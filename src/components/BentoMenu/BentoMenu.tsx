import styles from "./BentoMenu.module.scss";
import { BentoMenuBox } from "./BentoMenuBox";
import { ROUTES } from "../../globalVariables";

export const BentoMenu = () => {
	const menu_images = "../src/assets/bento_menu/";
	return (
		<div className={styles.container}>
			{Object.entries(ROUTES).map(([key, { title, route, image_path }], index) => {
				if (index === 0) return null; // skip About
				return (
					<BentoMenuBox
						key={key}
						text={title}
						to={route}
						className={`item${index + 1}`}
						image={`${menu_images}${image_path}`}
					/>
				);
			})}
		</div>
	);
};
