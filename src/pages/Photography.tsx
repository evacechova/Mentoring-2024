import { Header } from "../components/Header/Header";
import { PageSection } from "../components/PageSection/PageSection";
import { TextField } from "../components/TextField/TextField";
import { CTO } from "../components/CTO/CTO";
import { Footer } from "../components/Footer/Footer";

export const Photography = () => {
	return (
		<>
			<Header />
			<h1>Photography</h1>
			<PageSection>
				<TextField />
				<TextField />
				<CTO />
			</PageSection>
			<Footer />
		</>
	);
};
