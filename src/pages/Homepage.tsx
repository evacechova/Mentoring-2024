import { Header } from "../components/Header/Header";
import { Masthead } from "../components/Masthead/Masthead";
import { PageSection } from "../components/PageSection/PageSection";
import { BentoMenu } from "../components/BentoMenu/BentoMenu";
import { TextField } from "../components/TextField/TextField";
import { CTO } from "../components/CTO/CTO";
import { Footer } from "../components/Footer/Footer";

export const Homepage = () => {
	return (
		<>
			<Header />
			<Masthead />
			<PageSection>
				<TextField />
				<BentoMenu />
				<CTO />
			</PageSection>
			<Footer />
		</>
	);
};
