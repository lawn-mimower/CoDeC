import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { events } from '../data/mockData';
import './EventsPage.css';

const EventsPage = () => {
    return (
        <div className="page-container">
            <div className="section-header">
                <h1>Events</h1>
                <p>Join us for workshops, contests, and tech talks.</p>
            </div>

            <section className="events-section">
                <h2 className="section-title">Upcoming Events</h2>
                <div className="events-list">
                    {events.upcoming.map(event => (
                        <div key={event.id} className="event-card upcoming">
                            <div className="event-date">
                                <Calendar size={20} />
                                <span>{event.date}</span>
                            </div>
                            <div className="event-content">
                                <h3>{event.name}</h3>
                                <p>{event.description}</p>
                                <div className="event-action">
                                    <button className="btn-register" disabled>Register Now</button>
                                    <span className="info-text">(Registration opens soon)</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="events-section archive">
                <h2 className="section-title">Past Events</h2>
                <div className="events-list">
                    {events.past.map(event => (
                        <div key={event.id} className="event-card past">
                            <div className="event-date">
                                <Clock size={20} />
                                <span>{event.date}</span>
                            </div>
                            <div className="event-content">
                                <h3>{event.name}</h3>
                                <p>{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default EventsPage;
