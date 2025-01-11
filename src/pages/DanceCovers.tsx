import { CTA } from "../components/CTA/CTA";
import { PageSection } from "../components/PageSection/PageSection";
import { TextField } from "../components/TextField/TextField";
import { DiamondGallery } from "@/components/DiamondGallery/DiamondGallery";

export const DanceCovers = () => {
	return (
		<>
			<h1>Dance Covers</h1>
			<PageSection>
				<TextField />
				<DiamondGallery />
				<TextField />
				<CTA />
			</PageSection>
		</>
	);
};
