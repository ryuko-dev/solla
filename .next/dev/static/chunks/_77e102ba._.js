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
        positions: [],
        entities: []
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
        positions: [],
        entities: []
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
"[project]/lib/shared-state.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Shared state utilities for cross-page persistence
__turbopack_context__.s([
    "getSharedMonthYear",
    ()=>getSharedMonthYear,
    "setSharedMonthYear",
    ()=>setSharedMonthYear,
    "useSharedMonthYear",
    ()=>useSharedMonthYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const SHARED_MONTH_YEAR_KEY = 'sola-shared-month-year';
function getSharedMonthYear() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const saved = localStorage.getItem(SHARED_MONTH_YEAR_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            // Validate the saved data
            if (typeof parsed.month === 'number' && parsed.month >= 0 && parsed.month <= 11 && typeof parsed.year === 'number' && parsed.year >= 2020 && parsed.year <= 2030) {
                return parsed;
            }
        }
    } catch (error) {
        console.warn('Error parsing shared month/year state:', error);
    }
    // Fallback to current month/year
    const now = new Date();
    return {
        month: now.getMonth(),
        year: now.getFullYear()
    };
}
function setSharedMonthYear(month, year) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const state = {
            month,
            year
        };
        localStorage.setItem(SHARED_MONTH_YEAR_KEY, JSON.stringify(state));
        // Dispatch custom event to notify other components
        window.dispatchEvent(new CustomEvent('sharedMonthYearChanged', {
            detail: {
                month,
                year
            }
        }));
    } catch (error) {
        console.error('Error saving shared month/year state:', error);
    }
}
function useSharedMonthYear() {
    _s();
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(getSharedMonthYear);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useSharedMonthYear.useEffect": ()=>{
            const handleStorageChange = {
                "useSharedMonthYear.useEffect.handleStorageChange": (e)=>{
                    if (e.key === SHARED_MONTH_YEAR_KEY && e.newValue) {
                        try {
                            const newState = JSON.parse(e.newValue);
                            setState(newState);
                        } catch (error) {
                            console.warn('Error parsing storage change:', error);
                        }
                    }
                }
            }["useSharedMonthYear.useEffect.handleStorageChange"];
            const handleCustomEvent = {
                "useSharedMonthYear.useEffect.handleCustomEvent": (e)=>{
                    setState({
                        month: e.detail.month,
                        year: e.detail.year
                    });
                }
            }["useSharedMonthYear.useEffect.handleCustomEvent"];
            // Listen for both storage events and custom events
            window.addEventListener('storage', handleStorageChange);
            window.addEventListener('sharedMonthYearChanged', handleCustomEvent);
            return ({
                "useSharedMonthYear.useEffect": ()=>{
                    window.removeEventListener('storage', handleStorageChange);
                    window.removeEventListener('sharedMonthYearChanged', handleCustomEvent);
                }
            })["useSharedMonthYear.useEffect"];
        }
    }["useSharedMonthYear.useEffect"], []);
    const setMonthYear = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useSharedMonthYear.useCallback[setMonthYear]": (month, year)=>{
            setState({
                month,
                year
            });
            setSharedMonthYear(month, year);
        }
    }["useSharedMonthYear.useCallback[setMonthYear]"], []);
    return [
        state,
        setMonthYear
    ];
}
_s(useSharedMonthYear, "XytvxFxjnayxGtnmrfF7en2hFQ8=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$2$2e$5$2e$5$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwind-merge@2.5.5/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$2$2e$5$2e$5$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$1$2e$1_$40$types$2b$react$40$19$2e$0$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-slot@1.1.1_@types+react@19.0.0_react@19.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$1$2e$1_$40$types$2b$react$40$19$2e$0$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/permissions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Role-based access control utilities
__turbopack_context__.s([
    "canAccessTab",
    ()=>canAccessTab,
    "canDeletePage",
    ()=>canDeletePage,
    "canEditPage",
    ()=>canEditPage,
    "canLockPayroll",
    ()=>canLockPayroll,
    "getAllTabPermissions",
    ()=>getAllTabPermissions,
    "getPermissions",
    ()=>getPermissions
]);
function getPermissions(role, page) {
    switch(role){
        case 'admin':
            return {
                canView: true,
                canEdit: true,
                canDelete: true
            };
        case 'senior':
            return {
                canView: true,
                canEdit: true,
                canDelete: true
            };
        case 'editor':
            // Editor can view all tabs except settings, but only edit specific pages
            const canEdit = page === 'expenseAllocation' || page === 'scheduledRecords';
            return {
                canView: true,
                canEdit,
                canDelete: canEdit
            };
        case 'viewer':
            // Viewer can only view allocation and planning
            const canView = page === 'allocation' || page === 'planning';
            return {
                canView,
                canEdit: false,
                canDelete: false
            };
        default:
            return {
                canView: false,
                canEdit: false,
                canDelete: false
            };
    }
}
function getAllTabPermissions(role) {
    return {
        allocation: getPermissions(role, 'allocation'),
        planning: getPermissions(role, 'planning'),
        actualAllocation: getPermissions(role, 'actualAllocation'),
        expenseAllocation: getPermissions(role, 'expenseAllocation'),
        scheduledRecords: getPermissions(role, 'scheduledRecords'),
        settings: {
            canView: role === 'admin',
            canEdit: role === 'admin',
            canDelete: role === 'admin'
        }
    };
}
function canAccessTab(role, tab) {
    const permissions = getAllTabPermissions(role);
    return permissions[tab].canView;
}
function canEditPage(role, page) {
    return getPermissions(role, page).canEdit;
}
function canLockPayroll(role) {
    return role === 'admin' || role === 'senior';
}
function canDeletePage(role, page) {
    return getPermissions(role, page).canDelete;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navigation",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/permissions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Navigation({ currentPage }) {
    _s();
    const [userRole, setUserRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigation.useEffect": ()=>{
            const systemUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentSystemUser"])();
            setUserRole(systemUser?.role || null);
        }
    }["Navigation.useEffect"], []);
    if (!userRole) return null;
    const tabs = [
        {
            key: 'allocation',
            label: 'Allocation',
            href: '/'
        },
        {
            key: 'planning',
            label: 'Planning',
            href: '/planning'
        },
        {
            key: 'actualAllocation',
            label: 'Payroll Allocation',
            href: '/actual-allocation'
        },
        {
            key: 'expenseAllocation',
            label: 'Expense Allocation',
            href: '/expense-allocation'
        },
        {
            key: 'scheduledRecords',
            label: 'Scheduled Records',
            href: '/scheduled-records'
        }
    ];
    const visibleTabs = tabs.filter((tab)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canAccessTab"])(userRole, tab.key));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "bg-white border-b border-gray-200 px-6 py-3",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-lg font-semibold text-gray-900",
                    children: "Sola Allocation Tool"
                }, void 0, false, {
                    fileName: "[project]/components/navigation.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4",
                    children: visibleTabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: tab.href,
                            className: currentPage === tab.href ? "text-blue-600 hover:text-blue-800 font-medium" : "text-gray-600 hover:text-gray-800 font-medium",
                            children: tab.label
                        }, tab.key, false, {
                            fileName: "[project]/components/navigation.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/navigation.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/navigation.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/navigation.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(Navigation, "vPp0yqj+hRw1UlF3QGOL0H6Z92E=");
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/actual-allocation/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ActualAllocationPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xlsx$40$0$2e$18$2e$5$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/xlsx@0.18.5/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$shared$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/shared-state.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/navigation.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
function ActualAllocationPage() {
    _s();
    const [currentUser, setCurrentUser] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [users, setUsers] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [projects, setProjects] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [entities, setEntities] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [allocations, setAllocations] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]) // Load staff allocations
    ;
    // Initialize with shared month/year state
    const sharedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$shared$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSharedMonthYear"])();
    const [selectedMonth, setSelectedMonth] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](sharedState.month);
    const [selectedYear, setSelectedYear] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](sharedState.year);
    const [isLocked, setIsLocked] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [monthlyAllocation, setMonthlyAllocation] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [showPercentage, setShowPercentage] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [isClient, setIsClient] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    // Update shared state when month/year changes
    const updateMonthYear = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "ActualAllocationPage.useCallback[updateMonthYear]": (month, year)=>{
            setSelectedMonth(month);
            setSelectedYear(year);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$shared$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSharedMonthYear"])(month, year);
        }
    }["ActualAllocationPage.useCallback[updateMonthYear]"], []);
    // Handle client-side hydration
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ActualAllocationPage.useEffect": ()=>{
            setIsClient(true);
        }
    }["ActualAllocationPage.useEffect"], []);
    // Load user data on component mount
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ActualAllocationPage.useEffect": ()=>{
            const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])();
            const systemUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentSystemUser"])();
            if (!user || !systemUser) {
                window.location.href = "/login";
                return;
            }
            setCurrentUser(user);
            // Load users and projects data from localStorage
            const userData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUserData"])();
            const monthKey = `${selectedYear}-${selectedMonth}`;
            // Load projects
            setProjects(userData.projects || []);
            // Load allocations from staff allocation table
            setAllocations(userData.allocations || []);
            // Load entities for account codes
            setEntities(userData.entities || []);
            // Load month-specific lock state (applies to all users)
            const savedLockState = localStorage.getItem(`sola-lock-state-${monthKey}`);
            setIsLocked(savedLockState === 'true');
            // Initialize monthly allocation items
            const savedMonthlyAllocation = localStorage.getItem(`sola-monthly-allocation-${user}-${monthKey}`);
            if (savedMonthlyAllocation) {
                setMonthlyAllocation(JSON.parse(savedMonthlyAllocation));
            } else {
                // Initialize with default items for each staff member and account category
                const accountCategories = [
                    {
                        name: 'Net Salary',
                        code: '631 0001'
                    },
                    {
                        name: 'Fringe Benefit - Leave',
                        code: '631 0001'
                    },
                    {
                        name: 'Social Security',
                        code: '635 1001'
                    },
                    {
                        name: 'Employee Tax',
                        code: '620 1005'
                    },
                    {
                        name: 'Employer Tax',
                        code: '620 1005'
                    },
                    {
                        name: 'Housing',
                        code: '635 4001'
                    },
                    {
                        name: 'Other Benefits',
                        code: '602 4001'
                    }
                ];
                const defaultItems = [];
                userData.users.forEach({
                    "ActualAllocationPage.useEffect": (user)=>{
                        accountCategories.forEach({
                            "ActualAllocationPage.useEffect": (category, index)=>{
                                defaultItems.push({
                                    id: `${user.id}-${category.code}-${index}`,
                                    name: user.name,
                                    code: category.code,
                                    description: `${user.name} - ${category.name} for ${MONTHS[selectedMonth]} ${selectedYear}`,
                                    currency: 'USD',
                                    amount: 0,
                                    project: '',
                                    projectTask: '',
                                    account: `${category.name} [${category.code}]`
                                });
                            }
                        }["ActualAllocationPage.useEffect"]);
                    }
                }["ActualAllocationPage.useEffect"]);
                setMonthlyAllocation(defaultItems);
            }
            const usersWithPayroll = userData.users.map({
                "ActualAllocationPage.useEffect.usersWithPayroll": (user)=>{
                    // Load existing monthly data or create new empty structure
                    const existingPayrollData = user.payrollDataByMonth?.[monthKey];
                    const existingFringeData = user.fringeDataByMonth?.[monthKey];
                    const existingProjectData = user.projectDataByMonth?.[monthKey];
                    return {
                        ...user,
                        entity: user.entity || "Unassigned",
                        payrollDataByMonth: {
                            ...user.payrollDataByMonth,
                            [monthKey]: existingPayrollData || {
                                currency: "USD",
                                netSalary: 0,
                                socialSecurity: 0,
                                employeeTax: 0,
                                employerTax: 0,
                                housing: 0,
                                otherBenefits: 0
                            }
                        },
                        fringeDataByMonth: {
                            ...user.fringeDataByMonth,
                            [monthKey]: existingFringeData || {
                                workingDays: calculateWorkingDays(user.workDays || 'mon-fri', selectedMonth, selectedYear),
                                annualLeave: 0,
                                sickLeave: 0,
                                publicHolidays: 0,
                                dailyRate: 0
                            }
                        },
                        projectDataByMonth: {
                            ...user.projectDataByMonth,
                            [monthKey]: existingProjectData || {}
                        }
                    };
                }
            }["ActualAllocationPage.useEffect.usersWithPayroll"]);
            setUsers(usersWithPayroll);
        }
    }["ActualAllocationPage.useEffect"], []);
    // Check if current user is admin
    const isAdmin = ()=>{
        const systemUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentSystemUser"])();
        return systemUser?.role === 'admin';
    };
    // Toggle lock state (admin only)
    const toggleLock = ()=>{
        if (!isAdmin()) return;
        const newLockState = !isLocked;
        setIsLocked(newLockState);
        // Save month-specific lock state to localStorage (applies to all users)
        const monthKey = `${selectedYear}-${selectedMonth}`;
        localStorage.setItem(`sola-lock-state-${monthKey}`, newLockState.toString());
    };
    // Reload lock state when month/year changes
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ActualAllocationPage.useEffect": ()=>{
            const monthKey = `${selectedYear}-${selectedMonth}`;
            const savedLockState = localStorage.getItem(`sola-lock-state-${monthKey}`);
            setIsLocked(savedLockState === 'true');
        }
    }["ActualAllocationPage.useEffect"], [
        selectedMonth,
        selectedYear
    ]);
    // Recalculate working days when month/year changes
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ActualAllocationPage.useEffect": ()=>{
            const monthKey = `${selectedYear}-${selectedMonth}`;
            setUsers({
                "ActualAllocationPage.useEffect": (prevUsers)=>prevUsers.map({
                        "ActualAllocationPage.useEffect": (user)=>({
                                ...user,
                                fringeDataByMonth: {
                                    ...user.fringeDataByMonth,
                                    [monthKey]: {
                                        ...user.fringeDataByMonth?.[monthKey] || {
                                            annualLeave: 0,
                                            sickLeave: 0,
                                            publicHolidays: 0,
                                            dailyRate: 0
                                        },
                                        workingDays: calculateWorkingDays(user.workDays || 'mon-fri', selectedMonth, selectedYear)
                                    }
                                }
                            })
                    }["ActualAllocationPage.useEffect"])
            }["ActualAllocationPage.useEffect"]);
        }
    }["ActualAllocationPage.useEffect"], [
        selectedMonth,
        selectedYear
    ]);
    // Reload monthly allocation when month/year changes
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ActualAllocationPage.useEffect": ()=>{
            const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])();
            if (!user) return;
            const monthKey = `${selectedYear}-${selectedMonth}`;
            const savedMonthlyAllocation = localStorage.getItem(`sola-monthly-allocation-${user}-${monthKey}`);
            const userData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUserData"])();
            if (savedMonthlyAllocation) {
                const loadedData = JSON.parse(savedMonthlyAllocation);
                // Update descriptions with current month/year, preserving account category
                const updatedData = loadedData.map({
                    "ActualAllocationPage.useEffect.updatedData": (item)=>{
                        // Extract account category name from the account field
                        const accountName = item.account.split(' [')[0];
                        return {
                            ...item,
                            description: `${item.name} - ${accountName} ${MONTHS[selectedMonth]} ${selectedYear}`
                        };
                    }
                }["ActualAllocationPage.useEffect.updatedData"]);
                setMonthlyAllocation(updatedData);
            } else {
                // Initialize with default items for each staff member and account category
                const accountCategories = [
                    {
                        name: 'Net Salary',
                        code: '631 0001'
                    },
                    {
                        name: 'Fringe Benefit - Leave',
                        code: '631 0001'
                    },
                    {
                        name: 'Social Security',
                        code: '635 1001'
                    },
                    {
                        name: 'Employee Tax',
                        code: '620 1005'
                    },
                    {
                        name: 'Employer Tax',
                        code: '620 1005'
                    },
                    {
                        name: 'Housing',
                        code: '635 4001'
                    },
                    {
                        name: 'Other Benefits',
                        code: '602 4001'
                    }
                ];
                const defaultItems = [];
                userData.users.forEach({
                    "ActualAllocationPage.useEffect": (user)=>{
                        accountCategories.forEach({
                            "ActualAllocationPage.useEffect": (category, index)=>{
                                defaultItems.push({
                                    id: `${user.id}-${category.code}-${index}`,
                                    name: user.name,
                                    code: category.code,
                                    description: `${user.name} - ${category.name} for ${MONTHS[selectedMonth]} ${selectedYear}`,
                                    currency: 'USD',
                                    amount: 0,
                                    project: '',
                                    projectTask: '',
                                    account: `${category.name} [${category.code}]`
                                });
                            }
                        }["ActualAllocationPage.useEffect"]);
                    }
                }["ActualAllocationPage.useEffect"]);
                setMonthlyAllocation(defaultItems);
            }
        }
    }["ActualAllocationPage.useEffect"], [
        selectedMonth,
        selectedYear
    ]);
    // Calculate working days based on user's work pattern
    const calculateWorkingDays = (workPattern, month, year)=>{
        const date = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        let workingDays = 0;
        for(let day = 1; day <= daysInMonth; day++){
            date.setDate(day);
            const dayOfWeek = date.getDay();
            if (workPattern === 'mon-fri') {
                if (dayOfWeek >= 1 && dayOfWeek <= 5) workingDays++;
            } else {
                if (dayOfWeek >= 0 && dayOfWeek <= 4) workingDays++;
            }
        }
        return workingDays;
    };
    // Filter projects that are active in the selected month
    const getActiveProjects = ()=>{
        const monthIndex = (selectedYear - 2024) * 12 + selectedMonth;
        return projects.filter((project)=>{
            const projectStartMonth = (project.startYear - 2024) * 12 + (project.startMonth || 0);
            const projectEndMonth = (project.endYear - 2024) * 12 + (project.endMonth || 11);
            return monthIndex >= projectStartMonth && monthIndex <= projectEndMonth;
        });
    };
    // Handle cell value changes
    const handleCellValueChange = (userId, field, value, section, projectId)=>{
        // Prevent changes if locked
        if (isLocked) return;
        const monthKey = `${selectedYear}-${selectedMonth}`;
        const numValue = parseFloat(value) || 0;
        setUsers((prevUsers)=>{
            const updatedUsers = prevUsers.map((user)=>{
                if (user.id === userId) {
                    if (section === 'payroll') {
                        return {
                            ...user,
                            payrollDataByMonth: {
                                ...user.payrollDataByMonth,
                                [monthKey]: {
                                    ...user.payrollDataByMonth?.[monthKey] || {
                                        currency: "USD",
                                        netSalary: 0,
                                        socialSecurity: 0,
                                        employeeTax: 0,
                                        employerTax: 0,
                                        housing: 0,
                                        otherBenefits: 0
                                    },
                                    [field]: field === 'currency' ? value : numValue
                                }
                            }
                        };
                    } else if (section === 'fringe') {
                        return {
                            ...user,
                            fringeDataByMonth: {
                                ...user.fringeDataByMonth,
                                [monthKey]: {
                                    ...user.fringeDataByMonth?.[monthKey] || {
                                        workingDays: calculateWorkingDays(user.workDays || 'mon-fri', selectedMonth, selectedYear),
                                        annualLeave: 0,
                                        sickLeave: 0,
                                        publicHolidays: 0,
                                        dailyRate: 0
                                    },
                                    [field]: numValue
                                }
                            }
                        };
                    } else if (section === 'project' && projectId) {
                        return {
                            ...user,
                            projectDataByMonth: {
                                ...user.projectDataByMonth,
                                [monthKey]: {
                                    ...user.projectDataByMonth?.[monthKey] || {},
                                    [projectId]: numValue
                                }
                            }
                        };
                    }
                }
                return user;
            });
            // Save to localStorage
            const userData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUserData"])();
            const updatedUserData = {
                ...userData,
                users: updatedUsers.map((user)=>({
                        ...user,
                        payrollDataByMonth: user.payrollDataByMonth,
                        fringeDataByMonth: user.fringeDataByMonth,
                        projectDataByMonth: user.projectDataByMonth
                    }))
            };
            // Save to localStorage using the same key as the main app
            const currentUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])();
            if (currentUser) {
                const storageKey = `sola-user-data-${currentUser}`;
                localStorage.setItem(storageKey, JSON.stringify(updatedUserData));
            }
            return updatedUsers;
        });
    };
    // Handle monthly allocation changes
    const handleMonthlyAllocationChange = (itemId, field, value)=>{
        // Prevent changes if locked
        if (isLocked) return;
        setMonthlyAllocation((prev)=>{
            const updated = prev.map((item)=>{
                if (item.id === itemId) {
                    return {
                        ...item,
                        [field]: value
                    };
                }
                return item;
            });
            // Save to localStorage
            const monthKey = `${selectedYear}-${selectedMonth}`;
            const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])();
            if (user) {
                localStorage.setItem(`sola-monthly-allocation-${user}-${monthKey}`, JSON.stringify(updated));
            }
            return updated;
        });
    };
    // Helper to check if user has ended by a given month
    const isUserEndedInMonth = (user, month, year)=>{
        if (!user?.endDate) return false;
        const end = new Date(user.endDate);
        if (Number.isNaN(end.getTime())) return false;
        const endMonth = end.getMonth() // 0-11
        ;
        const endYear = end.getFullYear();
        // User has ended if selected month/year is after their end date
        return year > endYear || year === endYear && month > endMonth;
    };
    // Helper to check if user has started by a given month
    const isUserStartedInMonth = (user, month, year)=>{
        if (!user?.startDate) return true // No start date means they've always been active
        ;
        const start = new Date(user.startDate);
        if (Number.isNaN(start.getTime())) return true;
        const startMonth = start.getMonth() // 0-11
        ;
        const startYear = start.getFullYear();
        // User has started if selected month/year is on or after their start date
        return year > startYear || year === startYear && month >= startMonth;
    };
    // Helper to check if user is active in selected month
    const isUserActiveInSelectedMonth = (user)=>{
        return isUserStartedInMonth(user, selectedMonth, selectedYear) && !isUserEndedInMonth(user, selectedMonth, selectedYear);
    };
    // Group users by entity (only include users active in selected month)
    const groupedByEntity = users.filter((user)=>isUserActiveInSelectedMonth(user)).reduce((acc, user)=>{
        const entity = user.entity || "Unassigned";
        if (!acc[entity]) {
            acc[entity] = [];
        }
        acc[entity].push(user);
        return acc;
    }, {});
    const activeProjects = getActiveProjects();
    // Function to automatically populate project task based on staff allocation
    const getProjectTaskFromAllocation = (itemName, projectName, monthKey)=>{
        // Find the user for this allocation item
        const user = users.find((u)=>u.name === itemName);
        if (!user) return '';
        // Get the global month index for the selected month/year
        const globalMonthIndex = (selectedYear - 2024) * 12 + selectedMonth;
        // Find allocations for this user, project, and month
        const userAllocations = allocations.filter((a)=>a.userId === user.id && a.projectId === projects.find((p)=>p.name === projectName)?.id && a.monthIndex === globalMonthIndex);
        if (userAllocations.length === 0) return '';
        // Get the position name from the allocation
        const positionName = userAllocations[0].positionName;
        if (!positionName) return '';
        // Find the project and its positions for this month
        const project = projects.find((p)=>p.name === projectName);
        if (!project || !project.positions) return '';
        // Find the position for this month and get its projectTask
        const position = project.positions.find((p)=>p.name === positionName && p.monthIndex === globalMonthIndex);
        return position?.projectTask || '';
    };
    // Filter monthly allocation rows based on main table amounts and update currency and auto-calculate amounts
    const filteredMonthlyAllocation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ActualAllocationPage.useMemo[filteredMonthlyAllocation]": ()=>{
            const existingAllocationRows = monthlyAllocation.flatMap({
                "ActualAllocationPage.useMemo[filteredMonthlyAllocation].existingAllocationRows": (item)=>{
                    const user = users.find({
                        "ActualAllocationPage.useMemo[filteredMonthlyAllocation].existingAllocationRows.user": (u)=>u.id === item.name || u.name === item.name
                    }["ActualAllocationPage.useMemo[filteredMonthlyAllocation].existingAllocationRows.user"]);
                    if (!user) return [];
                    const monthKey = `${selectedYear}-${selectedMonth}`;
                    const payrollData = user.payrollDataByMonth?.[monthKey];
                    const fringeData = user.fringeDataByMonth?.[monthKey];
                    const projectData = user.projectDataByMonth?.[monthKey] || {};
                    // Calculate total project hours for percentage calculation
                    const totalProjectHours = activeProjects.reduce({
                        "ActualAllocationPage.useMemo[filteredMonthlyAllocation].existingAllocationRows.totalProjectHours": (total, project)=>total + (projectData[project.id] || 0)
                    }["ActualAllocationPage.useMemo[filteredMonthlyAllocation].existingAllocationRows.totalProjectHours"], 0);
                    // Calculate amount based on account type
                    let calculatedAmount = 0;
                    const dailyRate = payrollData?.netSalary && fringeData?.workingDays ? payrollData.netSalary / fringeData.workingDays : 0;
                    const leaveDeduction = ((fringeData?.annualLeave || 0) + (fringeData?.sickLeave || 0) + (fringeData?.publicHolidays || 0)) * dailyRate;
                    const netSalaryForProjects = (payrollData?.netSalary || 0) - leaveDeduction;
                    const fringeBenefitAmount = leaveDeduction;
                    // Get base amount for this account type
                    let baseAmount = 0;
                    switch(item.account){
                        case 'Net Salary [631 0001]':
                            baseAmount = netSalaryForProjects;
                            break;
                        case 'Social Security [635 1001]':
                            baseAmount = payrollData?.socialSecurity || 0;
                            break;
                        case 'Employee Tax [620 1005]':
                            baseAmount = payrollData?.employeeTax || 0;
                            break;
                        case 'Employer Tax [620 1005]':
                            baseAmount = payrollData?.employerTax || 0;
                            break;
                        case 'Housing [635 4001]':
                            baseAmount = payrollData?.housing || 0;
                            break;
                        case 'Other Benefits [602 4001]':
                            baseAmount = payrollData?.otherBenefits || 0;
                            break;
                        case 'Fringe Benefit - Leave [631 0001]':
                            baseAmount = fringeBenefitAmount;
                            break;
                        default:
                            baseAmount = 0;
                    }
                    // Create rows for each project that has allocated hours
                    const projectRows = [];
                    if (totalProjectHours > 0 && baseAmount > 0) {
                        activeProjects.forEach({
                            "ActualAllocationPage.useMemo[filteredMonthlyAllocation].existingAllocationRows": (project)=>{
                                const projectHours = projectData[project.id] || 0;
                                if (projectHours > 0) {
                                    const projectPercentage = projectHours / totalProjectHours * 100;
                                    const calculatedAmount = baseAmount * projectPercentage / 100;
                                    projectRows.push({
                                        ...item,
                                        id: `${item.id}-${project.id}`,
                                        currency: payrollData?.currency || 'USD',
                                        amount: parseFloat(calculatedAmount.toFixed(2)),
                                        project: project.name,
                                        projectTask: getProjectTaskFromAllocation(item.name, project.name, monthKey)
                                    });
                                }
                            }
                        }["ActualAllocationPage.useMemo[filteredMonthlyAllocation].existingAllocationRows"]);
                    }
                    return projectRows;
                }
            }["ActualAllocationPage.useMemo[filteredMonthlyAllocation].existingAllocationRows"]).filter({
                "ActualAllocationPage.useMemo[filteredMonthlyAllocation].existingAllocationRows": (item)=>{
                    const user = users.find({
                        "ActualAllocationPage.useMemo[filteredMonthlyAllocation].existingAllocationRows.user": (u)=>u.id === item.name || u.name === item.name
                    }["ActualAllocationPage.useMemo[filteredMonthlyAllocation].existingAllocationRows.user"]);
                    if (!user) return false;
                    const monthKey = `${selectedYear}-${selectedMonth}`;
                    const payrollData = user.payrollDataByMonth?.[monthKey];
                    // Check corresponding amount in main table based on account category
                    switch(item.account){
                        case 'Net Salary [631 0001]':
                            return payrollData?.netSalary && payrollData.netSalary > 0;
                        case 'Social Security [635 1001]':
                            return payrollData?.socialSecurity && payrollData.socialSecurity > 0;
                        case 'Employee Tax [620 1005]':
                            return payrollData?.employeeTax && payrollData.employeeTax > 0;
                        case 'Employer Tax [620 1005]':
                            return payrollData?.employerTax && payrollData.employerTax > 0;
                        case 'Housing [635 4001]':
                            return payrollData?.housing && payrollData.housing > 0;
                        case 'Other Benefits [602 4001]':
                            return payrollData?.otherBenefits && payrollData.otherBenefits > 0;
                        case 'Fringe Benefit - Leave [631 0001]':
                            // For fringe benefit, check if any leave data exists
                            const fringeData = user.fringeDataByMonth?.[monthKey];
                            return fringeData?.annualLeave && fringeData.annualLeave > 0 || fringeData?.sickLeave && fringeData.sickLeave > 0 || fringeData?.publicHolidays && fringeData.publicHolidays > 0;
                        default:
                            return true;
                    }
                }
            }["ActualAllocationPage.useMemo[filteredMonthlyAllocation].existingAllocationRows"]);
            // Add payroll allocation rows for each active user
            const payrollRows = [];
            users.filter({
                "ActualAllocationPage.useMemo[filteredMonthlyAllocation]": (user)=>isUserActiveInSelectedMonth(user)
            }["ActualAllocationPage.useMemo[filteredMonthlyAllocation]"]).forEach({
                "ActualAllocationPage.useMemo[filteredMonthlyAllocation]": (user)=>{
                    const monthKey = `${selectedYear}-${selectedMonth}`;
                    const payrollData = user.payrollDataByMonth?.[monthKey];
                    if (payrollData) {
                        const netSalary = payrollData?.netSalary || 0;
                        const housing = payrollData?.housing || 0;
                        const otherBenefits = payrollData?.otherBenefits || 0;
                        const totalAmount = (netSalary + housing + otherBenefits) * -1;
                        payrollRows.push({
                            id: `payroll-${user.id}-${monthKey}`,
                            name: user.name,
                            code: user.vendorAC || '',
                            description: `${user.name} ${MONTHS[selectedMonth]} ${selectedYear} Payroll`,
                            currency: payrollData?.currency || 'USD',
                            amount: parseFloat(totalAmount.toFixed(2)),
                            project: '',
                            projectTask: '',
                            account: user.vendorAC ? `${user.name} [${user.vendorAC}]` : user.name
                        });
                    }
                }
            }["ActualAllocationPage.useMemo[filteredMonthlyAllocation]"]);
            // Add entity payroll tax rows for each entity
            const entityTaxRows = [];
            const entitySocialSecurityRows = [];
            Object.entries(groupedByEntity).forEach({
                "ActualAllocationPage.useMemo[filteredMonthlyAllocation]": ([entity, entityUsers])=>{
                    const monthKey = `${selectedYear}-${selectedMonth}`;
                    // Find the entity configuration to get account codes
                    const entityConfig = entities.find({
                        "ActualAllocationPage.useMemo[filteredMonthlyAllocation].entityConfig": (e)=>e.name === entity
                    }["ActualAllocationPage.useMemo[filteredMonthlyAllocation].entityConfig"]);
                    const taxAccountCode = entityConfig?.taxAccount || '';
                    const ssAccountCode = entityConfig?.ssAccount || '';
                    // Calculate totals for this entity
                    let totalEmployeeTax = 0;
                    let totalEmployerTax = 0;
                    let totalSocialSecurity = 0;
                    let entityCurrency = 'USD' // Default currency
                    ;
                    entityUsers.forEach({
                        "ActualAllocationPage.useMemo[filteredMonthlyAllocation]": (user)=>{
                            const payrollData = user.payrollDataByMonth?.[monthKey];
                            if (payrollData) {
                                totalEmployeeTax += payrollData?.employeeTax || 0;
                                totalEmployerTax += payrollData?.employerTax || 0;
                                totalSocialSecurity += payrollData?.socialSecurity || 0;
                                // Use the currency of the first user with payroll data
                                if (!entityCurrency || entityCurrency === 'USD') {
                                    entityCurrency = payrollData?.currency || 'USD';
                                }
                            }
                        }
                    }["ActualAllocationPage.useMemo[filteredMonthlyAllocation]"]);
                    // Add entity payroll tax row
                    const totalTaxAmount = (totalEmployeeTax + totalEmployerTax) * -1;
                    if (totalEmployeeTax > 0 || totalEmployerTax > 0) {
                        entityTaxRows.push({
                            id: `entity-tax-${entity}-${monthKey}`,
                            name: entity,
                            code: taxAccountCode,
                            description: `${entity} Payroll Tax ${MONTHS[selectedMonth]} ${selectedYear}`,
                            currency: entityCurrency,
                            amount: parseFloat(totalTaxAmount.toFixed(2)),
                            project: '',
                            projectTask: '',
                            account: taxAccountCode ? `${entity} Payroll Tax [${taxAccountCode}]` : entity
                        });
                    }
                    // Add entity social security row
                    const socialSecurityAmount = totalSocialSecurity * -1;
                    if (totalSocialSecurity > 0) {
                        entitySocialSecurityRows.push({
                            id: `entity-ss-${entity}-${monthKey}`,
                            name: entity,
                            code: ssAccountCode,
                            description: `${entity} Social Security ${MONTHS[selectedMonth]} ${selectedYear}`,
                            currency: entityCurrency,
                            amount: parseFloat(socialSecurityAmount.toFixed(2)),
                            project: '',
                            projectTask: '',
                            account: ssAccountCode ? `${entity} Social Security [${ssAccountCode}]` : entity
                        });
                    }
                }
            }["ActualAllocationPage.useMemo[filteredMonthlyAllocation]"]);
            return [
                ...existingAllocationRows,
                ...payrollRows,
                ...entityTaxRows,
                ...entitySocialSecurityRows
            ];
        }
    }["ActualAllocationPage.useMemo[filteredMonthlyAllocation]"], [
        monthlyAllocation,
        users,
        selectedMonth,
        selectedYear,
        activeProjects,
        isUserActiveInSelectedMonth,
        allocations,
        projects
    ]);
    const getContrastColor = (hex)=>{
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 128 ? "#000" : "#fff";
    };
    // Export functions
    const exportToExcel = (data, filename)=>{
        const worksheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xlsx$40$0$2e$18$2e$5$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(data);
        const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xlsx$40$0$2e$18$2e$5$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_new();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xlsx$40$0$2e$18$2e$5$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(workbook, worksheet, 'Sheet1');
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xlsx$40$0$2e$18$2e$5$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeFile"](workbook, `${filename}.xlsx`);
    };
    const exportMainTable = ()=>{
        const exportData = users.map((user)=>{
            const monthKey = `${selectedYear}-${selectedMonth}`;
            const payrollData = user.payrollDataByMonth?.[monthKey];
            const fringeData = user.fringeDataByMonth?.[monthKey];
            const projectData = user.projectDataByMonth?.[monthKey] || {};
            const row = {
                Name: user.name,
                Department: user.department,
                Entity: user.entity || '',
                Currency: payrollData?.currency || 'USD',
                'Net Salary': payrollData?.netSalary || 0,
                'Social Security': payrollData?.socialSecurity || 0,
                'Employee Tax': payrollData?.employeeTax || 0,
                'Employer Tax': payrollData?.employerTax || 0,
                'Housing': payrollData?.housing || 0,
                'Other Benefits': payrollData?.otherBenefits || 0,
                'Annual Leave': fringeData?.annualLeave || 0,
                'Sick Leave': fringeData?.sickLeave || 0,
                'Public Holidays': fringeData?.publicHolidays || 0,
                'Working Days': fringeData?.workingDays || 0,
                'Daily Rate': payrollData?.netSalary && fringeData?.workingDays ? (payrollData.netSalary / fringeData.workingDays).toFixed(2) : '0.00'
            };
            // Add project columns - respect showPercentage state
            activeProjects.forEach((project)=>{
                if (showPercentage) {
                    // Calculate percentage for export
                    const totalProjectHours = activeProjects.reduce((total, p)=>total + (projectData[p.id] || 0), 0);
                    const projectHours = projectData[project.id] || 0;
                    const percentage = totalProjectHours > 0 ? (projectHours / totalProjectHours * 100).toFixed(1) : '0.0';
                    row[project.name] = `${percentage}%`;
                } else {
                    // Export raw values
                    row[project.name] = projectData[project.id] || 0;
                }
            });
            return row;
        });
        exportToExcel(exportData, `Actual_Allocation_${MONTHS[selectedMonth]}_${selectedYear}_${showPercentage ? 'Percentage' : 'Values'}`);
    };
    const exportMonthlyTable = ()=>{
        const exportData = filteredMonthlyAllocation.map((item)=>{
            // Split account into name and code
            const accountName = item.account.split(' [')[0];
            const accountCode = item.account.includes(' [') ? item.account.split(' [')[1].replace(']', '') : '';
            // Find the user associated with this allocation item for percentage calculation
            const user = users.find((u)=>u.name === item.name);
            let exportValue = item.amount;
            // If percentage view is active and this is a user allocation (not payroll/tax/ss rows), calculate percentage
            if (showPercentage && user && item.project) {
                const monthKey = `${selectedYear}-${selectedMonth}`;
                const projectData = user.projectDataByMonth?.[monthKey] || {};
                const totalProjectHours = activeProjects.reduce((total, p)=>total + (projectData[p.id] || 0), 0);
                const projectHours = projectData[item.project] || 0;
                const percentage = totalProjectHours > 0 ? (projectHours / totalProjectHours * 100).toFixed(1) : '0.0';
                exportValue = parseFloat(percentage); // Export the percentage value
            }
            return {
                'Account Name': accountName,
                'Account Code': accountCode,
                Description: item.description,
                Currency: item.currency,
                'Amount/Percentage': showPercentage && user && item.project ? `${exportValue}%` : exportValue,
                Project: item.project,
                'Project Task': item.projectTask
            };
        });
        exportToExcel(exportData, `Monthly_Allocation_${MONTHS[selectedMonth]}_${selectedYear}_${showPercentage ? 'Percentage' : 'Values'}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navigation"], {
                currentPage: "/actual-allocation"
            }, void 0, false, {
                fileName: "[project]/app/actual-allocation/page.tsx",
                lineNumber: 803,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 p-6"
            }, void 0, false, {
                fileName: "[project]/app/actual-allocation/page.tsx",
                lineNumber: 804,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold text-gray-800",
                        children: "Payroll Allocation"
                    }, void 0, false, {
                        fileName: "[project]/app/actual-allocation/page.tsx",
                        lineNumber: 808,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: selectedMonth,
                                        onChange: (e)=>updateMonthYear(Number(e.target.value), selectedYear),
                                        className: "border border-gray-300 rounded px-2 py-1 text-sm",
                                        children: MONTHS.map((month, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: idx,
                                                children: month
                                            }, idx, false, {
                                                fileName: "[project]/app/actual-allocation/page.tsx",
                                                lineNumber: 818,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                        lineNumber: 812,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: selectedYear,
                                        onChange: (e)=>updateMonthYear(selectedMonth, Number(e.target.value)),
                                        className: "border border-gray-300 rounded px-2 py-1 text-sm",
                                        children: [
                                            2023,
                                            2024,
                                            2025,
                                            2026,
                                            2027
                                        ].map((year)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: year,
                                                children: year
                                            }, year, false, {
                                                fileName: "[project]/app/actual-allocation/page.tsx",
                                                lineNumber: 827,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                        lineNumber: 821,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/actual-allocation/page.tsx",
                                lineNumber: 811,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 items-center",
                                children: [
                                    isClient && isAdmin() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: toggleLock,
                                        variant: isLocked ? "destructive" : "outline",
                                        size: "sm",
                                        className: "font-medium",
                                        children: isLocked ? "🔒 Locked" : "🔓 Lock"
                                    }, void 0, false, {
                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                        lineNumber: 835,
                                        columnNumber: 15
                                    }, this),
                                    isClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>setShowPercentage(!showPercentage),
                                        variant: showPercentage ? "default" : "outline",
                                        size: "sm",
                                        className: "font-medium",
                                        children: showPercentage ? "🔢 Values" : "📊 % View"
                                    }, void 0, false, {
                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                        lineNumber: 845,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: exportMainTable,
                                        variant: "outline",
                                        size: "sm",
                                        className: "font-medium",
                                        children: "📊 Export"
                                    }, void 0, false, {
                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                        lineNumber: 854,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>{
                                            const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])();
                                            if (user) {
                                                clearCurrentUser();
                                                window.location.href = "/login";
                                            }
                                        },
                                        variant: "outline",
                                        size: "sm",
                                        children: "Logout"
                                    }, void 0, false, {
                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                        lineNumber: 862,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/actual-allocation/page.tsx",
                                lineNumber: 833,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/actual-allocation/page.tsx",
                        lineNumber: 809,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/actual-allocation/page.tsx",
                lineNumber: 807,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full border-collapse border border-gray-300 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-100 w-32",
                                            children: "Name"
                                        }, void 0, false, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 883,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-100 w-32",
                                            children: "Department"
                                        }, void 0, false, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 884,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-100 text-center",
                                            colSpan: 7,
                                            children: "Payroll"
                                        }, void 0, false, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 885,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-100 text-center",
                                            colSpan: 5,
                                            children: "Fringe"
                                        }, void 0, false, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 886,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-100 text-center",
                                            colSpan: activeProjects.length + 1,
                                            children: "Projects"
                                        }, void 0, false, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 887,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                    lineNumber: 882,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-50 w-32 text-xs text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 890,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-50 w-32 text-xs text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 891,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                            children: "Currency"
                                        }, void 0, false, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 893,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                            children: [
                                                "Net Salary ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '10px',
                                                        opacity: 0.7
                                                    },
                                                    children: "[631 0001]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 894,
                                                    columnNumber: 110
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 894,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                            children: [
                                                "Social Security ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '10px',
                                                        opacity: 0.7
                                                    },
                                                    children: "[635 1001]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 895,
                                                    columnNumber: 115
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 895,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                            children: [
                                                "Employee Tax ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '10px',
                                                        opacity: 0.7
                                                    },
                                                    children: "[620 1005]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 896,
                                                    columnNumber: 112
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 896,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                            children: [
                                                "Employer Tax ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '10px',
                                                        opacity: 0.7
                                                    },
                                                    children: "[620 1005]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 897,
                                                    columnNumber: 112
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 897,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                            children: [
                                                "Housing ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '10px',
                                                        opacity: 0.7
                                                    },
                                                    children: "[635 4001]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 898,
                                                    columnNumber: 107
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 898,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                            children: [
                                                "Other Benefits ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '10px',
                                                        opacity: 0.7
                                                    },
                                                    children: "[602 4001]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 899,
                                                    columnNumber: 114
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 899,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                            children: "Working Days"
                                        }, void 0, false, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 901,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                            children: "Annual Leave"
                                        }, void 0, false, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 902,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                            children: "Sick Leave"
                                        }, void 0, false, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 903,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                            children: "Public Holidays"
                                        }, void 0, false, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 904,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                            children: "Daily Rate"
                                        }, void 0, false, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 905,
                                            columnNumber: 15
                                        }, this),
                                        activeProjects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                                style: {
                                                    backgroundColor: project.color + '20',
                                                    color: '#000'
                                                },
                                                children: project.name
                                            }, project.id, false, {
                                                fileName: "[project]/app/actual-allocation/page.tsx",
                                                lineNumber: 908,
                                                columnNumber: 17
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                            children: "Total"
                                        }, void 0, false, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 912,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                    lineNumber: 889,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/actual-allocation/page.tsx",
                            lineNumber: 881,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: Object.entries(groupedByEntity).map(([entity, entityUsers])=>{
                                // Calculate total payroll amounts for this entity
                                const monthKey = `${selectedYear}-${selectedMonth}`;
                                const entityTotals = entityUsers.reduce((totals, user)=>{
                                    const payrollData = user.payrollDataByMonth?.[monthKey];
                                    if (payrollData) {
                                        totals.netSalary += payrollData.netSalary || 0;
                                        totals.socialSecurity += payrollData.socialSecurity || 0;
                                        totals.employeeTax += payrollData.employeeTax || 0;
                                        totals.employerTax += payrollData.employerTax || 0;
                                        totals.housing += payrollData.housing || 0;
                                        totals.otherBenefits += payrollData.otherBenefits || 0;
                                    }
                                    return totals;
                                }, {
                                    netSalary: 0,
                                    socialSecurity: 0,
                                    employeeTax: 0,
                                    employerTax: 0,
                                    housing: 0,
                                    otherBenefits: 0
                                });
                                const grandTotal = entityTotals.netSalary + entityTotals.socialSecurity + entityTotals.employeeTax + entityTotals.employerTax + entityTotals.housing + entityTotals.otherBenefits;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-1 font-semibold text-xs text-gray-800 bg-cyan-200",
                                                    children: entity
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 945,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-1 font-semibold text-xs text-gray-800 bg-cyan-200 text-right",
                                                    children: [
                                                        "(",
                                                        grandTotal.toFixed(2),
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 948,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-1 bg-cyan-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 951,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-1 bg-cyan-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 952,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-1 bg-cyan-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 953,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-1 bg-cyan-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 954,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-1 bg-cyan-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 955,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-1 bg-cyan-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 956,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-1 bg-cyan-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 957,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-1 bg-cyan-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 958,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-1 bg-cyan-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 959,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-1 bg-cyan-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 960,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-1 bg-cyan-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 961,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-1 bg-cyan-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 962,
                                                    columnNumber: 19
                                                }, this),
                                                activeProjects.map((project)=>{
                                                    // Calculate average percentage for this entity and project across ALL users
                                                    const userPercentages = entityUsers.map((user)=>{
                                                        const projectData = user.projectDataByMonth?.[monthKey] || {};
                                                        const totalHours = activeProjects.reduce((total, p)=>total + (projectData[p.id] || 0), 0);
                                                        const projectHours = projectData[project.id] || 0;
                                                        return totalHours > 0 ? projectHours / totalHours * 100 : 0;
                                                    });
                                                    const avgPercentage = userPercentages.length > 0 ? userPercentages.reduce((sum, percentage)=>sum + percentage, 0) / userPercentages.length : 0;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 p-1 bg-cyan-200",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full text-xs text-center font-medium",
                                                            children: showPercentage && avgPercentage > 0 ? avgPercentage.toFixed(1) + '%' : ''
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 979,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, project.id, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 978,
                                                        columnNumber: 23
                                                    }, this);
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-1 bg-cyan-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 985,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 944,
                                            columnNumber: 17
                                        }, this),
                                        entityUsers.map((user)=>{
                                            const monthKey = `${selectedYear}-${selectedMonth}`;
                                            const payrollData = user.payrollDataByMonth?.[monthKey];
                                            const fringeData = user.fringeDataByMonth?.[monthKey];
                                            const projectData = user.projectDataByMonth?.[monthKey] || {};
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 p-0.5 w-32",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs leading-tight",
                                                            children: user.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 996,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 995,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 p-0.5 w-32",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs leading-tight text-gray-600",
                                                            children: user.department
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 999,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 998,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 p-0.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: payrollData?.currency || "",
                                                            onChange: (e)=>handleCellValueChange(user.id, "currency", e.target.value, "payroll"),
                                                            className: "w-full text-xs text-center border-0 bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 rounded",
                                                            placeholder: "USD",
                                                            disabled: isLocked,
                                                            style: {
                                                                backgroundColor: isLocked ? '#f3f4f6' : 'transparent'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 1003,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 1002,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 p-0.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: payrollData?.netSalary || "",
                                                            onChange: (e)=>handleCellValueChange(user.id, "netSalary", e.target.value, "payroll"),
                                                            className: "w-full text-xs text-right border-0 bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 rounded",
                                                            placeholder: "0",
                                                            disabled: isLocked,
                                                            style: {
                                                                backgroundColor: isLocked ? '#f3f4f6' : 'transparent'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 1014,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 1013,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 p-0.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: payrollData?.socialSecurity || "",
                                                            onChange: (e)=>handleCellValueChange(user.id, "socialSecurity", e.target.value, "payroll"),
                                                            className: "w-full text-xs text-right border-0 bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 rounded",
                                                            placeholder: "0",
                                                            disabled: isLocked,
                                                            style: {
                                                                backgroundColor: isLocked ? '#f3f4f6' : 'transparent'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 1025,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 1024,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 p-0.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: payrollData?.employeeTax || "",
                                                            onChange: (e)=>handleCellValueChange(user.id, "employeeTax", e.target.value, "payroll"),
                                                            className: "w-full text-xs text-right border-0 bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 rounded",
                                                            placeholder: "0",
                                                            disabled: isLocked,
                                                            style: {
                                                                backgroundColor: isLocked ? '#f3f4f6' : 'transparent'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 1036,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 1035,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 p-0.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: payrollData?.employerTax || "",
                                                            onChange: (e)=>handleCellValueChange(user.id, "employerTax", e.target.value, "payroll"),
                                                            className: "w-full text-xs text-right border-0 bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 rounded",
                                                            placeholder: "0",
                                                            disabled: isLocked,
                                                            style: {
                                                                backgroundColor: isLocked ? '#f3f4f6' : 'transparent'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 1047,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 1046,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 p-0.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: payrollData?.housing || "",
                                                            onChange: (e)=>handleCellValueChange(user.id, "housing", e.target.value, "payroll"),
                                                            className: "w-full text-xs text-right border-0 bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 rounded",
                                                            placeholder: "0",
                                                            disabled: isLocked,
                                                            style: {
                                                                backgroundColor: isLocked ? '#f3f4f6' : 'transparent'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 1058,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 1057,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 p-0.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: payrollData?.otherBenefits || "",
                                                            onChange: (e)=>handleCellValueChange(user.id, "otherBenefits", e.target.value, "payroll"),
                                                            className: "w-full text-xs text-right border-0 bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 rounded",
                                                            placeholder: "0",
                                                            disabled: isLocked,
                                                            style: {
                                                                backgroundColor: isLocked ? '#f3f4f6' : 'transparent'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 1069,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 1068,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 p-0.5 bg-gray-50",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full text-xs text-center font-medium",
                                                            children: fringeData?.workingDays || 0
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 1081,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 1080,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 p-0.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: fringeData?.annualLeave || "",
                                                            onChange: (e)=>handleCellValueChange(user.id, "annualLeave", e.target.value, "fringe"),
                                                            className: "w-full text-xs text-center border-0 bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 rounded",
                                                            placeholder: "0",
                                                            disabled: isLocked,
                                                            style: {
                                                                backgroundColor: isLocked ? '#f3f4f6' : 'transparent'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 1086,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 1085,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 p-0.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: fringeData?.sickLeave || "",
                                                            onChange: (e)=>handleCellValueChange(user.id, "sickLeave", e.target.value, "fringe"),
                                                            className: "w-full text-xs text-center border-0 bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 rounded",
                                                            placeholder: "0",
                                                            disabled: isLocked,
                                                            style: {
                                                                backgroundColor: isLocked ? '#f3f4f6' : 'transparent'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 1097,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 1096,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 p-0.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: fringeData?.publicHolidays || "",
                                                            onChange: (e)=>handleCellValueChange(user.id, "publicHolidays", e.target.value, "fringe"),
                                                            className: "w-full text-xs text-center border-0 bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 rounded",
                                                            placeholder: "0",
                                                            disabled: isLocked,
                                                            style: {
                                                                backgroundColor: isLocked ? '#f3f4f6' : 'transparent'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 1108,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 1107,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 p-0.5 bg-gray-50",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full text-xs text-right font-medium",
                                                            children: payrollData?.netSalary && fringeData?.workingDays ? (payrollData.netSalary / fringeData.workingDays).toFixed(2) : "0.00"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 1119,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 1118,
                                                        columnNumber: 21
                                                    }, this),
                                                    activeProjects.map((project)=>{
                                                        const totalProjectHours = activeProjects.reduce((total, p)=>total + (projectData[p.id] || 0), 0);
                                                        const projectHours = projectData[project.id] || 0;
                                                        const percentage = totalProjectHours > 0 ? (projectHours / totalProjectHours * 100).toFixed(1) : '0.0';
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-gray-300 p-0.5",
                                                            style: {
                                                                backgroundColor: project.color + '10'
                                                            },
                                                            children: showPercentage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-full text-xs text-center",
                                                                style: {
                                                                    backgroundColor: isLocked ? '#f3f4f6' : '#f9fafb'
                                                                },
                                                                children: [
                                                                    percentage,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/actual-allocation/page.tsx",
                                                                lineNumber: 1135,
                                                                columnNumber: 29
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                value: projectData[project.id] || "",
                                                                onChange: (e)=>handleCellValueChange(user.id, project.id, e.target.value, "project", project.id),
                                                                className: "w-full text-xs text-center border-0 bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 rounded",
                                                                placeholder: "0",
                                                                min: "0",
                                                                max: "100",
                                                                disabled: isLocked,
                                                                style: {
                                                                    backgroundColor: isLocked ? '#f3f4f6' : 'transparent'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/actual-allocation/page.tsx",
                                                                lineNumber: 1139,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, project.id, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 1133,
                                                            columnNumber: 25
                                                        }, this);
                                                    }),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 p-0.5 bg-gray-50",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full text-xs text-right font-medium",
                                                            children: showPercentage ? "100%" : activeProjects.reduce((total, project)=>total + (projectData[project.id] || 0), 0)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 1155,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 1154,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, user.id, true, {
                                                fileName: "[project]/app/actual-allocation/page.tsx",
                                                lineNumber: 994,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    ]
                                }, entity, true, {
                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                    lineNumber: 943,
                                    columnNumber: 15
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/actual-allocation/page.tsx",
                            lineNumber: 915,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/actual-allocation/page.tsx",
                    lineNumber: 880,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/actual-allocation/page.tsx",
                lineNumber: 879,
                columnNumber: 7
            }, this),
            users.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-8 text-gray-500",
                children: "No staff data available. Please add staff members first."
            }, void 0, false, {
                fileName: "[project]/app/actual-allocation/page.tsx",
                lineNumber: 1173,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold text-gray-800",
                                children: "Monthly Allocation"
                            }, void 0, false, {
                                fileName: "[project]/app/actual-allocation/page.tsx",
                                lineNumber: 1181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: exportMonthlyTable,
                                variant: "outline",
                                size: "sm",
                                className: "font-medium",
                                children: "📊 Export to Excel"
                            }, void 0, false, {
                                fileName: "[project]/app/actual-allocation/page.tsx",
                                lineNumber: 1182,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/actual-allocation/page.tsx",
                        lineNumber: 1180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full border-collapse border border-gray-300 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-gray-300 p-1 bg-gray-100 text-center",
                                                colSpan: 7,
                                                children: "Monthly Allocation"
                                            }, void 0, false, {
                                                fileName: "[project]/app/actual-allocation/page.tsx",
                                                lineNumber: 1195,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 1194,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                                    children: "Account Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 1198,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                                    children: "Account Code"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 1199,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                                    children: "Description"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 1200,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                                    children: "Currency"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 1201,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                                    children: "Amount"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 1202,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                                    children: "Project"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 1203,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                                    children: "Project Task"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 1204,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 1197,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                    lineNumber: 1193,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: filteredMonthlyAllocation.map((item)=>{
                                        // Split account into name and code
                                        const accountName = item.account.split(' [')[0];
                                        const accountCode = item.account.includes(' [') ? item.account.split(' [')[1].replace(']', '') : '';
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-0.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs leading-tight",
                                                        children: accountName
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 1216,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 1215,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-0.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs leading-tight",
                                                        children: accountCode
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 1221,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 1220,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-0.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full text-xs text-center",
                                                        style: {
                                                            backgroundColor: isLocked ? '#f3f4f6' : '#f9fafb'
                                                        },
                                                        children: item.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 1226,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 1225,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-0.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: item.currency,
                                                        onChange: (e)=>handleMonthlyAllocationChange(item.id, 'currency', e.target.value),
                                                        className: "w-full text-xs text-center border-0 bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 rounded",
                                                        placeholder: "USD",
                                                        disabled: isLocked,
                                                        style: {
                                                            backgroundColor: isLocked ? '#f3f4f6' : 'transparent'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 1231,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 1230,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-0.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full text-xs text-right",
                                                        style: {
                                                            backgroundColor: isLocked ? '#f3f4f6' : '#f9fafb'
                                                        },
                                                        children: item.amount.toFixed(2)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 1242,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 1241,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-0.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full text-xs text-center",
                                                        style: {
                                                            backgroundColor: isLocked ? '#f3f4f6' : '#f9fafb'
                                                        },
                                                        children: item.project
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 1247,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 1246,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-0.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: item.projectTask,
                                                        onChange: (e)=>handleMonthlyAllocationChange(item.id, 'projectTask', e.target.value),
                                                        className: "w-full text-xs text-center border-0 bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 rounded",
                                                        placeholder: "Enter task",
                                                        disabled: isLocked,
                                                        style: {
                                                            backgroundColor: isLocked ? '#f3f4f6' : 'transparent'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 1252,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 1251,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 1214,
                                            columnNumber: 17
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                    lineNumber: 1207,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/actual-allocation/page.tsx",
                            lineNumber: 1192,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/actual-allocation/page.tsx",
                        lineNumber: 1191,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/actual-allocation/page.tsx",
                lineNumber: 1179,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/actual-allocation/page.tsx",
        lineNumber: 802,
        columnNumber: 5
    }, this);
}
_s(ActualAllocationPage, "bxPXKDpYZFp5/hau/9xwvDiatB8=");
_c = ActualAllocationPage;
var _c;
__turbopack_context__.k.register(_c, "ActualAllocationPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_77e102ba._.js.map