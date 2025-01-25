import { PageH1 } from "@/components/PageHeadings/PageH1";
import { CTA } from "../components/CTA/CTA";
import { PageSection } from "../components/PageSection/PageSection";
import { TextField } from "../components/TextField/TextField";
import { PriceCalculator } from "@/components/PriceCalculator/PriceCalculator";
import { SubH } from "@/components/PageHeadings/SubH";
import { ColorBlock } from "@/components/ColorBlock.tsx/ColorBlock";

export const DanceCovers = () => {
	return (
		<>
			<PageSection>
				<PageH1 text={"Dance Covers"} />
				<SubH text="Become a kpop idol. Shoot a dance cover in public, during day, at night, one-take or with cuts." />
				<ColorBlock />
				<TextField />
				<TextField />
				<CTA />
				<PriceCalculator />
			</PageSection>
		</>
	);
};
