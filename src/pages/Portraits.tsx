import { PageSection } from "../components/PageSection/PageSection";
import { CTA } from "../components/CTA/CTA";
import { PageH1 } from "@/components/PageHeadings/PageH1";
import { PriceCalculator } from "@/components/PriceCalculator/PriceCalculator";
import { ColorBlockSet } from "@/components/ColorBlocks/ColorBlockSet";
import { SubH } from "@/components/PageHeadings/SubH";

export const Portraits = () => {
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
				<PageH1 text={"Portraits"} />
				<SubH text="Want them pro profile pictures for your SM? Just say the word!" />
				<ColorBlockSet blocks={blocks} />

				<PriceCalculator />
				<CTA />
			</PageSection>
		</>
	);
};
