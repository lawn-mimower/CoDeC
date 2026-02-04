module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.jsx [app-rsc] (ecmascript)"));
}),
"[project]/src/data/mockData.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/views/ClubHeadsPage.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.js [app-rsc] (ecmascript)");
;
;
;
const ClubHeadsPage = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "page-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "background",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid"
                    }, void 0, false, {
                        fileName: "[project]/src/views/ClubHeadsPage.jsx",
                        lineNumber: 8,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glowOrb"
                    }, void 0, false, {
                        fileName: "[project]/src/views/ClubHeadsPage.jsx",
                        lineNumber: 9,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/ClubHeadsPage.jsx",
                lineNumber: 7,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Club Heads"
                    }, void 0, false, {
                        fileName: "[project]/src/views/ClubHeadsPage.jsx",
                        lineNumber: 13,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Meet the leaders driving innovation at CoDeC."
                    }, void 0, false, {
                        fileName: "[project]/src/views/ClubHeadsPage.jsx",
                        lineNumber: 14,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/ClubHeadsPage.jsx",
                lineNumber: 12,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "heads-grid",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clubHeads"].map((head)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "head-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "head-image-wrapper",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: head.image,
                                    alt: head.name,
                                    className: "head-image"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/ClubHeadsPage.jsx",
                                    lineNumber: 21,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/views/ClubHeadsPage.jsx",
                                lineNumber: 20,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "head-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: head.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ClubHeadsPage.jsx",
                                        lineNumber: 24,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "head-position",
                                        children: head.position
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ClubHeadsPage.jsx",
                                        lineNumber: 25,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "head-bio",
                                        children: head.bio
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ClubHeadsPage.jsx",
                                        lineNumber: 26,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ClubHeadsPage.jsx",
                                lineNumber: 23,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, head.id, true, {
                        fileName: "[project]/src/views/ClubHeadsPage.jsx",
                        lineNumber: 19,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/views/ClubHeadsPage.jsx",
                lineNumber: 17,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/ClubHeadsPage.jsx",
        lineNumber: 6,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ClubHeadsPage;
}),
"[project]/app/heads/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$ClubHeadsPage$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/ClubHeadsPage.jsx [app-rsc] (ecmascript)");
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$ClubHeadsPage$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/heads/page.jsx",
        lineNumber: 4,
        columnNumber: 12
    }, this);
}
}),
"[project]/app/heads/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/heads/page.jsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5edb00d3._.js.map