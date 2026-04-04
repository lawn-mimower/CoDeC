export const divisions = [
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

export const events = {
    upcoming: [
        {
            id: 99,
            name: 'CoDeC Ideathon 2026',
            date: '2026-04-15',
            time: '09:00 AM',
            description: 'Our biggest campus Ideathon! Form a team and pitch your best ideas to solve real-world problems. (Click Register Now to test the new form!)',
            venue: 'Main Auditorium',
            category: 'Ideathon',
            registrationLink: 'internal',
            eligibility: 'Open to all MIT WPU students. Teams of 2–4. At least one member must be from a technical branch.',
            intercollege: false,
            charges: null,
            max_participants: 1000,
            registered_count: 127,
            registration_deadline: '2026-04-14',
        },
        {
            id: 1,
            name: 'CoDeC Weekly Contest #42',
            date: '2026-02-01',
            description: 'Standard division 2 difficulty contest on Codeforces group.',
            registrationLink: '#',
            venue: 'Online — Codeforces',
            time: '8:00 PM',
            eligibility: 'Open to all students. Individual participation.',
            intercollege: true,
            charges: null,
            max_participants: 1000,
            registered_count: 43,
            registration_deadline: '2026-02-01',
        },
        {
            id: 2,
            name: 'Intro to React Workshop',
            date: '2026-02-05',
            description: 'Learn the basics of React by building a Todo app.',
            registrationLink: '#'
        }
    ],
    past: [
        {
            id: 3,
            name: 'ICPC Regional Qualifiers Watch Party',
            date: '2025-12-15',
            description: 'Cheering for our teams participating in Regionals.',
        },
        {
            id: 4,
            name: 'Hacktoberfest 2025 Wrap-up',
            date: '2025-11-01',
            description: 'Celebrating open source contributions.',
        }
    ]
};

export const achievements = [
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

export const facultyMentors = [
    {
        id: 'f1',
        name: 'Dr. Vibha Patel',
        position: 'Asst. Professor, DOEEE',
        image: '',
        bio: 'Faculty Mentor ensuring academic excellence and guidance.'
    },
    {
        id: 'f2',
        name: 'Dr. Shweta Kukade',
        position: 'Asst. Professor, DOEEE',
        image: '',
        bio: 'Faculty Mentor supporting research and innovation.'
    },
    {
        id: 'f3',
        name: 'Dr. Sumitra Motade',
        position: 'Asst. Professor, DOEEE',
        image: '',
        bio: 'Faculty Mentor fostering student leadership and skills.'
    }
];

export const coreCouncil = [
    {
        id: 'c1',
        name: 'Mihir Mohite',
        position: 'President',
        year: 'TY, DOEEE',
        image: '', // Use placeholder in UI
        bio: 'Leading CoDeC with a vision to innovate and inspire.'
    },
    {
        id: 'c2',
        name: 'Abhishek Karad',
        position: 'Vice President',
        year: 'TY, DOEEE',
        image: '',
        bio: 'Orchestrating club operations and strategic planning.'
    },
    {
        id: 'c3',
        name: 'Sujal Patil',
        position: 'General Secretary',
        year: 'TY, DOEEE',
        image: '',
        bio: 'Managing administrative affairs and student coordination.'
    }
];

export const placements = [
    { id: 'p1', name: 'Faiz Alam', company: 'Amadeus', package: '13.65 LPA', role: 'SDE' },
    { id: 'p2', name: 'Ashish Tiwari', company: 'ZS Associates', package: '13.65 LPA', role: 'Consultant' },
    { id: 'p3', name: 'Rohan Jha', company: 'ZS Associates', package: '13.65 LPA', role: 'Consultant' },
    { id: 'p4', name: 'Varun Somani', company: 'UBS', package: '12.5 LPA', role: 'Analyst' },
    { id: 'p5', name: 'Arayan Ashish', company: 'IBM', package: '12.25 LPA', role: 'SDE' },
    { id: 'p6', name: 'Naman Anand', company: 'Oracle', package: '11.25 LPA', role: 'MTS' }
];

export const flagshipEvents = [
    {
        id: 'e1',
        name: 'PINNACLE 2025',
        date: 'April 1-4 2025',
        sortDate: '2025-04-01',
        stats: '280+ Participants',
        description: 'Included "CodeRush" (CodeChef contest) and "GitSetGo" (GitHub workshop).',
        type: 'flagship'
    },
    {
        id: 'e2',
        name: 'HackerRank Contest',
        date: 'Feb 1 2026',
        sortDate: '2026-02-01',
        stats: '226+ Registered, 170 Active',
        description: 'Placement-oriented contest focused on DSA key concepts.',
        type: 'contest'
    },
    {
        id: 'e3',
        name: 'CP Bootcamp',
        date: 'Nov 20-26',
        sortDate: '2025-11-20',
        stats: '100% Participation',
        description: 'Intensive bootcamp with 100% participation in the post-bootcamp contest.',
        type: 'bootcamp'
    }
];

export const clubGlory = [
    {
        id: 'g1',
        title: 'ICPC Amritapuri Regionals',
        description: 'Team "CoDeC Barbarians" ranked 172/219, beating teams from IITs/NITs.',
        metric: 'Rank 172/219',
        highlight: true
    },
    {
        id: 'g2',
        title: 'AlgoZenith Program',
        description: '30+ members selected for placement readiness program.',
        metric: '30+ Selections',
        highlight: false
    }
];

// Keeping legacy export for compatibility until full migration
export const clubHeads = [...coreCouncil];

export const currentUser = {
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
