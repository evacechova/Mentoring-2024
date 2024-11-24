import { PageSection } from "../components/PageSection/PageSection";
import { BentoMenu } from "../components/BentoMenu/BentoMenu";
import { TextField } from "../components/TextField/TextField";
import { CTO } from "../components/CTO/CTO";
import { Calendar } from "@/components/ui/calendar";

export const Homepage = () => {
	return (
		<>
			<PageSection>
				<Calendar />
				<TextField />
				<BentoMenu />
				<CTO />
			</PageSection>
		</>
	);
};
