const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

console.log('Starting server...');
console.log('CWD:', process.cwd());
console.log('MONGO_URI:', process.env.MONGO_URI);

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const Division = require('./models/Division');
const Event = require('./models/Event');
const Achievement = require('./models/Achievement');
const TeamMember = require('./models/TeamMember');
const User = require('./models/User');

app.get('/api/divisions', async (req, res) => {
    try {
        const divisions = await Division.find({});
        res.json(divisions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/api/events', async (req, res) => {
    try {
        const type = req.query.type;
        const query = type ? { type } : {};
        const events = await Event.find(query);
        res.json(type ? events : {
            upcoming: await Event.find({ type: 'upcoming' }),
            past: await Event.find({ type: 'past' })
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/api/achievements', async (req, res) => {
    try {
        const achievements = await Achievement.find({});
        res.json(achievements);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/api/team', async (req, res) => {
    try {
        const team = await TeamMember.find({});
        res.json(team);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/auth/login', async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            res.json({ success: true, user });
        } else {
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/api/user/:id', async (req, res) => {
    try {
        const user = await User.findOne({ id: req.params.id });
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
