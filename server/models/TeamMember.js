const mongoose = require('mongoose');

const TeamMemberSchema = new mongoose.Schema({
    id: Number,
    name: String,
    position: String,
    image: String,
    bio: String
});

module.exports = mongoose.model('TeamMember', TeamMemberSchema);
