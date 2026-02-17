const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    id: Number,
    name: String,
    date: String, // Keeping as string for simplicity, can act as Date
    description: String,
    registrationLink: String,
    type: {
        type: String,
        enum: ['upcoming', 'past'],
        default: 'upcoming'
    }
});

module.exports = mongoose.model('Event', EventSchema);
