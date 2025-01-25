import { ReactNode } from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Masthead } from "../components/Masthead/Masthead";
import globalstyles from "../globalStyles.module.scss";

type LayoutProps = {
	children: ReactNode;
};

export const HomeLayout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="relative min-h-screen">
			<Header />
			<Masthead />
			{children}
			<div
				className={`${globalstyles.poppins_medium} flex flex-row items-center justify-evenly p-8 mt-4 bg-gradient-to-r from-rose-500 via-fuchsia-600 to-indigo-600 w-full text-3xl text-white`}
			>
				<p>40+ cover shoots</p>
				<p>10+ dance groups</p>
			</div>
			<Footer />
		</div>
	);
};
