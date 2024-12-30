//function to fetch events from cloud API endpoint

export const fetchGoogleCalendarEvents = async () => {
	const apiKey = import.meta.env.VITE_AWS_API_KEY; //secured API key
	const apiUrl = "https://ghvy6isiq6.execute-api.eu-north-1.amazonaws.com/dev/events"; //AWS API url

	interface CalendarEvent {
		start?: {
			dateTime?: string; // ISO for events with specific times
			date?: string; // ISO for all-day events
		};
		end?: {
			dateTime?: string; // ISO for events with specific times
			date?: string; // ISO for all-day events
		};
	}

	try {
		const response = await fetch(apiUrl, { method: "GET", headers: { "x-api-key": apiKey } });
		const data = await response.json();
		const events: CalendarEvent[] = JSON.parse(data.body);

		//getting an array of days for events
		const getAllDaysInRange = (startDate: string, endDate: string): string[] => {
			const start = new Date(startDate);
			const end = new Date(endDate);
			const dates: string[] = [];

			for (let date: Date = start; date <= end; date.setDate(date.getDate() + 1)) {
				dates.push(date.toISOString().split("T")[0]); //formatting dates as YYYY-MM-DD
			}

			return dates;
		};

		const allDaysArray = events
			.map((event) => {
				const startDate = event.start?.dateTime || event.start?.date; // Handle all-day events
				const endDate = event.end?.dateTime || event.end?.date; // Handle all-day events

				// Ensure startDate and endDate are defined
				if (startDate && endDate) {
					return getAllDaysInRange(startDate, endDate);
				}

				// Skip events with missing start or end dates
				return null;
			})
			.filter((allDays): allDays is string[] => allDays !== null); // Filter out null values

		return allDaysArray.flat(); // Flatten into a single array of dates
	} catch (error) {
		console.error("Error fetching events:", error);
		return [];
	}
};
