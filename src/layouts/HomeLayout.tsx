import { ReactNode } from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Masthead } from "../components/Masthead/Masthead";

type LayoutProps = {
	children: ReactNode;
};

export const HomeLayout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<Masthead />
			{children}
			<Footer />
		</>
	);
};
