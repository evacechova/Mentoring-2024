async function fetchGoogleCalendarEvents() {
    const apiUrl = "https://ghvy6isiq6.execute-api.eu-north-1.amazonaws.com/dev/events";
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data; // Google Calendar events
    } catch (error) {
        console.error("Error fetching events:", error);
    }
}
