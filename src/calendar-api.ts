//function to fetch events from cloud API endpoint

export const fetchGoogleCalendarEvents = async () => {
	const apiKey = import.meta.env.VITE_AWS_API_KEY; //secured API key
	const apiUrl = "https://ghvy6isiq6.execute-api.eu-north-1.amazonaws.com/dev/events"; //AWS API url

	interface CalendarEvent {
		start?: {
			dateTime?: string; // for events with specific times
			date?: string; // for all-day events
		};
		end?: {
			dateTime?: string; // for events with specific times
			date?: string; // for all-day events
		};
	}

	try {
		const response = await fetch(apiUrl, { method: "GET", headers: { "x-api-key": apiKey } });
		const data = await response.json();
		const events: CalendarEvent[] = JSON.parse(data.body);

		const processedEvents = events.map((event) => ({
			startDate: event.start?.dateTime || event.start?.date, // Handle all-day events
			endDate: event.end?.dateTime || event.end?.date, // Handle all-day events
		}));
		return processedEvents; // mapped Google Calendar events
		// return data; // unmapped Google Calendar events
	} catch (error) {
		console.error("Error fetching events:", error);
	}
};
