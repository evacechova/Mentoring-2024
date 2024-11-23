import { Masthead } from "./Masthead";
import { PageSection } from "./PageSection";
import { BentoMenu } from "./BentoMenu";
import { TextField } from "./TextField";

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
