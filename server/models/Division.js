const mongoose = require('mongoose');

const DivisionSchema = new mongoose.Schema({
    id: String, // Keeping string ID for compatibility with existing frontend
    name: String,
    description: String,
    focus: String,
    technologies: [String],
    icon: String
});

module.exports = mongoose.model('Division', DivisionSchema);
