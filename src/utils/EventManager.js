import { events as mockEvents } from '../data/mockData';
import { supabase } from '../../lib/supabaseClient';

const STORAGE_KEY = 'codec_custom_events';

export const EventManager = {
    /**
     * Retrieves all events from Supabase (or falls back to mock + local storage).
     * - Merges Supabase data + local cache fallback
     * - Projects recurring events to their next occurrence
     * - Filters strictly by current time (NOW)
     * @returns {Object} { upcoming: [], past: [] }
     */
    getEvents: async () => {
        let allRawEvents = [];
        let error = null;

        // Try to fetch from Supabase
        if (supabase && supabase.from) {
            try {
                const { data, error: fetchError } = await supabase
                    .from('events')
                    .select('*')
                    .order('date', { ascending: true });

                if (fetchError) {
                    console.warn('Supabase fetch error:', fetchError);
                    error = fetchError;
                } else if (data) {
                    allRawEvents = data;
                    console.log('Fetched events from Supabase:', data.length);
                }
            } catch (err) {
                console.warn('Supabase connection error, falling back to mock data:', err);
                error = err;
            }
        }

        // Fallback to mock + local storage if Supabase unavailable
        if (!supabase || error || allRawEvents.length === 0) {
            console.log('Using fallback: mock data + localStorage');
            const storedEvents = localStorage.getItem(STORAGE_KEY);
            const customEvents = storedEvents ? JSON.parse(storedEvents) : [];
            allRawEvents = [...customEvents, ...mockEvents.upcoming, ...mockEvents.past];
        }

        const now = new Date();
        const upcoming = [];
        const past = [];

        allRawEvents.forEach(event => {
            // Simple logic: treat Supabase events as upcoming by default
            // Just add all events to upcoming for now
            try {
                const eventDate = new Date(event.date);
                if (isNaN(eventDate.getTime())) {
                    console.warn('Invalid date for event:', event);
                    upcoming.push(event);
                } else if (eventDate >= now) {
                    upcoming.push(event);
                } else {
                    past.push(event);
                }
            } catch (err) {
                console.warn('Error parsing event date:', err, event);
                upcoming.push(event);
            }
        });

        // Sort upcoming by date (nearest first)
        upcoming.sort((a, b) => new Date(a.date) - new Date(b.date));

        // Sort past by date (most recent first)
        past.sort((a, b) => new Date(b.date) - new Date(a.date));

        return { upcoming, past };
    },

    /**
     * Adds a new event to Supabase (or local storage if Supabase unavailable).
     * @param {Object} event 
     */
    addEvent: async (event) => {
        const newEvent = {
            id: `custom-${Date.now()}`,
            is_custom: true,
            ...event,
            date: event.date // Ensure date is YYYY-MM-DD string
        };

        // Try Supabase first
        if (supabase && supabase.from) {
            try {
                const { data, error } = await supabase
                    .from('events')
                    .insert([newEvent])
                    .select();

                if (error) {
                    console.warn('Supabase insert error:', error);
                    throw error;
                }
                console.log('Event inserted into Supabase:', data);
                return data[0] || newEvent;
            } catch (err) {
                console.warn('Supabase write failed, falling back to localStorage:', err);
            }
        }

        // Fallback: localStorage
        const storedEvents = localStorage.getItem(STORAGE_KEY);
        const customEvents = storedEvents ? JSON.parse(storedEvents) : [];
        const updatedEvents = [newEvent, ...customEvents];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedEvents));
        return newEvent;
    },

    /**
     * Deletes a custom event by ID from Supabase (or local storage if unavailable).
     * @param {string} id 
     */
    deleteEvent: async (id) => {
        // Try Supabase first
        if (supabase && supabase.from) {
            try {
                const { error } = await supabase
                    .from('events')
                    .delete()
                    .eq('id', parseInt(id));

                if (error) {
                    console.warn('Supabase delete error:', error);
                    throw error;
                }
                console.log('Event deleted from Supabase');
                return await EventManager.getEvents(); // Refresh and return updated list
            } catch (err) {
                console.warn('Supabase delete failed, falling back to localStorage:', err);
            }
        }

        // Fallback: localStorage
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
