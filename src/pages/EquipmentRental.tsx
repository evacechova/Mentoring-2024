import { PageSection } from "../components/PageSection/PageSection";
import { TextField } from "../components/TextField/TextField";
import { CTA } from "../components/CTA/CTA";

export const EquipmentRental = () => {
	return (
		<>
			<h1>Equipment Rental</h1>
			<PageSection>
				<TextField />
				<TextField />
				<CTA />
			</PageSection>
		</>
	);
};
