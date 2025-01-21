import { PageSection } from "../components/PageSection/PageSection";
import { TextField } from "../components/TextField/TextField";
import { CTA } from "../components/CTA/CTA";
import { PageH1 } from "@/components/PageHeadings/PageH1";
import { PriceCalculator } from "@/components/PriceCalculator/PriceCalculator";

export const Events = () => {
	return (
		<>
			<PageSection>
				<PageH1 text={"Events"} />
				<TextField />
				<TextField />
				<CTA />
				<PriceCalculator />
			</PageSection>
		</>
	);
};
