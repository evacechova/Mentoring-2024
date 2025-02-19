import { PageSection } from "@/components/PageSection/PageSection";
import { CTA } from "@/components/CTA/CTA";
import { PageH1 } from "@/components/PageHeadings/PageH1";

export const About = () => {
	return (
		<>
			<PageSection>
				<PageH1 text={"About"} />

				<CTA />
			</PageSection>
		</>
	);
};
