const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Division = require('./models/Division');
const Event = require('./models/Event');
const Achievement = require('./models/Achievement');
const TeamMember = require('./models/TeamMember');
const User = require('./models/User');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const importData = async () => {
    try {
        await Division.deleteMany();
        await Event.deleteMany();
        await Achievement.deleteMany();
        await TeamMember.deleteMany();
        await User.deleteMany();

        const divisions = [
            {
                id: 'cp',
                name: 'Competitive Programming',
                description: 'Master algorithms and data structures. Participate in global contests like ICPC and Codeforces.',
                focus: 'DSA, Math, Problem Solving',
                technologies: ['C++', 'Python', 'Java'],
                icon: 'Terminal'
            },
            {
                id: 'web',
                name: 'Web Development',
                description: 'Build modern, scalable applications for the real world. From frontend aesthetics to backend logic.',
                focus: 'Full-stack Development, Deployment',
                technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
                icon: 'Globe'
            },
            {
                id: 'ml',
                name: 'Machine Learning',
                description: 'Dive into AI, Neural Networks, and Data Science. Turn data into actionable insights.',
                focus: 'Deep Learning, NLP, Research',
                technologies: ['Python', 'TensorFlow', 'PyTorch', 'Jupyter'],
                icon: 'Brain'
            }
        ];

        const events = [
            {
                id: 1,
                name: 'CoDeC Weekly Contest #42',
                date: '2026-02-01',
                description: 'Standard division 2 difficulty contest on Codeforces group.',
                registrationLink: '#',
                type: 'upcoming'
            },
            {
                id: 2,
                name: 'Intro to React Workshop',
                date: '2026-02-05',
                description: 'Learn the basics of React by building a Todo app.',
                registrationLink: '#',
                type: 'upcoming'
            },
            {
                id: 3,
                name: 'ICPC Regional Qualifiers Watch Party',
                date: '2025-12-15',
                description: 'Cheering for our teams participating in Regionals.',
                registrationLink: '#',
                type: 'past'
            },
            {
                id: 4,
                name: 'Hacktoberfest 2025 Wrap-up',
                date: '2025-11-01',
                description: 'Celebrating open source contributions.',
                registrationLink: '#',
                type: 'past'
            }
        ];

        const achievements = [
            {
                id: 1,
                title: 'ICPC World Finals 2025 Qualification',
                description: 'Team "CodeWarriors" secured rank 12 in Regionals and qualified for World Finals.',
                date: '2025-12-20'
            },
            {
                id: 2,
                title: 'Smart India Hackathon Winners',
                description: 'Details regarding the project "AgroTech" which won 1st prize in the agriculture domain.',
                date: '2025-09-10'
            },
            {
                id: 3,
                title: '50+ Codeforces Candidates Masters',
                description: 'Milestone reached: We now have over 50 members with rating 1900+.',
                date: '2025-11-30'
            }
        ];

        const clubHeads = [
            {
                id: 1,
                name: 'Mihir Mohite',
                position: 'President',
                image: 'https://ui-avatars.com/api/?name=Mihir+Mohite&background=2563eb&color=fff&size=200',
                bio: 'Leading CoDeC with a vision to innovate and inspire. Focuses on strategic growth and community building.'
            },
            {
                id: 2,
                name: 'Sarah Chen',
                position: 'Technical Lead',
                image: 'https://ui-avatars.com/api/?name=Sarah+Chen&background=f59e0b&color=fff&size=200',
                bio: 'Oversees all technical projects and workshops. Full-stack enthusiast.'
            },
            {
                id: 3,
                name: 'Rahul Sharma',
                position: 'CP Head',
                image: 'https://ui-avatars.com/api/?name=Rahul+Sharma&background=dc2626&color=fff&size=200',
                bio: 'Grandmaster on Codeforces. Mentors students in competitive programming.'
            },
            {
                id: 4,
                name: 'Emily Davis',
                position: 'Design Head',
                image: 'https://ui-avatars.com/api/?name=Emily+Davis&background=059669&color=fff&size=200',
                bio: 'Ensures all club assets follow the premium aesthetic guidelines.'
            }
        ];

        const currentUser = {
            id: 'u1',
            name: 'Lohitaksh',
            email: 'lohitaksh@codec.edu',
            role: 'member',
            contests: [
                { id: 1, name: 'CF Round #950', platform: 'Codeforces', problems: 4, ratingChange: '+25', notes: 'Solved D efficiently.' },
                { id: 2, name: 'AtCoder Beginner 350', platform: 'AtCoder', problems: 5, ratingChange: '-10', notes: 'Stuck on problem F.' }
            ],
            meetings: [
                { id: 1, date: '2026-01-20', agenda: 'Semester Planning', keyPoints: 'Focus on recruiting first years. Tech fest dates tentative.' },
                { id: 2, date: '2026-01-27', agenda: 'Workshop Sync', keyPoints: 'React workshop contents finalized. Speaker confirmed.' }
            ],
            announcements: [
                { id: 1, date: '2026-01-26', content: 'Campus hiring drive for 3rd years starts next week. Prepare resume.' },
                { id: 2, date: '2026-01-22', content: 'New server rack installed in the lab. Access granted to ML team.' }
            ],
            discussions: [
                { id: 1, author: 'Admin', content: 'Welcome to the new dashboard! Report bugs here.', timestamp: '2026-01-25 10:00' },
                { id: 2, author: 'Member2', content: 'Is the lab open this Saturday?', timestamp: '2026-01-26 14:30' }
            ]
        };

        await Division.insertMany(divisions);
        await Event.insertMany(events);
        await Achievement.insertMany(achievements);
        await TeamMember.insertMany(clubHeads);
        await User.create(currentUser);

        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

importData();
