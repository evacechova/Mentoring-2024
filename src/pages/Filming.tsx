import { CTO } from "../components/CTO/CTO";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { PageSection } from "../components/PageSection/PageSection";
import { TextField } from "../components/TextField/TextField";

export const Filming = () => {
	return (
		<>
			<Header />
			<h1>Filming</h1>
			<PageSection>
				<TextField />
				<TextField />
				<CTO />
			</PageSection>
			<Footer />
		</>
	);
};
