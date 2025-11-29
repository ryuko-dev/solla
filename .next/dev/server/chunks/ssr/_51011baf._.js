module.exports = [
"[project]/lib/storage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
    const data = undefined;
}
function setSystemUsers(users) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
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
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
function getCurrentSystemUser() {
    const email = getCurrentUser();
    if (!email) return null;
    const users = getSystemUsers();
    return users.find((u)=>u.email === email) || null;
}
function setCurrentUser(email) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function clearCurrentUser() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function getUserData(email) {
    if ("TURBOPACK compile-time truthy", 1) return {
        projects: [],
        users: [],
        allocations: [],
        positions: []
    };
    //TURBOPACK unreachable
    ;
    const data = undefined;
}
function setUserData(email, data) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const existing = undefined;
    const updated = undefined;
}
function clearUserData(email) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
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
}),
"[project]/lib/data-generator.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/storage.ts [app-ssr] (ecmascript)");
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
    const currentUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentUserData"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCurrentUserData"])({
        projects: [],
        users: [],
        allocations: [],
        positions: []
    });
    // Clear system users
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setSystemUsers"])([]);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCurrentUserData"])({
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
}),
"[project]/components/data-generator-trigger.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataGeneratorTrigger",
    ()=>DataGeneratorTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2d$generator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data-generator.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function DataGeneratorTrigger() {
    const [isGenerating, setIsGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const addLog = (message)=>{
        setLogs((prev)=>[
                ...prev,
                `${new Date().toLocaleTimeString()}: ${message}`
            ]);
    };
    const handleClearAll = ()=>{
        addLog("Clearing all data...");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2d$generator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAllData"])();
        addLog("✅ All data cleared!");
    };
    const handleStep1 = ()=>{
        addLog("Step 1: Creating projects and positions...");
        const { projects, positions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2d$generator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createProjects"])();
        addLog(`✅ Created ${projects.length} projects with ${positions.length} positions`);
    };
    const handleStep2 = ()=>{
        addLog("Step 2: Creating staff...");
        const users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2d$generator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStaff"])();
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2d$generator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateTestData"])();
            // Restore console.log
            console.log = originalLog;
            addLog("🎉 Data generation completed successfully!");
        } catch (error) {
            addLog(`❌ Error: ${error}`);
        } finally{
            setIsGenerating(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 max-w-4xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-6",
                children: "Test Data Generator"
            }, void 0, false, {
                fileName: "[project]/components/data-generator-trigger.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleClearAll,
                        className: "px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50",
                        disabled: isGenerating,
                        children: "🗑️ Clear All Data"
                    }, void 0, false, {
                        fileName: "[project]/components/data-generator-trigger.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleGenerateAll,
                        className: "px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50",
                        disabled: isGenerating,
                        children: isGenerating ? "⏳ Generating..." : "🚀 Generate All Data"
                    }, void 0, false, {
                        fileName: "[project]/components/data-generator-trigger.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleStep1,
                        className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50",
                        disabled: isGenerating,
                        children: "📊 Step 1: Projects & Positions"
                    }, void 0, false, {
                        fileName: "[project]/components/data-generator-trigger.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold mb-2",
                        children: "Activity Log"
                    }, void 0, false, {
                        fileName: "[project]/components/data-generator-trigger.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-64 overflow-y-auto bg-gray-50 p-3 rounded text-sm font-mono",
                        children: logs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500",
                            children: "No activity yet. Click a button to start."
                        }, void 0, false, {
                            fileName: "[project]/components/data-generator-trigger.tsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this) : logs.map((log, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 p-4 bg-blue-50 rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold mb-2",
                        children: "What this will create:"
                    }, void 0, false, {
                        fileName: "[project]/components/data-generator-trigger.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "list-disc list-inside text-sm space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "10 projects with random start/end dates"
                            }, void 0, false, {
                                fileName: "[project]/components/data-generator-trigger.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "~20 positions per project (200 total positions)"
                            }, void 0, false, {
                                fileName: "[project]/components/data-generator-trigger.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "100 staff members with random departments"
                            }, void 0, false, {
                                fileName: "[project]/components/data-generator-trigger.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Random allocations of positions to staff"
                            }, void 0, false, {
                                fileName: "[project]/components/data-generator-trigger.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Different work patterns (Mon-Fri vs Sun-Thu)"
                            }, void 0, false, {
                                fileName: "[project]/components/data-generator-trigger.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
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
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=_51011baf._.js.map