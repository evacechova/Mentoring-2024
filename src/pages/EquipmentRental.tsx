import { PageSection } from "../components/PageSection/PageSection";
import { CTA } from "../components/CTA/CTA";
import { PageH1 } from "@/components/PageHeadings/PageH1";
import { PriceCalculator } from "@/components/PriceCalculator/PriceCalculator";
import { SubH } from "@/components/PageHeadings/SubH";

export const EquipmentRental = () => {
	return (
		<>
			<PageSection>
				<PageH1 text={"Equipment Rental"} />
				<SubH text="Do you have your own cameraman but lact pro lights? No prob!" />
				<PriceCalculator />
				<CTA />
			</PageSection>
		</>
	);
};
