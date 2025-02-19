import styles from "./DiamondGallery.module.scss";
import test_photo from "../../../src/assets/test-photo.jpg";

export const DiamondGalleryPhoto = () => {
	return <img className={styles.container_photo} src={test_photo} />;
};
