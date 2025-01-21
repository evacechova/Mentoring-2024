import { useState } from "react";

import { PageSection } from "../components/PageSection/PageSection";
import { BentoMenu } from "../components/BentoMenu/BentoMenu";
import { CTA } from "../components/CTA/CTA";
import { Calendar } from "@/components/ui/calendar";

// import { fetchGoogleCalendarEvents } from "@/calendar-api";

/* for test function calling with new key*/
// console.log(fetchGoogleCalendarEvents());

export const Homepage = () => {
	const [date, setDate] = useState<Date | undefined>(new Date());

	return (
		<>
			<PageSection>
				<div className="flex gap-2 justify-center">
					<Calendar
						mode="single"
						selected={date}
						onSelect={setDate}
						className="rounded-md border"
					/>
					<div className="flex flex-col">
						<p>← Check out my availability.</p>
						<CTA />
					</div>
				</div>
				<BentoMenu />
			</PageSection>
		</>
	);
};
