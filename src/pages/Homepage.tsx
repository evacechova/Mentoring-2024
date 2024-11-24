import { PageSection } from "../components/PageSection/PageSection";
import { BentoMenu } from "../components/BentoMenu/BentoMenu";
import { TextField } from "../components/TextField/TextField";
import { CTO } from "../components/CTO/CTO";

export const Homepage = () => {
	return (
		<>
			<PageSection>
				<TextField />
				<BentoMenu />
				<CTO />
			</PageSection>
		</>
	);
};
