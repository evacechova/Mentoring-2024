import { useState } from "react";

import { PageSection } from "../components/PageSection/PageSection";
import { BentoMenu } from "../components/BentoMenu/BentoMenu";
import { Calendar } from "@/components/ui/calendar";
import { PageH2 } from "@/components/PageHeadings/PageH2";

// import { fetchGoogleCalendarEvents } from "@/calendar-api";

/* for test function calling with new key*/
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
					className="rounded-md border self-center my-11"
				/>
				<PageH2 text="Choose your style" />
				<BentoMenu />
			</PageSection>
		</>
	);
};
