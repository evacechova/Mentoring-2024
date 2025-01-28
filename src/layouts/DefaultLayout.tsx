import { ReactNode } from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

type LayoutProps = {
	children: ReactNode;
};

export const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="relative flex flex-col h-full">
			<Header />
			{children}
			<Footer />
		</div>
	);
};
