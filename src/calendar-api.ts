export const fetchGoogleCalendarEvents = async () => {
	const apiKey = import.meta.env.VITE_AWS_API_KEY;
	const apiUrl = "https://ghvy6isiq6.execute-api.eu-north-1.amazonaws.com/dev/events";

	try {
		const response = await fetch(apiUrl, { method: "GET", headers: { "x-api-key": apiKey } });
		const data = await response.json();
		const events = JSON.parse(data.body);

		const processedEvents = events.map((event) => ({
			startDate: event.start?.dateTime || event.start?.date, // Handle all-day events
			endDate: event.end?.dateTime || event.end?.date, // Handle all-day events
		}));
		return processedEvents; // Google Calendar events
		// return data; // Google Calendar events
	} catch (error) {
		console.error("Error fetching events:", error);
	}
};
