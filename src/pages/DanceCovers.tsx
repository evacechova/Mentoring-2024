import { PageH1 } from "@/components/PageHeadings/PageH1";
import { CTA } from "../components/CTA/CTA";
import { PageSection } from "../components/PageSection/PageSection";
import { TextField } from "../components/TextField/TextField";
import { DiamondGallery } from "@/components/DiamondGallery/DiamondGallery";

export const DanceCovers = () => {
	return (
		<>
			<PageSection>
				<PageH1 text={"Dance Covers"} />
				<TextField />
				<DiamondGallery />
				<TextField />
				<CTA />
			</PageSection>
		</>
	);
};
