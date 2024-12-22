async function fetchGoogleCalendarEvents() {
    const apiKey = "XhojsfxUPY3W2osq01mb59lOKGW8rjXO9K2w26C1";
    const apiUrl = "https://ghvy6isiq6.execute-api.eu-north-1.amazonaws.com/dev/events";
    try {
        const response = await fetch(apiUrl, { method: "GET", headers: { "x-api-key": apiKey } });
        const data = await response.json();
        return data; // Google Calendar events
    } catch (error) {
        console.error("Error fetching events:", error);
    }
}

console.log(fetchGoogleCalendarEvents());