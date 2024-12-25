import { useState } from "react";

import { PageSection } from "../components/PageSection/PageSection";
import { BentoMenu } from "../components/BentoMenu/BentoMenu";
import { TextField } from "../components/TextField/TextField";
import { CTO } from "../components/CTO/CTO";
import { Calendar } from "@/components/ui/calendar";

/* for test function calling*/
// console.log(fetchGoogleCalendarEvents());

export const Homepage = () => {
	const [date, setDate] = useState<Date | undefined>(new Date());

	return (
		<>
			<PageSection>
				<Calendar
					mode="single"
					selected={date}
					onSelect={setDate}
					className="rounded-md border"
				/>
				<TextField />
				<BentoMenu />
				<CTO />
			</PageSection>
		</>
	);
};
