import styles from "./DiamondGallery.module.scss";
import { DiamondGalleryItem } from "./DiamondGalleryItem";

export const DiamondGallery = () => {
	return (
		<div className={styles.container}>
			<DiamondGalleryItem />
			<DiamondGalleryItem />
			<DiamondGalleryItem />
			<DiamondGalleryItem />
		</div>
	);
};
