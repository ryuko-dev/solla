(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/storage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// User-specific storage utilities
__turbopack_context__.s([
    "addSystemUser",
    ()=>addSystemUser,
    "authenticateUser",
    ()=>authenticateUser,
    "clearCurrentUser",
    ()=>clearCurrentUser,
    "clearUserData",
    ()=>clearUserData,
    "deleteSystemUser",
    ()=>deleteSystemUser,
    "getCurrentSystemUser",
    ()=>getCurrentSystemUser,
    "getCurrentUser",
    ()=>getCurrentUser,
    "getCurrentUserData",
    ()=>getCurrentUserData,
    "getSystemUsers",
    ()=>getSystemUsers,
    "getUserData",
    ()=>getUserData,
    "setCurrentUser",
    ()=>setCurrentUser,
    "setCurrentUserData",
    ()=>setCurrentUserData,
    "setSystemUsers",
    ()=>setSystemUsers,
    "setUserData",
    ()=>setUserData,
    "updateSystemUser",
    ()=>updateSystemUser
]);
const STORAGE_KEYS = {
    CURRENT_USER: "sola-current-user",
    USER_DATA_PREFIX: "sola-user-data-",
    SYSTEM_USERS: "sola-system-users"
};
function getSystemUsers() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const data = localStorage.getItem(STORAGE_KEYS.SYSTEM_USERS);
    return data ? JSON.parse(data) : [];
}
function setSystemUsers(users) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem(STORAGE_KEYS.SYSTEM_USERS, JSON.stringify(users));
}
function addSystemUser(user) {
    const users = getSystemUsers();
    const newUser = {
        ...user,
        id: `system-user-${Date.now()}`,
        createdAt: new Date().toISOString()
    };
    setSystemUsers([
        ...users,
        newUser
    ]);
    return newUser;
}
function updateSystemUser(id, updates) {
    const users = getSystemUsers();
    const updated = users.map((u)=>u.id === id ? {
            ...u,
            ...updates
        } : u);
    setSystemUsers(updated);
}
function deleteSystemUser(id) {
    const users = getSystemUsers();
    setSystemUsers(users.filter((u)=>u.id !== id));
}
function authenticateUser(email, password) {
    const users = getSystemUsers();
    return users.find((u)=>u.email === email && u.password === password && u.isActive) || null;
}
function getCurrentUser() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
}
function getCurrentSystemUser() {
    const email = getCurrentUser();
    if (!email) return null;
    const users = getSystemUsers();
    return users.find((u)=>u.email === email) || null;
}
function setCurrentUser(email) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, email);
}
function clearCurrentUser() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
}
function getUserData(email) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const data = localStorage.getItem(STORAGE_KEYS.USER_DATA_PREFIX + email);
    return data ? JSON.parse(data) : {
        projects: [],
        users: [],
        allocations: [],
        positions: []
    };
}
function setUserData(email, data) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const existing = getUserData(email);
    const updated = {
        ...existing,
        ...data
    };
    localStorage.setItem(STORAGE_KEYS.USER_DATA_PREFIX + email, JSON.stringify(updated));
}
function clearUserData(email) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.removeItem(STORAGE_KEYS.USER_DATA_PREFIX + email);
}
function getCurrentUserData() {
    const currentUser = getCurrentUser();
    if (!currentUser) return {
        projects: [],
        users: [],
        allocations: [],
        positions: []
    };
    return getUserData(currentUser);
}
function setCurrentUserData(data) {
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    setUserData(currentUser, data);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data-generator.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearAllData",
    ()=>clearAllData,
    "createAllocations",
    ()=>createAllocations,
    "createProjects",
    ()=>createProjects,
    "createStaff",
    ()=>createStaff,
    "generateTestData",
    ()=>generateTestData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/storage.ts [app-client] (ecmascript)");
;
// Helper functions
const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
const YEARS = [
    2024,
    2025,
    2026,
    2027
];
const DEPARTMENTS = [
    'Engineering',
    'Design',
    'Marketing',
    'Sales',
    'HR',
    'Finance',
    'Operations',
    'Product',
    'Legal',
    'QA'
];
const PROJECT_NAMES = [
    'Website Redesign',
    'Mobile App Development',
    'Cloud Migration',
    'AI Integration',
    'Database Optimization',
    'Security Audit',
    'API Development',
    'UI/UX Overhaul',
    'Performance Testing',
    'DevOps Implementation',
    'Analytics Platform',
    'Customer Portal',
    'Payment System',
    'Inventory Management',
    'Reporting Dashboard',
    'Email Campaign',
    'Social Media Integration',
    'Search Engine Optimization',
    'Content Management',
    'E-commerce Platform'
];
const POSITION_NAMES = [
    'Project Manager',
    'Senior Developer',
    'Junior Developer',
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'DevOps Engineer',
    'QA Engineer',
    'UI/UX Designer',
    'Product Designer',
    'Business Analyst',
    'Data Analyst',
    'Marketing Manager',
    'Sales Representative',
    'Customer Support',
    'System Administrator',
    'Database Administrator',
    'Security Specialist',
    'Technical Writer',
    'Scrum Master'
];
function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomDate(startYear, endYear) {
    const year = randomChoice(YEARS.filter((y)=>y >= startYear && y <= endYear));
    const month = randomRange(0, 11);
    return {
        month,
        year
    };
}
function clearAllData() {
    console.log('🗑️  Clearing all existing data...');
    // Clear current user data
    const currentUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUserData"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCurrentUserData"])({
        projects: [],
        users: [],
        allocations: [],
        positions: []
    });
    // Clear system users
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSystemUsers"])([]);
    console.log('✅ All data cleared');
}
function createProjects() {
    console.log('🏗️  Creating 10 projects with positions...');
    const projects = [];
    const positions = [];
    const usedProjectNames = new Set();
    for(let i = 0; i < 10; i++){
        // Pick unique project name
        let projectName;
        do {
            projectName = randomChoice(PROJECT_NAMES);
        }while (usedProjectNames.has(projectName))
        usedProjectNames.add(projectName);
        // Random start and end dates
        const startDate = randomDate(2024, 2025);
        const endDate = randomDate(startDate.year, startDate.year + 2);
        // Ensure end date is after start date
        const startGlobalIdx = startDate.year * 12 + startDate.month;
        const endGlobalIdx = endDate.year * 12 + endDate.month;
        const finalEndIdx = Math.max(startGlobalIdx + 3, endGlobalIdx) // At least 3 months duration
        ;
        const finalEndDate = {
            year: Math.floor(finalEndIdx / 12),
            month: finalEndIdx % 12
        };
        const project = {
            id: `proj-${Date.now()}-${i}`,
            name: `${projectName} ${i + 1}`,
            color: randomChoice([
                '#3B82F6',
                '#10B981',
                '#F59E0B',
                '#8B5CF6',
                '#EC4899',
                '#06B6D4',
                '#EF4444',
                '#14B8A6',
                '#F97316',
                '#84CC16'
            ]),
            startMonth: startDate.month,
            startYear: startDate.year,
            endMonth: finalEndDate.month,
            endYear: finalEndDate.year,
            allocationMode: randomChoice([
                'percentage',
                'days'
            ])
        };
        projects.push(project);
        // Create ~20 positions for this project
        const positionCount = randomRange(18, 22);
        const usedPositionNames = new Set();
        for(let j = 0; j < positionCount; j++){
            let positionName;
            do {
                positionName = randomChoice(POSITION_NAMES);
            }while (usedPositionNames.has(positionName))
            usedPositionNames.add(positionName);
            // Create positions for each month in the project timeline
            for(let monthIdx = startGlobalIdx; monthIdx <= finalEndIdx; monthIdx++){
                const position = {
                    id: `pos-${project.id}-${j}-${monthIdx}`,
                    projectId: project.id,
                    monthIndex: monthIdx,
                    percentage: randomRange(50, 100),
                    allocated: 0,
                    name: positionName,
                    days: project.allocationMode === 'days' ? randomRange(10, 20) : undefined
                };
                positions.push(position);
            }
        }
    }
    console.log(`✅ Created ${projects.length} projects with ${positions.length} total positions`);
    return {
        projects,
        positions
    };
}
function createStaff() {
    console.log('👥 Creating 100 staff members...');
    const firstNames = [
        'John',
        'Jane',
        'Mike',
        'Sarah',
        'David',
        'Emily',
        'Chris',
        'Lisa',
        'Tom',
        'Anna',
        'Robert',
        'Maria',
        'James',
        'Jennifer',
        'William',
        'Linda',
        'Richard',
        'Patricia',
        'Charles',
        'Barbara'
    ];
    const lastNames = [
        'Smith',
        'Johnson',
        'Williams',
        'Brown',
        'Jones',
        'Garcia',
        'Miller',
        'Davis',
        'Rodriguez',
        'Martinez',
        'Wilson',
        'Anderson',
        'Taylor',
        'Thomas',
        'Hernandez',
        'Moore',
        'Martin',
        'Jackson',
        'Thompson',
        'White'
    ];
    const users = [];
    const usedNames = new Set();
    for(let i = 0; i < 100; i++){
        let firstName, lastName, fullName;
        do {
            firstName = randomChoice(firstNames);
            lastName = randomChoice(lastNames);
            fullName = `${firstName} ${lastName}`;
        }while (usedNames.has(fullName))
        usedNames.add(fullName);
        const startDate = randomDate(2024, 2025);
        const endDate = Math.random() > 0.8 ? randomDate(startDate.year, startDate.year + 2) : undefined;
        const user = {
            id: `user-${Date.now()}-${i}`,
            name: fullName,
            department: randomChoice(DEPARTMENTS),
            startDate: `${startDate.year}-${String(startDate.month + 1).padStart(2, '0')}-01`,
            endDate: endDate ? `${endDate.year}-${String(endDate.month + 1).padStart(2, '0')}-01` : undefined,
            workDays: randomChoice([
                'mon-fri',
                'sun-thu'
            ]),
            role: randomChoice([
                'admin',
                'editor',
                'viewer'
            ]),
            email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@company.com`,
            isActive: true
        };
        users.push(user);
    }
    console.log(`✅ Created ${users.length} staff members`);
    return users;
}
function createAllocations(users, projects, positions) {
    console.log('🎯 Allocating positions to staff...');
    const allocations = [];
    const availablePositions = positions.filter((p)=>p.percentage > 0);
    // Shuffle users and positions for random distribution
    const shuffledUsers = [
        ...users
    ].sort(()=>Math.random() - 0.5);
    const shuffledPositions = [
        ...availablePositions
    ].sort(()=>Math.random() - 0.5);
    // Allocate roughly 60-80% of positions
    const positionsToAllocate = Math.floor(shuffledPositions.length * randomRange(0.6, 0.8));
    for(let i = 0; i < positionsToAllocate; i++){
        const position = shuffledPositions[i];
        const user = shuffledUsers[i % shuffledUsers.length];
        // Random allocation percentage (can be less than or equal to position requirement)
        const maxAllocation = position.percentage;
        const allocationPercentage = randomRange(Math.floor(maxAllocation * 0.5), maxAllocation);
        const allocation = {
            id: `alloc-${Date.now()}-${i}`,
            userId: user.id,
            projectId: position.projectId,
            monthIndex: position.monthIndex,
            percentage: allocationPercentage,
            positionId: position.id,
            positionName: position.name
        };
        allocations.push(allocation);
    }
    console.log(`✅ Created ${allocations.length} allocations`);
    return allocations;
}
function generateTestData() {
    console.log('🚀 Starting test data generation...');
    // Step 1: Clear all data
    clearAllData();
    // Step 2: Create projects and positions
    const { projects, positions } = createProjects();
    // Step 3: Create staff
    const users = createStaff();
    // Step 4: Create allocations
    const allocations = createAllocations(users, projects, positions);
    // Save all data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCurrentUserData"])({
        projects,
        users,
        positions,
        allocations
    });
    console.log('🎉 Test data generation complete!');
    console.log(`📊 Summary: ${projects.length} projects, ${users.length} users, ${positions.length} positions, ${allocations.length} allocations`);
    return {
        projects,
        users,
        positions,
        allocations
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/data-generator-trigger.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataGeneratorTrigger",
    ()=>DataGeneratorTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2d$generator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data-generator.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function DataGeneratorTrigger() {
    _s();
    const [isGenerating, setIsGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const addLog = (message)=>{
        setLogs((prev)=>[
                ...prev,
                `${new Date().toLocaleTimeString()}: ${message}`
            ]);
    };
    const handleClearAll = ()=>{
        addLog("Clearing all data...");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2d$generator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAllData"])();
        addLog("✅ All data cleared!");
    };
    const handleStep1 = ()=>{
        addLog("Step 1: Creating projects and positions...");
        const { projects, positions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2d$generator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createProjects"])();
        addLog(`✅ Created ${projects.length} projects with ${positions.length} positions`);
    };
    const handleStep2 = ()=>{
        addLog("Step 2: Creating staff...");
        const users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2d$generator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStaff"])();
        addLog(`✅ Created ${users.length} staff members`);
    };
    const handleStep3 = ()=>{
        addLog("Step 3: Creating allocations...");
        // This would need the existing data, so for now just show the concept
        addLog("⚠️  This step requires existing projects and positions data");
    };
    const handleGenerateAll = async ()=>{
        setIsGenerating(true);
        addLog("🚀 Starting complete data generation...");
        try {
            // Override console.log to capture logs
            const originalLog = console.log;
            console.log = (...args)=>{
                originalLog(...args);
                addLog(args.join(' '));
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2d$generator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTestData"])();
            // Restore console.log
            console.log = originalLog;
            addLog("🎉 Data generation completed successfully!");
        } catch (error) {
            addLog(`❌ Error: ${error}`);
        } finally{
            setIsGenerating(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 max-w-4xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-6",
                children: "Test Data Generator"
            }, void 0, false, {
                fileName: "[project]/components/data-generator-trigger.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleClearAll,
                        className: "px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50",
                        disabled: isGenerating,
                        children: "🗑️ Clear All Data"
                    }, void 0, false, {
                        fileName: "[project]/components/data-generator-trigger.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleGenerateAll,
                        className: "px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50",
                        disabled: isGenerating,
                        children: isGenerating ? "⏳ Generating..." : "🚀 Generate All Data"
                    }, void 0, false, {
                        fileName: "[project]/components/data-generator-trigger.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleStep1,
                        className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50",
                        disabled: isGenerating,
                        children: "📊 Step 1: Projects & Positions"
                    }, void 0, false, {
                        fileName: "[project]/components/data-generator-trigger.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleStep2,
                        className: "px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:opacity-50",
                        disabled: isGenerating,
                        children: "👥 Step 2: Create Staff"
                    }, void 0, false, {
                        fileName: "[project]/components/data-generator-trigger.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/data-generator-trigger.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold mb-2",
                        children: "Activity Log"
                    }, void 0, false, {
                        fileName: "[project]/components/data-generator-trigger.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-64 overflow-y-auto bg-gray-50 p-3 rounded text-sm font-mono",
                        children: logs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500",
                            children: "No activity yet. Click a button to start."
                        }, void 0, false, {
                            fileName: "[project]/components/data-generator-trigger.tsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this) : logs.map((log, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: log.includes('✅') ? 'text-green-600' : log.includes('❌') ? 'text-red-600' : 'text-gray-800',
                                children: log
                            }, index, false, {
                                fileName: "[project]/components/data-generator-trigger.tsx",
                                lineNumber: 107,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/data-generator-trigger.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/data-generator-trigger.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 p-4 bg-blue-50 rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold mb-2",
                        children: "What this will create:"
                    }, void 0, false, {
                        fileName: "[project]/components/data-generator-trigger.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "list-disc list-inside text-sm space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "10 projects with random start/end dates"
                            }, void 0, false, {
                                fileName: "[project]/components/data-generator-trigger.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "~20 positions per project (200 total positions)"
                            }, void 0, false, {
                                fileName: "[project]/components/data-generator-trigger.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "100 staff members with random departments"
                            }, void 0, false, {
                                fileName: "[project]/components/data-generator-trigger.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Random allocations of positions to staff"
                            }, void 0, false, {
                                fileName: "[project]/components/data-generator-trigger.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Different work patterns (Mon-Fri vs Sun-Thu)"
                            }, void 0, false, {
                                fileName: "[project]/components/data-generator-trigger.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Both percentage and days allocation modes"
                            }, void 0, false, {
                                fileName: "[project]/components/data-generator-trigger.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/data-generator-trigger.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/data-generator-trigger.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/data-generator-trigger.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(DataGeneratorTrigger, "1Rr9tRal0AQcqgXhOB4aHveceR0=");
_c = DataGeneratorTrigger;
var _c;
__turbopack_context__.k.register(_c, "DataGeneratorTrigger");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_e0ee0e5c._.js.map