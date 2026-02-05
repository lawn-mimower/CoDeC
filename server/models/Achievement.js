const mongoose = require('mongoose');

const AchievementSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    date: String
});

module.exports = mongoose.model('Achievement', AchievementSchema);
