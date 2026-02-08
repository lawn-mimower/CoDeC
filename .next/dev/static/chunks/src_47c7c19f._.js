(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/mockData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "achievements",
    ()=>achievements,
    "clubHeads",
    ()=>clubHeads,
    "currentUser",
    ()=>currentUser,
    "divisions",
    ()=>divisions,
    "events",
    ()=>events
]);
const divisions = [
    {
        id: 'cp',
        name: 'Competitive Programming',
        description: 'Master algorithms and data structures. Participate in global contests like ICPC and Codeforces.',
        focus: 'DSA, Math, Problem Solving',
        technologies: [
            'C++',
            'Python',
            'Java'
        ],
        icon: 'Terminal'
    },
    {
        id: 'web',
        name: 'Web Development',
        description: 'Build modern, scalable applications for the real world. From frontend aesthetics to backend logic.',
        focus: 'Full-stack Development, Deployment',
        technologies: [
            'React',
            'Node.js',
            'PostgreSQL',
            'Docker'
        ],
        icon: 'Globe'
    },
    {
        id: 'ml',
        name: 'Machine Learning',
        description: 'Dive into AI, Neural Networks, and Data Science. Turn data into actionable insights.',
        focus: 'Deep Learning, NLP, Research',
        technologies: [
            'Python',
            'TensorFlow',
            'PyTorch',
            'Jupyter'
        ],
        icon: 'Brain'
    }
];
const events = {
    upcoming: [
        {
            id: 1,
            name: 'CoDeC Weekly Contest #42',
            date: '2026-02-01',
            description: 'Standard division 2 difficulty contest on Codeforces group.',
            registrationLink: '#'
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
            description: 'Cheering for our teams participating in Regionals.'
        },
        {
            id: 4,
            name: 'Hacktoberfest 2025 Wrap-up',
            date: '2025-11-01',
            description: 'Celebrating open source contributions.'
        }
    ]
};
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
        {
            id: 1,
            name: 'CF Round #950',
            platform: 'Codeforces',
            problems: 4,
            ratingChange: '+25',
            notes: 'Solved D efficiently.'
        },
        {
            id: 2,
            name: 'AtCoder Beginner 350',
            platform: 'AtCoder',
            problems: 5,
            ratingChange: '-10',
            notes: 'Stuck on problem F.'
        }
    ],
    meetings: [
        {
            id: 1,
            date: '2026-01-20',
            agenda: 'Semester Planning',
            keyPoints: 'Focus on recruiting first years. Tech fest dates tentative.'
        },
        {
            id: 2,
            date: '2026-01-27',
            agenda: 'Workshop Sync',
            keyPoints: 'React workshop contents finalized. Speaker confirmed.'
        }
    ],
    announcements: [
        {
            id: 1,
            date: '2026-01-26',
            content: 'Campus hiring drive for 3rd years starts next week. Prepare resume.'
        },
        {
            id: 2,
            date: '2026-01-22',
            content: 'New server rack installed in the lab. Access granted to ML team.'
        }
    ],
    discussions: [
        {
            id: 1,
            author: 'Admin',
            content: 'Welcome to the new dashboard! Report bugs here.',
            timestamp: '2026-01-25 10:00'
        },
        {
            id: 2,
            author: 'Member2',
            content: 'Is the lab open this Saturday?',
            timestamp: '2026-01-26 14:30'
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/EventManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventManager",
    ()=>EventManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.js [app-client] (ecmascript)");
;
const STORAGE_KEY = 'codec_custom_events';
const EventManager = {
    /**
     * Retrieves all events with advanced processing:
     * - Merges mock + local data
     * - Projects recurring events to their next occurrence
     * - Filters strictly by current time (NOW)
     * @returns {Object} { upcoming: [], past: [] }
     */ getEvents: ()=>{
        const storedEvents = localStorage.getItem(STORAGE_KEY);
        const customEvents = storedEvents ? JSON.parse(storedEvents) : [];
        const allRawEvents = [
            ...customEvents,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["events"].upcoming,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["events"].past
        ];
        const now = new Date();
        const upcoming = [];
        const past = [];
        allRawEvents.forEach((event)=>{
            // Determine effective Dates
            let eventDate = new Date(event.date);
            // If specific time exists, combine it. Else default to End of Day for expiry check?
            // "All Day" implies expiry at 23:59:59. Specific time implies expiry at that time.
            let expiryDate = new Date(event.date);
            if (event.isAllDay) {
                expiryDate.setHours(23, 59, 59, 999);
            } else if (event.time) {
                const [hours, minutes] = event.time.split(':');
                expiryDate.setHours(hours, minutes, 0, 0);
                eventDate.setHours(hours, minutes, 0, 0); // specific start time
            } else {
                // Default legacy behavior: expiry at end of day
                expiryDate.setHours(23, 59, 59, 999);
            }
            // Recurrence Logic
            if (event.recurrence && event.recurrence !== 'none') {
                // If the event is in the past, project it forward
                if (expiryDate < now) {
                    const projected = projectEvent(event, expiryDate, now);
                    upcoming.push(projected);
                    // Also keep a record in past if desired, 
                    // but for now let's just show the upcoming occurrence.
                    // To show history, we'd need to generate instances. 
                    // Let's add the *original* to past if it was indeed past, 
                    // but differentiating instances is complex without unique IDs.
                    // Simplified: Recurring events always have an upcoming instance.
                    // We can also push the 'original' to past for history.
                    past.push({
                        ...event,
                        isRecurringInstance: false
                    });
                } else {
                    upcoming.push(event);
                }
            } else {
                // Standard Logic
                if (expiryDate >= now) {
                    upcoming.push(event);
                } else {
                    past.push(event);
                }
            }
        });
        // Sort upcoming by date (nearest first)
        upcoming.sort((a, b)=>new Date(a.date) - new Date(b.date));
        // Sort past by date (most recent first)
        past.sort((a, b)=>new Date(b.date) - new Date(a.date));
        return {
            upcoming,
            past
        };
    },
    /**
     * Adds a new event to local storage.
     * @param {Object} event 
     */ addEvent: (event)=>{
        const storedEvents = localStorage.getItem(STORAGE_KEY);
        const customEvents = storedEvents ? JSON.parse(storedEvents) : [];
        const newEvent = {
            id: `custom-${Date.now()}`,
            isCustom: true,
            ...event
        };
        const updatedEvents = [
            newEvent,
            ...customEvents
        ];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedEvents));
        return newEvent;
    },
    /**
     * Deletes a custom event by ID.
     * @param {string} id 
     */ deleteEvent: (id)=>{
        const storedEvents = localStorage.getItem(STORAGE_KEY);
        if (!storedEvents) return;
        const customEvents = JSON.parse(storedEvents);
        const updatedEvents = customEvents.filter((e)=>e.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedEvents));
        // Return refreshed full list
        return EventManager.getEvents();
    },
    clearCustomEvents: ()=>{
        localStorage.removeItem(STORAGE_KEY);
    }
};
// Helper: Project a past event to its next future occurrence
const projectEvent = (event, originalExpiry, now)=>{
    let nextDate = new Date(originalExpiry);
    const originalDate = new Date(event.date); // Keep time synced
    // Add intervals until > now
    while(nextDate < now){
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
        date: originalDate.toISOString().split('T')[0],
        originalId: event.id,
        isRecurringInstance: true
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/Dashboard.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "activeTab": "Dashboard-module__WBI1ha__activeTab",
  "addBtn": "Dashboard-module__WBI1ha__addBtn",
  "architectForm": "Dashboard-module__WBI1ha__architectForm",
  "architectFormGroup": "Dashboard-module__WBI1ha__architectFormGroup",
  "architectLabel": "Dashboard-module__WBI1ha__architectLabel",
  "avatar": "Dashboard-module__WBI1ha__avatar",
  "avatarContainer": "Dashboard-module__WBI1ha__avatarContainer",
  "content": "Dashboard-module__WBI1ha__content",
  "dashboardContainer": "Dashboard-module__WBI1ha__dashboardContainer",
  "form": "Dashboard-module__WBI1ha__form",
  "input": "Dashboard-module__WBI1ha__input",
  "nav": "Dashboard-module__WBI1ha__nav",
  "navBtn": "Dashboard-module__WBI1ha__navBtn",
  "negative": "Dashboard-module__WBI1ha__negative",
  "neonInput": "Dashboard-module__WBI1ha__neonInput",
  "neonSelect": "Dashboard-module__WBI1ha__neonSelect",
  "neonTextarea": "Dashboard-module__WBI1ha__neonTextarea",
  "positive": "Dashboard-module__WBI1ha__positive",
  "publishBtn": "Dashboard-module__WBI1ha__publishBtn",
  "rankBadge": "Dashboard-module__WBI1ha__rankBadge",
  "row": "Dashboard-module__WBI1ha__row",
  "sectionHeader": "Dashboard-module__WBI1ha__sectionHeader",
  "sectionTitle": "Dashboard-module__WBI1ha__sectionTitle",
  "select": "Dashboard-module__WBI1ha__select",
  "sidebar": "Dashboard-module__WBI1ha__sidebar",
  "statCard": "Dashboard-module__WBI1ha__statCard",
  "statLabel": "Dashboard-module__WBI1ha__statLabel",
  "statValue": "Dashboard-module__WBI1ha__statValue",
  "statsGrid": "Dashboard-module__WBI1ha__statsGrid",
  "table": "Dashboard-module__WBI1ha__table",
  "tableContainer": "Dashboard-module__WBI1ha__tableContainer",
  "userInfo": "Dashboard-module__WBI1ha__userInfo",
  "userName": "Dashboard-module__WBI1ha__userName",
  "userProfile": "Dashboard-module__WBI1ha__userProfile",
  "userRole": "Dashboard-module__WBI1ha__userRole",
});
}),
"[project]/src/views/Dashboard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.js [app-client] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/repeat.js [app-client] (ecmascript) <export default as Repeat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$EventManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/EventManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/views/Dashboard.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const Dashboard = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('tracker');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dashboard.useEffect": ()=>{
            const isAuth = localStorage.getItem('isAuthenticated');
            if (!isAuth) {
                router.push('/login');
            }
        }
    }["Dashboard.useEffect"], [
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dashboardContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userProfile,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarContainer,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar,
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentUser"].name.charAt(0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/Dashboard.jsx",
                                        lineNumber: 25,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rankBadge,
                                        children: "LVL 42"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/Dashboard.jsx",
                                        lineNumber: 26,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 24,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userInfo,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userName,
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentUser"].name
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/Dashboard.jsx",
                                        lineNumber: 29,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userRole,
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentUser"].role,
                                            "Class"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/Dashboard.jsx",
                                        lineNumber: 30,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 28,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/Dashboard.jsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navBtn} ${activeTab === 'tracker' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeTab : ''}`,
                                onClick: ()=>setActiveTab('tracker'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/Dashboard.jsx",
                                        lineNumber: 39,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Combat Log"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 35,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navBtn} ${activeTab === 'manage-events' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeTab : ''}`,
                                onClick: ()=>setActiveTab('manage-events'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/Dashboard.jsx",
                                        lineNumber: 45,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Manage Events"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 41,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navBtn} ${activeTab === 'meetings' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeTab : ''}`,
                                onClick: ()=>setActiveTab('meetings'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/Dashboard.jsx",
                                        lineNumber: 51,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Mission Briefs"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 47,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navBtn} ${activeTab === 'announcements' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeTab : ''}`,
                                onClick: ()=>setActiveTab('announcements'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/Dashboard.jsx",
                                        lineNumber: 57,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Comms"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 53,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navBtn} ${activeTab === 'discussions' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeTab : ''}`,
                                onClick: ()=>setActiveTab('discussions'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/Dashboard.jsx",
                                        lineNumber: 63,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Forum"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 59,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/Dashboard.jsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/Dashboard.jsx",
                lineNumber: 22,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                children: [
                    activeTab === 'tracker' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContestTracker, {}, void 0, false, {
                        fileName: "[project]/src/views/Dashboard.jsx",
                        lineNumber: 69,
                        columnNumber: 45
                    }, ("TURBOPACK compile-time value", void 0)),
                    activeTab === 'manage-events' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EventArchitect, {}, void 0, false, {
                        fileName: "[project]/src/views/Dashboard.jsx",
                        lineNumber: 70,
                        columnNumber: 51
                    }, ("TURBOPACK compile-time value", void 0)),
                    activeTab === 'meetings' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MeetingUpdates, {}, void 0, false, {
                        fileName: "[project]/src/views/Dashboard.jsx",
                        lineNumber: 71,
                        columnNumber: 46
                    }, ("TURBOPACK compile-time value", void 0)),
                    activeTab === 'announcements' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Announcements, {}, void 0, false, {
                        fileName: "[project]/src/views/Dashboard.jsx",
                        lineNumber: 72,
                        columnNumber: 51
                    }, ("TURBOPACK compile-time value", void 0)),
                    activeTab === 'discussions' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Discussions, {}, void 0, false, {
                        fileName: "[project]/src/views/Dashboard.jsx",
                        lineNumber: 73,
                        columnNumber: 49
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/Dashboard.jsx",
                lineNumber: 68,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/Dashboard.jsx",
        lineNumber: 21,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Dashboard, "66T9HazZ0x3PNPNNcYGNXd4iaE0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Dashboard;
const ContestTracker = ()=>{
    _s1();
    const [entries, setEntries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentUser"].contests);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        platform: 'Codeforces',
        problems: '',
        ratingChange: '',
        notes: ''
    });
    const handleSubmit = (e)=>{
        e.preventDefault();
        const newEntry = {
            id: Date.now(),
            ...formData,
            problems: parseInt(formData.problems) || 0
        };
        setEntries([
            newEntry,
            ...entries
        ]);
        setFormData({
            name: '',
            platform: 'Codeforces',
            problems: '',
            ratingChange: '',
            notes: ''
        });
    };
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    // Calculate stats
    const totalContests = entries.length;
    const totalProblems = entries.reduce((acc, curr)=>acc + (parseInt(curr.problems) || 0), 0);
    const maxRatingChange = Math.max(...entries.map((e)=>parseInt(e.ratingChange) || 0), 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHeader,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                            size: 28,
                            className: "text-yellow-500"
                        }, void 0, false, {
                            fileName: "[project]/src/views/Dashboard.jsx",
                            lineNumber: 112,
                            columnNumber: 53
                        }, ("TURBOPACK compile-time value", void 0)),
                        " Operational Stats"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/Dashboard.jsx",
                    lineNumber: 112,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/views/Dashboard.jsx",
                lineNumber: 111,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statsGrid,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue,
                                children: totalContests
                            }, void 0, false, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 117,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                                children: "Contests"
                            }, void 0, false, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 118,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/Dashboard.jsx",
                        lineNumber: 116,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue,
                                children: totalProblems
                            }, void 0, false, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 121,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                                children: "Problems Solved"
                            }, void 0, false, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 122,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/Dashboard.jsx",
                        lineNumber: 120,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].positive}`,
                                children: [
                                    "+",
                                    maxRatingChange
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 125,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                                children: "Best Performance"
                            }, void 0, false, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 126,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/Dashboard.jsx",
                        lineNumber: 124,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/Dashboard.jsx",
                lineNumber: 115,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                        type: "text",
                        name: "name",
                        placeholder: "Contest Name",
                        value: formData.name,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/views/Dashboard.jsx",
                        lineNumber: 131,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        name: "platform",
                        value: formData.platform,
                        onChange: handleChange,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Codeforces",
                                children: "Codeforces"
                            }, void 0, false, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 141,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "CodeChef",
                                children: "CodeChef"
                            }, void 0, false, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 142,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "AtCoder",
                                children: "AtCoder"
                            }, void 0, false, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 143,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "LeetCode",
                                children: "LeetCode"
                            }, void 0, false, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 144,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/Dashboard.jsx",
                        lineNumber: 140,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                        type: "number",
                        name: "problems",
                        placeholder: "Probs",
                        value: formData.problems,
                        onChange: handleChange
                    }, void 0, false, {
                        fileName: "[project]/src/views/Dashboard.jsx",
                        lineNumber: 146,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                        type: "text",
                        name: "ratingChange",
                        placeholder: "+/-",
                        value: formData.ratingChange,
                        onChange: handleChange
                    }, void 0, false, {
                        fileName: "[project]/src/views/Dashboard.jsx",
                        lineNumber: 154,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                        type: "text",
                        name: "notes",
                        placeholder: "Tactical Notes",
                        value: formData.notes,
                        onChange: handleChange
                    }, void 0, false, {
                        fileName: "[project]/src/views/Dashboard.jsx",
                        lineNumber: 162,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addBtn,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/views/Dashboard.jsx",
                            lineNumber: 170,
                            columnNumber: 65
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/Dashboard.jsx",
                        lineNumber: 170,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/Dashboard.jsx",
                lineNumber: 130,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].table,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Operation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/Dashboard.jsx",
                                        lineNumber: 177,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Platform"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/Dashboard.jsx",
                                        lineNumber: 178,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Kills (Probs)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/Dashboard.jsx",
                                        lineNumber: 179,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Rating Delta"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/Dashboard.jsx",
                                        lineNumber: 180,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Intel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/Dashboard.jsx",
                                        lineNumber: 181,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 176,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/views/Dashboard.jsx",
                            lineNumber: 175,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: entries.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: e.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/Dashboard.jsx",
                                            lineNumber: 187,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: e.platform
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/Dashboard.jsx",
                                            lineNumber: 188,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: e.problems
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/Dashboard.jsx",
                                            lineNumber: 189,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: e.ratingChange.startsWith('+') ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].positive : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].negative,
                                            children: e.ratingChange
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/Dashboard.jsx",
                                            lineNumber: 190,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: e.notes
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/Dashboard.jsx",
                                            lineNumber: 193,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, e.id, true, {
                                    fileName: "[project]/src/views/Dashboard.jsx",
                                    lineNumber: 186,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/views/Dashboard.jsx",
                            lineNumber: 184,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/Dashboard.jsx",
                    lineNumber: 174,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/views/Dashboard.jsx",
                lineNumber: 173,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/Dashboard.jsx",
        lineNumber: 110,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(ContestTracker, "0d4lmurwcfpsMyMeOp05F+GGAbM=");
_c1 = ContestTracker;
const MeetingUpdates = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHeader,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                            size: 28
                        }, void 0, false, {
                            fileName: "[project]/src/views/Dashboard.jsx",
                            lineNumber: 206,
                            columnNumber: 49
                        }, ("TURBOPACK compile-time value", void 0)),
                        " Mission Briefs"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/Dashboard.jsx",
                    lineNumber: 206,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/views/Dashboard.jsx",
                lineNumber: 205,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "updates-list",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentUser"].meetings.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard,
                        style: {
                            marginBottom: '1rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                                children: m.date
                            }, void 0, false, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 211,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: '1.2rem',
                                    margin: '0.5rem 0'
                                },
                                children: m.agenda
                            }, void 0, false, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 212,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: 'var(--text-secondary)'
                                },
                                children: m.keyPoints
                            }, void 0, false, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 213,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, m.id, true, {
                        fileName: "[project]/src/views/Dashboard.jsx",
                        lineNumber: 210,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/views/Dashboard.jsx",
                lineNumber: 208,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/Dashboard.jsx",
        lineNumber: 204,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c2 = MeetingUpdates;
const Announcements = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHeader,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                            size: 28
                        }, void 0, false, {
                            fileName: "[project]/src/views/Dashboard.jsx",
                            lineNumber: 223,
                            columnNumber: 49
                        }, ("TURBOPACK compile-time value", void 0)),
                        " Global Comms"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/Dashboard.jsx",
                    lineNumber: 223,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/views/Dashboard.jsx",
                lineNumber: 222,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "announcements-feed",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentUser"].announcements.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard,
                        style: {
                            marginBottom: '1rem',
                            borderLeft: '3px solid var(--accent-pink)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                                children: a.date
                            }, void 0, false, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 228,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    marginTop: '0.5rem'
                                },
                                children: a.content
                            }, void 0, false, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 229,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, a.id, true, {
                        fileName: "[project]/src/views/Dashboard.jsx",
                        lineNumber: 227,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/views/Dashboard.jsx",
                lineNumber: 225,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/Dashboard.jsx",
        lineNumber: 221,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c3 = Announcements;
const Discussions = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHeader,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                            size: 28
                        }, void 0, false, {
                            fileName: "[project]/src/views/Dashboard.jsx",
                            lineNumber: 239,
                            columnNumber: 49
                        }, ("TURBOPACK compile-time value", void 0)),
                        " Encrypted Channels"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/Dashboard.jsx",
                    lineNumber: 239,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/views/Dashboard.jsx",
                lineNumber: 238,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "discussion-threads",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentUser"].discussions.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard,
                        style: {
                            marginBottom: '1rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginBottom: '0.5rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        style: {
                                            color: 'var(--primary-glow)'
                                        },
                                        children: d.author
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/Dashboard.jsx",
                                        lineNumber: 245,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                                        children: d.timestamp
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/Dashboard.jsx",
                                        lineNumber: 246,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 244,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: d.content
                            }, void 0, false, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 248,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, d.id, true, {
                        fileName: "[project]/src/views/Dashboard.jsx",
                        lineNumber: 243,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/views/Dashboard.jsx",
                lineNumber: 241,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/Dashboard.jsx",
        lineNumber: 237,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c4 = Discussions;
const EventArchitect = ()=>{
    _s2();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        date: '',
        time: '',
        isAllDay: false,
        recurrence: 'none',
        venue: '',
        category: 'cp',
        description: '',
        registrationLink: ''
    });
    const handleChange = (e)=>{
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({
            ...formData,
            [e.target.name]: value
        });
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        // Basic Validation
        if (!formData.name || !formData.date) {
            alert('Protocol Failed: Name and Date are required.');
            return;
        }
        // Save Event
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$EventManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventManager"].addEvent(formData);
        // Visual Feedback
        const btn = document.getElementById('publishBtn');
        if (btn) {
            btn.innerHTML = "UPLINK ESTABLISHED...";
            btn.style.background = "#4ade80";
        }
        setTimeout(()=>{
            alert("Event Uplink Established: Data successfully patched to the network.");
            router.push('/events');
        }, 800);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHeader,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                            size: 28,
                            className: "text-pink-500 animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/src/views/Dashboard.jsx",
                            lineNumber: 305,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Event Architect"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/Dashboard.jsx",
                    lineNumber: 304,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/views/Dashboard.jsx",
                lineNumber: 303,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].architectForm,
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].architectFormGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].architectLabel,
                                children: "Operation Name"
                            }, void 0, false, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 312,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                name: "name",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].neonInput,
                                placeholder: "e.g. Cyberpunk Hackathon 2077",
                                value: formData.name,
                                onChange: handleChange,
                                autoFocus: true
                            }, void 0, false, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 313,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/Dashboard.jsx",
                        lineNumber: 311,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].row,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].architectFormGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].architectLabel,
                                    children: "Date"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/Dashboard.jsx",
                                    lineNumber: 326,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    name: "date",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].neonInput,
                                    value: formData.date,
                                    onChange: handleChange
                                }, void 0, false, {
                                    fileName: "[project]/src/views/Dashboard.jsx",
                                    lineNumber: 327,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/Dashboard.jsx",
                            lineNumber: 325,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/Dashboard.jsx",
                        lineNumber: 324,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].row,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].architectFormGroup,
                                style: {
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    background: 'rgba(0,0,0,0.2)',
                                    padding: '0.5rem',
                                    borderRadius: '8px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        name: "isAllDay",
                                        id: "isAllDay",
                                        checked: formData.isAllDay,
                                        onChange: handleChange,
                                        style: {
                                            width: '20px',
                                            height: '20px',
                                            accentColor: 'var(--accent-blue)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/Dashboard.jsx",
                                        lineNumber: 339,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "isAllDay",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].architectLabel,
                                        style: {
                                            margin: 0,
                                            cursor: 'pointer'
                                        },
                                        children: "All Day Event"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/Dashboard.jsx",
                                        lineNumber: 347,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 338,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            !formData.isAllDay && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].architectFormGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].architectLabel,
                                        children: "Time"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/Dashboard.jsx",
                                        lineNumber: 352,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "time",
                                        name: "time",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].neonInput,
                                        value: formData.time,
                                        onChange: handleChange
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/Dashboard.jsx",
                                        lineNumber: 353,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 351,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/Dashboard.jsx",
                        lineNumber: 337,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].architectFormGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].architectLabel,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__["Repeat"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/Dashboard.jsx",
                                        lineNumber: 365,
                                        columnNumber: 62
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Recurrence Protocol"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 365,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                name: "recurrence",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].neonSelect,
                                value: formData.recurrence,
                                onChange: handleChange,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "none",
                                        children: "Single Mission (No Repeat)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/Dashboard.jsx",
                                        lineNumber: 372,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "weekly",
                                        children: "Weekly Loop"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/Dashboard.jsx",
                                        lineNumber: 373,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "monthly",
                                        children: "Monthly Cycle"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/Dashboard.jsx",
                                        lineNumber: 374,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 366,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/Dashboard.jsx",
                        lineNumber: 364,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].row,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].architectFormGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].architectLabel,
                                        children: "Venue / Sector"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/Dashboard.jsx",
                                        lineNumber: 380,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "venue",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].neonInput,
                                        placeholder: "e.g. Lab 3 or Google Meet",
                                        value: formData.venue,
                                        onChange: handleChange
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/Dashboard.jsx",
                                        lineNumber: 381,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 379,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].architectFormGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].architectLabel,
                                        children: "Division / Category"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/Dashboard.jsx",
                                        lineNumber: 391,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        name: "category",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].neonSelect,
                                        value: formData.category,
                                        onChange: handleChange,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "cp",
                                                children: "Competitive Programming"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/Dashboard.jsx",
                                                lineNumber: 398,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "web",
                                                children: "Web Development"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/Dashboard.jsx",
                                                lineNumber: 399,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "ml",
                                                children: "Machine Learning"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/Dashboard.jsx",
                                                lineNumber: 400,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "other",
                                                children: "General / Other"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/Dashboard.jsx",
                                                lineNumber: 401,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/Dashboard.jsx",
                                        lineNumber: 392,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 390,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/Dashboard.jsx",
                        lineNumber: 378,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].architectFormGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].architectLabel,
                                children: "Mission Data (Description)"
                            }, void 0, false, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 407,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                name: "description",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].neonTextarea,
                                placeholder: "Brief the operatives on the mission objectives...",
                                value: formData.description,
                                onChange: handleChange
                            }, void 0, false, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 408,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/Dashboard.jsx",
                        lineNumber: 406,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].architectFormGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].architectLabel,
                                children: "Uplink (Registration URL)"
                            }, void 0, false, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 418,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "url",
                                name: "registrationLink",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].neonInput,
                                placeholder: "https://...",
                                value: formData.registrationLink,
                                onChange: handleChange
                            }, void 0, false, {
                                fileName: "[project]/src/views/Dashboard.jsx",
                                lineNumber: 419,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/Dashboard.jsx",
                        lineNumber: 417,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        id: "publishBtn",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].publishBtn,
                        style: {
                            background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-orange))',
                            boxShadow: '0 4px 25px rgba(249, 115, 22, 0.4)'
                        },
                        children: "INITIATE PUBLISH PROTOCOL"
                    }, void 0, false, {
                        fileName: "[project]/src/views/Dashboard.jsx",
                        lineNumber: 429,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/Dashboard.jsx",
                lineNumber: 310,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/Dashboard.jsx",
        lineNumber: 302,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(EventArchitect, "b+9VzU2yPa/mPsJxmudCCWRz7TE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c5 = EventArchitect;
const __TURBOPACK__default__export__ = Dashboard;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Dashboard");
__turbopack_context__.k.register(_c1, "ContestTracker");
__turbopack_context__.k.register(_c2, "MeetingUpdates");
__turbopack_context__.k.register(_c3, "Announcements");
__turbopack_context__.k.register(_c4, "Discussions");
__turbopack_context__.k.register(_c5, "EventArchitect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_47c7c19f._.js.map