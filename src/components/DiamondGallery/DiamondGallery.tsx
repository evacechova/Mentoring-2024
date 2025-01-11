import styles from "./DiamondGallery.module.scss";
import { DiamondGalleryColorBlock } from "./DiamondGalleryColorBlock";
import { DiamondGalleryPhoto } from "./DiamondGalleryPhoto";

export const DiamondGallery = () => {
	return (
		<div className={styles.container}>
			<DiamondGalleryPhoto />
			<DiamondGalleryPhoto />
			<DiamondGalleryPhoto />
			<DiamondGalleryColorBlock />
		</div>
	);
};
