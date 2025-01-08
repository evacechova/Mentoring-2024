import { PageSection } from "@/components/PageSection/PageSection";
import { TextField } from "@/components/TextField/TextField";
import { CTA } from "@/components/CTA/CTA";

export const About = () => {
	return (
		<>
			<h1>About</h1>
			<PageSection>
				<TextField />
				<TextField />
				<CTA />
			</PageSection>
		</>
	);
};
