import { PageH1 } from "@/components/PageHeadings/PageH1";
import { CTA } from "../components/CTA/CTA";
import { PageSection } from "../components/PageSection/PageSection";
import { PriceCalculator } from "@/components/PriceCalculator/PriceCalculator";
import { SubH } from "@/components/PageHeadings/SubH";

import { ColorBlockSet } from "@/components/ColorBlocks/ColorBlockSet";

export const DanceCovers = () => {
	const blocks = [
		{
			label: "DAY & NIGHT",
			text: "Night cover with colored lights to take you coolness up a notch? You got it!",
		},
		{
			label: "CHOOSE THE PLACE",
			text: "Do you have a cool shoot place scoutet out outside of the city? No probs!",
		},
		{
			label: "KEEPING IT COOL",
			text: "Friendly informal atmosphere is a given for you to feel comfortable flexing your moves.",
		},
	];

	return (
		<>
			<PageSection>
				<PageH1 text={"Dance Covers"} />
				<SubH text="Become a kpop idol. Shoot a dance cover in public, during day, at night, one-take or with cuts." />
				<ColorBlockSet blocks={blocks} />

				<PriceCalculator />
				<CTA />
			</PageSection>
		</>
	);
};
