import { Masthead } from "../components/Masthead/Masthead";
import { PageSection } from "../PageSection";
import { BentoMenu } from "../components/BentoMenu/BentoMenu";
import { TextField } from "../components/TextField/TextField";

export const Homepage = () => {
	return (
		<>
			<Masthead />
			<PageSection>
				<TextField />
				<BentoMenu />
			</PageSection>
		</>
	);
};
