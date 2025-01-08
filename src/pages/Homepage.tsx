import { useState } from "react";

import { PageSection } from "../components/PageSection/PageSection";
import { BentoMenu } from "../components/BentoMenu/BentoMenu";
import { CTA } from "../components/CTA/CTA";
import { Calendar } from "@/components/ui/calendar";
import { PriceCalculator } from "../components/PriceCalculator/PriceCalculator";

import { fetchGoogleCalendarEvents } from "@/calendar-api";

/* for test function calling with new key*/
console.log(fetchGoogleCalendarEvents());

export const Homepage = () => {
	const [date, setDate] = useState<Date | undefined>(new Date());

	return (
		<>
			<PageSection>
				<PriceCalculator />
				<Calendar
					mode="single"
					selected={date}
					onSelect={setDate}
					className="rounded-md border"
				/>
				<BentoMenu />
				<CTA />
			</PageSection>
		</>
	);
};
