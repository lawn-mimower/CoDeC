import { events as mockEvents } from '../data/mockData';

const STORAGE_KEY = 'codec_custom_events';

export const EventManager = {
    /**
     * Retrieves all events with advanced processing:
     * - Merges mock + local data
     * - Projects recurring events to their next occurrence
     * - Filters strictly by current time (NOW)
     * @returns {Object} { upcoming: [], past: [] }
     */
    getEvents: () => {
        const storedEvents = localStorage.getItem(STORAGE_KEY);
        const customEvents = storedEvents ? JSON.parse(storedEvents) : [];
        const allRawEvents = [...customEvents, ...mockEvents.upcoming, ...mockEvents.past];

        const now = new Date();
        const upcoming = [];
        const past = [];

        allRawEvents.forEach(event => {
            // Determine effective Dates
            let eventDate = new Date(event.date);
            // If specific time exists, combine it. Else default to End of Day for expiry check?
            // "All Day" implies expiry at 23:59:59. Specific time implies expiry at that time.

            let expiryDate = new Date(event.date);
            if (event.isAllDay) {
                expiryDate.setHours(23, 59, 59, 999);
            } else if (event.time) {
                const [hours, minutes] = event.time.split(':');
                expiryDate.setHours(hours, minutes, 0, 0);
                eventDate.setHours(hours, minutes, 0, 0); // specific start time
            } else {
                // Default legacy behavior: expiry at end of day
                expiryDate.setHours(23, 59, 59, 999);
            }

            // Recurrence Logic
            if (event.recurrence && event.recurrence !== 'none') {
                // If the event is in the past, project it forward
                if (expiryDate < now) {
                    const projected = projectEvent(event, expiryDate, now);
                    upcoming.push(projected);
                    // Also keep a record in past if desired, 
                    // but for now let's just show the upcoming occurrence.
                    // To show history, we'd need to generate instances. 
                    // Let's add the *original* to past if it was indeed past, 
                    // but differentiating instances is complex without unique IDs.
                    // Simplified: Recurring events always have an upcoming instance.
                    // We can also push the 'original' to past for history.
                    past.push({ ...event, isRecurringInstance: false });
                } else {
                    upcoming.push(event);
                }
            } else {
                // Standard Logic
                if (expiryDate >= now) {
                    upcoming.push(event);
                } else {
                    past.push(event);
                }
            }
        });

        // Sort upcoming by date (nearest first)
        upcoming.sort((a, b) => new Date(a.date) - new Date(b.date));

        // Sort past by date (most recent first)
        past.sort((a, b) => new Date(b.date) - new Date(a.date));

        return { upcoming, past };
    },

    /**
     * Adds a new event to local storage.
     * @param {Object} event 
     */
    addEvent: (event) => {
        const storedEvents = localStorage.getItem(STORAGE_KEY);
        const customEvents = storedEvents ? JSON.parse(storedEvents) : [];

        const newEvent = {
            id: `custom-${Date.now()}`,
            isCustom: true, // Marker for deletion rights
            ...event
        };

        const updatedEvents = [newEvent, ...customEvents];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedEvents));
        return newEvent;
    },

    /**
     * Deletes a custom event by ID.
     * @param {string} id 
     */
    deleteEvent: (id) => {
        const storedEvents = localStorage.getItem(STORAGE_KEY);
        if (!storedEvents) return;

        const customEvents = JSON.parse(storedEvents);
        const updatedEvents = customEvents.filter(e => e.id !== id);

        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedEvents));

        // Return refreshed full list
        return EventManager.getEvents();
    },

    clearCustomEvents: () => {
        localStorage.removeItem(STORAGE_KEY);
    }
};

// Helper: Project a past event to its next future occurrence
const projectEvent = (event, originalExpiry, now) => {
    let nextDate = new Date(originalExpiry);
    const originalDate = new Date(event.date); // Keep time synced

    // Add intervals until > now
    while (nextDate < now) {
        if (event.recurrence === 'weekly') {
            nextDate.setDate(nextDate.getDate() + 7);
            originalDate.setDate(originalDate.getDate() + 7);
        } else if (event.recurrence === 'monthly') {
            nextDate.setMonth(nextDate.getMonth() + 1);
            originalDate.setMonth(originalDate.getMonth() + 1);
        }
    }

    // Return a virtual instance
    return {
        ...event,
        date: originalDate.toISOString().split('T')[0], // YYYY-MM-DD
        originalId: event.id,
        isRecurringInstance: true
    };
};
