import { PageSection } from "../components/PageSection/PageSection";
import { TextField } from "../components/TextField/TextField";
import { CTA } from "../components/CTA/CTA";
import { PageH1 } from "@/components/PageHeadings/PageH1";

export const PortraitPhotography = () => {
	return (
		<>
			<PageSection>
				<PageH1 text={"Portrait Photography"} />
				<TextField />
				<TextField />
				<CTA />
			</PageSection>
		</>
	);
};
