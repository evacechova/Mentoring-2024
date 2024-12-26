export const fetchGoogleCalendarEvents = async () => {
	const apiKey = import.meta.env.VITE_AWS_API_KEY;
	const apiUrl = "https://ghvy6isiq6.execute-api.eu-north-1.amazonaws.com/dev/events";
	try {
		const response = await fetch(apiUrl, { method: "GET", headers: { "x-api-key": apiKey } });
		const data = await response.json();
		return data; // Google Calendar events
	} catch (error) {
		console.error("Error fetching events:", error);
	}
};
