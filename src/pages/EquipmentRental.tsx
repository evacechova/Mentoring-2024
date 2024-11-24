import { PageSection } from "../components/PageSection/PageSection";
import { TextField } from "../components/TextField/TextField";
import { CTO } from "../components/CTO/CTO";

export const EquipmentRental = () => {
	return (
		<>
			<h1>Equipment Rental</h1>
			<PageSection>
				<TextField />
				<TextField />
				<CTO />
			</PageSection>
		</>
	);
};
