import styles from "./PageSection.module.scss";
import { ReactNode } from "react";

type PageSectionProps = {
	children: ReactNode;
};

export const PageSection: React.FC<PageSectionProps> = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};
