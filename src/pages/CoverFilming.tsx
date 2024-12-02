import { CTO } from "../components/CTO/CTO";
import { PageSection } from "../components/PageSection/PageSection";
import { TextField } from "../components/TextField/TextField";

export const CoverFilming = () => {
	return (
		<>
			<h1>Cover Filming</h1>
			<PageSection>
				<TextField />
				<TextField />
				<CTO />
			</PageSection>
		</>
	);
};
