import { useState } from "react";

import { PageSection } from "../components/PageSection/PageSection";
import { BentoMenu } from "../components/BentoMenu/BentoMenu";
import { TextField } from "../components/TextField/TextField";
import { CTO } from "../components/CTO/CTO";
import { Calendar } from "@/components/ui/calendar";

/* for test function calling*/
async function fetchGoogleCalendarEvents() {
	const apiKey = "XhojsfxUPY3W2osq01mb59lOKGW8rjXO9K2w26C1";
	const apiUrl = "https://ghvy6isiq6.execute-api.eu-north-1.amazonaws.com/dev/events";
	try {
		const response = await fetch(apiUrl, { method: "GET", headers: { "x-api-key": apiKey } });
		const data = await response.json();
		console.log(data.body);
		return data; // Google Calendar events
	} catch (error) {
		console.error("Error fetching events:", error);
	}
}

console.log(fetchGoogleCalendarEvents());

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
