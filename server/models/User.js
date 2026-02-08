const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    role: String,
    contests: [{
        id: Number,
        name: String,
        platform: String,
        problems: Number,
        ratingChange: String,
        notes: String
    }],
    meetings: [{
        id: Number,
        date: String,
        agenda: String,
        keyPoints: String
    }],
    announcements: [{
        id: Number,
        date: String,
        content: String
    }],
    discussions: [{
        id: Number,
        author: String,
        content: String,
        timestamp: String
    }]
});

module.exports = mongoose.model('User', UserSchema);
