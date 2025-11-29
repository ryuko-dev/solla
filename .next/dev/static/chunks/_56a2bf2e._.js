(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
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
"[project]/components/allocation-cell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AllocationCell",
    ()=>AllocationCell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function AllocationCell({ userId, monthIndex, allocations = [], onEdit, onSaveEdit, onRemove, onEmptyCellClick, projects = [], userEnded = false, readOnly = false }) {
    _s();
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editValue, setEditValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Calculate total allocated percentage for this cell
    const totalAllocated = allocations.reduce((sum, a)=>sum + (a.percentage || 0), 0);
    const freePercentage = Math.max(0, 100 - totalAllocated);
    // Determine border class based on allocation level
    const allocationBorderClass = totalAllocated === 100 ? "border-2 border-green-500" : totalAllocated > 100 ? "border-2 border-red-500" : "";
    const handleClick = ()=>{
        if (freePercentage > 0 && onEmptyCellClick) {
            onEmptyCellClick();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        "data-user-id": userId,
        "data-month": monthIndex,
        className: `w-32 border-r border-b border-border bg-background px-1 py-0.5 min-h-8 transition-colors relative ${userEnded || readOnly ? "cursor-not-allowed bg-gray-50" : freePercentage > 0 && onEmptyCellClick ? "cursor-pointer hover:bg-muted/50" : "hover:bg-muted/30"}`,
        onMouseEnter: ()=>!userEnded && !readOnly && freePercentage > 0 && setIsHovering(true),
        onMouseLeave: ()=>setIsHovering(false),
        onClick: userEnded || readOnly ? undefined : handleClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full gap-0.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center flex-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex w-full h-4 rounded overflow-hidden bg-gray-100 ${allocationBorderClass}`,
                        children: userEnded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full flex items-center justify-center text-[8px] font-semibold text-gray-500 bg-gray-200",
                            children: "ended"
                        }, void 0, false, {
                            fileName: "[project]/components/allocation-cell.tsx",
                            lineNumber: 73,
                            columnNumber: 15
                        }, this) : allocations.map((allocation)=>{
                            const project = projects.find((p)=>p.id === allocation.projectId);
                            console.log("[v0] AllocationCell rendering bar:", {
                                allocationId: allocation.id,
                                projectId: allocation.projectId,
                                projectColor: project?.color
                            });
                            // Keep total bar size constant: if allocations exceed 100%,
                            // normalize segments so they still fit into a 100% width bar.
                            const capacity = totalAllocated > 100 ? totalAllocated : 100;
                            const width = Math.max(0, Math.min(100, (allocation.percentage || 0) / capacity * 100));
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `h-full text-[8px] flex items-center justify-center font-semibold relative ${readOnly ? "" : "group cursor-pointer"} text-white`,
                                style: {
                                    backgroundColor: project?.color || "#999",
                                    width: `${width}%`,
                                    minWidth: width > 0 ? "8%" : undefined
                                },
                                onClick: (e)=>{
                                    if (readOnly) return;
                                    e.stopPropagation();
                                    onEdit?.(allocation.id);
                                },
                                title: `${project?.name ?? "Project"} - ${allocation.percentage || 0}%`,
                                children: [
                                    allocation.percentage || 0,
                                    "%",
                                    !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            onRemove?.(allocation.id);
                                        },
                                        className: "absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/components/allocation-cell.tsx",
                                        lineNumber: 112,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, allocation.id, true, {
                                fileName: "[project]/components/allocation-cell.tsx",
                                lineNumber: 93,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/allocation-cell.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/allocation-cell.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                !userEnded && !readOnly && isHovering && freePercentage > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex items-center justify-center bg-primary/10 rounded text-[9px] text-primary font-medium pointer-events-none",
                    children: "Click to select position"
                }, void 0, false, {
                    fileName: "[project]/components/allocation-cell.tsx",
                    lineNumber: 131,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/allocation-cell.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/allocation-cell.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(AllocationCell, "xqXBLhnKkwZr5xY4qQxtlyrsWmc=");
_c = AllocationCell;
var _c;
__turbopack_context__.k.register(_c, "AllocationCell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/project-manager.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectManager",
    ()=>ProjectManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ProjectManager({ projects, positions = [], months, startMonth = 0, startYear = 2024, onAddProject, onUpdateProject, onDeleteProject, onUpdatePositions }) {
    _s();
    const [showCreateModal, setShowCreateModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingProjectId, setEditingProjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [newProjectName, setNewProjectName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedColor, setSelectedColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#3B82F6");
    const [positionBudgets, setPositionBudgets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [projectStartMonth, setProjectStartMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [projectStartYear, setProjectStartYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2024);
    const [projectEndMonth, setProjectEndMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [projectEndYear, setProjectEndYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2024);
    const [monthTablePage, setMonthTablePage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
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
    const YEARS = Array.from({
        length: 10
    }, (_, i)=>2024 + i);
    const COLORS = [
        "#3B82F6",
        "#10B981",
        "#F59E0B",
        "#8B5CF6",
        "#EC4899",
        "#06B6D4",
        "#EF4444",
        "#14B8A6"
    ];
    const toGlobalMonthIndex = (month, year)=>{
        return (year - 2024) * 12 + month;
    };
    const fromGlobalMonthIndex = (globalIndex)=>{
        return {
            month: globalIndex % 12,
            year: 2024 + Math.floor(globalIndex / 12)
        };
    };
    const projectDurationMonths = (()=>{
        const startIdx = toGlobalMonthIndex(projectStartMonth, projectStartYear);
        const endIdx = toGlobalMonthIndex(projectEndMonth, projectEndYear);
        return Math.max(1, endIdx - startIdx + 1);
    })();
    const getDisplayMonths = ()=>{
        const startIdx = toGlobalMonthIndex(projectStartMonth, projectStartYear);
        const endIdx = toGlobalMonthIndex(projectEndMonth, projectEndYear);
        const pageStart = startIdx + monthTablePage * 12;
        const pageEnd = Math.min(pageStart + 12, endIdx + 1);
        const displayMonths = [];
        for(let i = pageStart; i < pageEnd; i++){
            const { month, year } = fromGlobalMonthIndex(i);
            displayMonths.push({
                month,
                year,
                displayName: `${MONTHS[month].slice(0, 3)} ${year.toString().slice(-2)}`,
                globalIndex: i
            });
        }
        return displayMonths;
    };
    const displayMonths = getDisplayMonths();
    const maxPages = Math.ceil(projectDurationMonths / 12);
    const handleCreateProject = ()=>{
        if (!newProjectName.trim()) return;
        const newProject = {
            id: `proj-${Date.now()}`,
            name: newProjectName,
            color: selectedColor,
            startMonth: projectStartMonth,
            startYear: projectStartYear,
            endMonth: projectEndMonth,
            endYear: projectEndYear
        };
        onAddProject(newProject);
        const newPositions = [];
        const startIdx = toGlobalMonthIndex(projectStartMonth, projectStartYear);
        const endIdx = toGlobalMonthIndex(projectEndMonth, projectEndYear);
        positionBudgets.forEach((positionBudget)=>{
            displayMonths.forEach((displayMonth, displayIdx)=>{
                const percentage = positionBudget.budgets[displayMonth.globalIndex] || 0;
                if (percentage > 0) {
                    newPositions.push({
                        id: `pos-${newProject.id}-${positionBudget.id}-${displayMonth.globalIndex}`,
                        projectId: newProject.id,
                        monthIndex: displayMonth.globalIndex,
                        percentage,
                        allocated: 0,
                        name: positionBudget.name
                    });
                }
            });
        });
        if (newPositions.length > 0) {
            onUpdatePositions([
                ...positions,
                ...newPositions
            ]);
        }
        setNewProjectName("");
        setSelectedColor("#3B82F6");
        setPositionBudgets([]);
        setProjectStartMonth(0);
        setProjectStartYear(2024);
        setProjectEndMonth(0);
        setProjectEndYear(2024);
        setMonthTablePage(0);
        setShowCreateModal(false);
    };
    const handleEditProject = (projectId)=>{
        setEditingProjectId(projectId);
        const project = projects.find((p)=>p.id === projectId);
        if (project) {
            setNewProjectName(project.name);
            setSelectedColor(project.color);
            setProjectStartMonth(project.startMonth ?? 0);
            setProjectStartYear(project.startYear ?? 2024);
            setProjectEndMonth(project.endMonth ?? 0);
            setProjectEndYear(project.endYear ?? 2024);
            setMonthTablePage(0);
            const projectPositions = positions.filter((p)=>p.projectId === projectId);
            const positionMap = new Map();
            projectPositions.forEach((p)=>{
                const name = p.name || "Unnamed Position";
                if (!positionMap.has(name)) {
                    positionMap.set(name, {
                        id: `${name}-${Date.now()}`,
                        name,
                        budgets: {}
                    });
                }
                const pos = positionMap.get(name);
                pos.budgets[p.monthIndex] = p.percentage;
            });
            setPositionBudgets(Array.from(positionMap.values()));
        }
    };
    const handleSaveEditProject = ()=>{
        if (!editingProjectId || !newProjectName.trim()) return;
        const projectId = editingProjectId // Store before clearing state
        ;
        console.log("[v0] Saving project with dates:", {
            projectId,
            startMonth: projectStartMonth,
            startYear: projectStartYear,
            endMonth: projectEndMonth,
            endYear: projectEndYear
        });
        console.log("[v0] Saving project with color:", {
            projectId,
            selectedColor
        });
        console.log("[v0] About to call onUpdateProject with:", {
            projectId,
            name: newProjectName,
            color: selectedColor,
            startMonth: projectStartMonth,
            startYear: projectStartYear,
            endMonth: projectEndMonth,
            endYear: projectEndYear
        });
        // Update positions BEFORE updating the project to avoid triggering another project update
        const existingPositions = positions.filter((p)=>p.projectId === projectId);
        const newPositions = [];
        positionBudgets.forEach((positionBudget)=>{
            displayMonths.forEach((displayMonth)=>{
                const percentage = positionBudget.budgets[displayMonth.globalIndex] || 0;
                if (percentage > 0) {
                    const existingPos = existingPositions.find((p)=>p.monthIndex === displayMonth.globalIndex && p.name === positionBudget.name);
                    newPositions.push({
                        id: existingPos?.id || `pos-${projectId}-${positionBudget.id}-${displayMonth.globalIndex}`,
                        projectId,
                        monthIndex: displayMonth.globalIndex,
                        percentage,
                        allocated: existingPos?.allocated || 0,
                        name: positionBudget.name
                    });
                }
            });
        });
        const otherPositions = positions.filter((p)=>p.projectId !== projectId);
        onUpdatePositions([
            ...otherPositions,
            ...newPositions
        ]);
        // Now update the project
        onUpdateProject(projectId, {
            name: newProjectName,
            color: selectedColor,
            startMonth: projectStartMonth,
            startYear: projectStartYear,
            endMonth: projectEndMonth,
            endYear: projectEndYear
        });
        // Close the edit modal immediately so the project list re-renders with the new color
        setEditingProjectId(null);
        setNewProjectName("");
        setSelectedColor("#3B82F6");
        setPositionBudgets([]);
        setProjectStartMonth(0);
        setProjectStartYear(2024);
        setProjectEndMonth(0);
        setProjectEndYear(2024);
        setMonthTablePage(0);
    };
    const handleAddPositionLine = ()=>{
        setPositionBudgets([
            ...positionBudgets,
            {
                id: `pos-${Date.now()}`,
                name: "New Position",
                budgets: {}
            }
        ]);
    };
    const handleDeletePositionLine = (id)=>{
        setPositionBudgets(positionBudgets.filter((p)=>p.id !== id));
    };
    const handleUpdatePositionName = (id, name)=>{
        setPositionBudgets(positionBudgets.map((p)=>p.id === id ? {
                ...p,
                name
            } : p));
    };
    const handleUpdatePositionBudget = (id, globalMonthIndex, value)=>{
        setPositionBudgets(positionBudgets.map((p)=>p.id === id ? {
                ...p,
                budgets: {
                    ...p.budgets,
                    [globalMonthIndex]: value
                }
            } : p));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-4 items-center",
                children: [
                    projects.map((project)=>{
                        // Determine if text should be white or black based on background color brightness
                        const getContrastColor = (hex)=>{
                            const r = parseInt(hex.slice(1, 3), 16);
                            const g = parseInt(hex.slice(3, 5), 16);
                            const b = parseInt(hex.slice(5, 7), 16);
                            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
                            return brightness > 128 ? "#000" : "#fff";
                        };
                        const textColor = getContrastColor(project.color);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 px-4 py-2 rounded border border-border",
                            style: {
                                backgroundColor: project.color,
                                color: textColor
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium",
                                    children: project.name
                                }, void 0, false, {
                                    fileName: "[project]/components/project-manager.tsx",
                                    lineNumber: 315,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleEditProject(project.id),
                                    className: "ml-2 px-2 py-1 text-xs bg-white/20 rounded hover:bg-white/30 transition-colors",
                                    style: {
                                        color: textColor
                                    },
                                    children: "Edit"
                                }, void 0, false, {
                                    fileName: "[project]/components/project-manager.tsx",
                                    lineNumber: 316,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, project.id, true, {
                            fileName: "[project]/components/project-manager.tsx",
                            lineNumber: 310,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowCreateModal(true),
                        className: "px-4 py-2 bg-primary text-primary-foreground rounded font-medium hover:bg-primary/90 transition-colors text-sm",
                        children: "+ New Project"
                    }, void 0, false, {
                        fileName: "[project]/components/project-manager.tsx",
                        lineNumber: 326,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/project-manager.tsx",
                lineNumber: 297,
                columnNumber: 7
            }, this),
            (showCreateModal || editingProjectId) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-card p-6 rounded-lg border border-border shadow-lg max-w-5xl w-full mx-4 max-h-[90vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold text-foreground mb-4",
                            children: editingProjectId ? "Edit Project" : "Create New Project"
                        }, void 0, false, {
                            fileName: "[project]/components/project-manager.tsx",
                            lineNumber: 337,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-medium text-muted-foreground mb-2 block",
                                            children: "Project Name"
                                        }, void 0, false, {
                                            fileName: "[project]/components/project-manager.tsx",
                                            lineNumber: 343,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: newProjectName,
                                            onChange: (e)=>setNewProjectName(e.target.value),
                                            className: "border border-border rounded px-3 py-2 w-full text-sm bg-background text-foreground",
                                            placeholder: "Enter project name",
                                            autoFocus: true
                                        }, void 0, false, {
                                            fileName: "[project]/components/project-manager.tsx",
                                            lineNumber: 344,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/project-manager.tsx",
                                    lineNumber: 342,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-medium text-muted-foreground mb-2 block",
                                            children: "Project Color"
                                        }, void 0, false, {
                                            fileName: "[project]/components/project-manager.tsx",
                                            lineNumber: 355,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2 flex-wrap",
                                            children: COLORS.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        console.log("[v0] Color picker clicked, setting color to:", color);
                                                        setSelectedColor(color);
                                                    },
                                                    className: `w-8 h-8 rounded transition-all ${selectedColor === color ? "ring-2 ring-offset-2 ring-primary" : "hover:opacity-80"}`,
                                                    style: {
                                                        backgroundColor: color
                                                    },
                                                    title: color
                                                }, color, false, {
                                                    fileName: "[project]/components/project-manager.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/project-manager.tsx",
                                            lineNumber: 356,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/project-manager.tsx",
                                    lineNumber: 354,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/project-manager.tsx",
                            lineNumber: 341,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 grid grid-cols-2 md:grid-cols-4 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-medium text-muted-foreground mb-2 block",
                                            children: "Start Month"
                                        }, void 0, false, {
                                            fileName: "[project]/components/project-manager.tsx",
                                            lineNumber: 375,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: projectStartMonth,
                                            onChange: (e)=>setProjectStartMonth(Number(e.target.value)),
                                            className: "border border-border rounded px-3 py-2 w-full text-sm bg-background text-foreground",
                                            children: MONTHS.map((month, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: idx,
                                                    children: month
                                                }, idx, false, {
                                                    fileName: "[project]/components/project-manager.tsx",
                                                    lineNumber: 382,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/project-manager.tsx",
                                            lineNumber: 376,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/project-manager.tsx",
                                    lineNumber: 374,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-medium text-muted-foreground mb-2 block",
                                            children: "Start Year"
                                        }, void 0, false, {
                                            fileName: "[project]/components/project-manager.tsx",
                                            lineNumber: 390,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: projectStartYear,
                                            onChange: (e)=>setProjectStartYear(Number(e.target.value)),
                                            className: "border border-border rounded px-3 py-2 w-full text-sm bg-background text-foreground",
                                            children: YEARS.map((year)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: year,
                                                    children: year
                                                }, year, false, {
                                                    fileName: "[project]/components/project-manager.tsx",
                                                    lineNumber: 397,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/project-manager.tsx",
                                            lineNumber: 391,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/project-manager.tsx",
                                    lineNumber: 389,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-medium text-muted-foreground mb-2 block",
                                            children: "End Month"
                                        }, void 0, false, {
                                            fileName: "[project]/components/project-manager.tsx",
                                            lineNumber: 405,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: projectEndMonth,
                                            onChange: (e)=>setProjectEndMonth(Number(e.target.value)),
                                            className: "border border-border rounded px-3 py-2 w-full text-sm bg-background text-foreground",
                                            children: MONTHS.map((month, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: idx,
                                                    children: month
                                                }, idx, false, {
                                                    fileName: "[project]/components/project-manager.tsx",
                                                    lineNumber: 412,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/project-manager.tsx",
                                            lineNumber: 406,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/project-manager.tsx",
                                    lineNumber: 404,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-medium text-muted-foreground mb-2 block",
                                            children: "End Year"
                                        }, void 0, false, {
                                            fileName: "[project]/components/project-manager.tsx",
                                            lineNumber: 420,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: projectEndYear,
                                            onChange: (e)=>setProjectEndYear(Number(e.target.value)),
                                            className: "border border-border rounded px-3 py-2 w-full text-sm bg-background text-foreground",
                                            children: YEARS.map((year)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: year,
                                                    children: year
                                                }, year, false, {
                                                    fileName: "[project]/components/project-manager.tsx",
                                                    lineNumber: 427,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/project-manager.tsx",
                                            lineNumber: 421,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/project-manager.tsx",
                                    lineNumber: 419,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/project-manager.tsx",
                            lineNumber: 373,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-medium text-muted-foreground",
                                            children: [
                                                "Positions by Month (%) - Page ",
                                                monthTablePage + 1,
                                                " of ",
                                                maxPages
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/project-manager.tsx",
                                            lineNumber: 437,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2 items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setMonthTablePage(Math.max(0, monthTablePage - 1)),
                                                    disabled: monthTablePage === 0,
                                                    className: "px-3 py-1 text-xs bg-primary text-primary-foreground rounded hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                                    children: "← Prev 12"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/project-manager.tsx",
                                                    lineNumber: 441,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setMonthTablePage(Math.min(maxPages - 1, monthTablePage + 1)),
                                                    disabled: monthTablePage >= maxPages - 1,
                                                    className: "px-3 py-1 text-xs bg-primary text-primary-foreground rounded hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                                    children: "Next 12 →"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/project-manager.tsx",
                                                    lineNumber: 448,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleAddPositionLine,
                                                    className: "px-3 py-1 text-xs bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors",
                                                    children: "+ Add Position"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/project-manager.tsx",
                                                    lineNumber: 455,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/project-manager.tsx",
                                            lineNumber: 440,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/project-manager.tsx",
                                    lineNumber: 436,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-border rounded overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "bg-muted border-b border-border",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-2 text-left font-semibold text-muted-foreground min-w-32",
                                                            children: "Position Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/project-manager.tsx",
                                                            lineNumber: 467,
                                                            columnNumber: 23
                                                        }, this),
                                                        displayMonths.map((displayMonth)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-2 text-center font-semibold text-muted-foreground min-w-20",
                                                                children: displayMonth.displayName
                                                            }, displayMonth.globalIndex, false, {
                                                                fileName: "[project]/components/project-manager.tsx",
                                                                lineNumber: 471,
                                                                columnNumber: 25
                                                            }, this)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-2 text-center font-semibold text-muted-foreground w-10",
                                                            children: "Action"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/project-manager.tsx",
                                                            lineNumber: 478,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/project-manager.tsx",
                                                    lineNumber: 466,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/project-manager.tsx",
                                                lineNumber: 465,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: positionBudgets.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: displayMonths.length + 2,
                                                        className: "px-4 py-8 text-center text-muted-foreground",
                                                        children: 'No positions yet. Click "Add Position" to create one.'
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/project-manager.tsx",
                                                        lineNumber: 484,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/project-manager.tsx",
                                                    lineNumber: 483,
                                                    columnNumber: 23
                                                }, this) : positionBudgets.map((positionBudget)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "border-t border-border hover:bg-muted/50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-2 border-r border-border",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: positionBudget.name,
                                                                    onChange: (e)=>handleUpdatePositionName(positionBudget.id, e.target.value),
                                                                    className: "w-full px-2 py-1 border border-border rounded text-foreground bg-card",
                                                                    placeholder: "e.g., Senior Developer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/project-manager.tsx",
                                                                    lineNumber: 492,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/project-manager.tsx",
                                                                lineNumber: 491,
                                                                columnNumber: 27
                                                            }, this),
                                                            displayMonths.map((displayMonth)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-2 border-r border-border last:border-r-0 bg-background",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        min: "0",
                                                                        max: "999",
                                                                        value: positionBudget.budgets[displayMonth.globalIndex] || "",
                                                                        onChange: (e)=>handleUpdatePositionBudget(positionBudget.id, displayMonth.globalIndex, e.target.value ? Number(e.target.value) : 0),
                                                                        className: "w-full px-2 py-1 text-center border border-border rounded text-foreground bg-card",
                                                                        placeholder: "0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/project-manager.tsx",
                                                                        lineNumber: 505,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, displayMonth.globalIndex, false, {
                                                                    fileName: "[project]/components/project-manager.tsx",
                                                                    lineNumber: 501,
                                                                    columnNumber: 29
                                                                }, this)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-2 text-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleDeletePositionLine(positionBudget.id),
                                                                    className: "px-2 py-1 text-xs bg-destructive text-destructive-foreground rounded hover:bg-destructive/90 transition-colors",
                                                                    children: "✕"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/project-manager.tsx",
                                                                    lineNumber: 523,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/project-manager.tsx",
                                                                lineNumber: 522,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, positionBudget.id, true, {
                                                        fileName: "[project]/components/project-manager.tsx",
                                                        lineNumber: 490,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/project-manager.tsx",
                                                lineNumber: 481,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/project-manager.tsx",
                                        lineNumber: 464,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/project-manager.tsx",
                                    lineNumber: 463,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/project-manager.tsx",
                            lineNumber: 435,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 justify-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowCreateModal(false);
                                        setEditingProjectId(null);
                                        setNewProjectName("");
                                        setSelectedColor("#3B82F6");
                                        setPositionBudgets([]);
                                        setProjectStartMonth(0);
                                        setProjectStartYear(2024);
                                        setProjectEndMonth(0);
                                        setProjectEndYear(2024);
                                        setMonthTablePage(0);
                                    },
                                    className: "px-4 py-2 bg-muted text-muted-foreground rounded font-medium hover:bg-muted/80 transition-colors text-sm",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/project-manager.tsx",
                                    lineNumber: 539,
                                    columnNumber: 15
                                }, this),
                                editingProjectId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        if (window.confirm("Are you sure you want to delete this project? All positions will be removed.")) {
                                            onDeleteProject(editingProjectId);
                                            setEditingProjectId(null);
                                            setNewProjectName("");
                                            setSelectedColor("#3B82F6");
                                            setPositionBudgets([]);
                                            setProjectStartMonth(0);
                                            setProjectStartYear(2024);
                                            setProjectEndMonth(0);
                                            setProjectEndYear(2024);
                                            setMonthTablePage(0);
                                        }
                                    },
                                    className: "px-4 py-2 bg-destructive text-destructive-foreground rounded font-medium hover:bg-destructive/90 transition-colors text-sm",
                                    children: "Delete Project"
                                }, void 0, false, {
                                    fileName: "[project]/components/project-manager.tsx",
                                    lineNumber: 557,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: editingProjectId ? handleSaveEditProject : handleCreateProject,
                                    className: "px-4 py-2 bg-primary text-primary-foreground rounded font-medium hover:bg-primary/90 transition-colors text-sm",
                                    children: editingProjectId ? "Save Changes" : "Create Project"
                                }, void 0, false, {
                                    fileName: "[project]/components/project-manager.tsx",
                                    lineNumber: 579,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/project-manager.tsx",
                            lineNumber: 538,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/project-manager.tsx",
                    lineNumber: 336,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/project-manager.tsx",
                lineNumber: 335,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/project-manager.tsx",
        lineNumber: 296,
        columnNumber: 5
    }, this);
}
_s(ProjectManager, "8g7haq140e19VIZknfhqEpoqz7w=");
_c = ProjectManager;
var _c;
__turbopack_context__.k.register(_c, "ProjectManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/components/allocation-grid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AllocationGrid",
    ()=>AllocationGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$allocation$2d$cell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/allocation-cell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2d$manager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/project-manager.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/storage.ts [app-client] (ecmascript)");
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
const YEARS = Array.from({
    length: 10
}, (_, i)=>2024 + i);
function AllocationGrid() {
    _s();
    // Check if user is logged in and get their role
    const [currentUser, setCurrentUserState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentUserRole, setCurrentUserRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Load user-specific data on component mount
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AllocationGrid.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const userData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUserData"])();
                console.log("[v0] Initial projects load for current user:", userData.projects);
                return userData.projects;
            }
            //TURBOPACK unreachable
            ;
        }
    }["AllocationGrid.useState"]);
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AllocationGrid.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const userData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUserData"])();
                return userData.users.length > 0 ? userData.users : [
                    {
                        id: "1",
                        name: "John Doe",
                        department: "Engineering"
                    },
                    {
                        id: "2",
                        name: "Jane Smith",
                        department: "Design"
                    },
                    {
                        id: "3",
                        name: "Bob Johnson",
                        department: "Product"
                    }
                ];
            }
            //TURBOPACK unreachable
            ;
        }
    }["AllocationGrid.useState"]);
    const [allocations, setAllocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AllocationGrid.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const userData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUserData"])();
                return userData.allocations;
            }
            //TURBOPACK unreachable
            ;
        }
    }["AllocationGrid.useState"]);
    const [positions, setPositions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AllocationGrid.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const userData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUserData"])();
                return userData.positions;
            }
            //TURBOPACK unreachable
            ;
        }
    }["AllocationGrid.useState"]);
    // Check login status and role on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AllocationGrid.useEffect": ()=>{
            const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])();
            const systemUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentSystemUser"])();
            if (!user || !systemUser) {
                window.location.href = "/login";
            } else {
                setCurrentUserState(user);
                setCurrentUserRole(systemUser.role);
            }
        }
    }["AllocationGrid.useEffect"], []);
    // Save data to user-specific storage whenever it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AllocationGrid.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && currentUser) {
                console.log("[v0] Saving projects for user:", currentUser, projects);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCurrentUserData"])({
                    projects
                });
            }
        }
    }["AllocationGrid.useEffect"], [
        projects,
        currentUser
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AllocationGrid.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && currentUser) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCurrentUserData"])({
                    users
                });
            }
        }
    }["AllocationGrid.useEffect"], [
        users,
        currentUser
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AllocationGrid.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && currentUser) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCurrentUserData"])({
                    allocations
                });
            }
        }
    }["AllocationGrid.useEffect"], [
        allocations,
        currentUser
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AllocationGrid.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && currentUser) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCurrentUserData"])({
                    positions
                });
            }
        }
    }["AllocationGrid.useEffect"], [
        positions,
        currentUser
    ]);
    const [selectedMonth, setSelectedMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Grid starting month/year (top-right selectors). Persist per user.
    const [startMonth, setStartMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AllocationGrid.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const userData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUserData"])();
                return userData.startMonth ?? 0;
            }
            //TURBOPACK unreachable
            ;
        }
    }["AllocationGrid.useState"]);
    const [startYear, setStartYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AllocationGrid.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const userData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUserData"])();
                return userData.startYear ?? 2024;
            }
            //TURBOPACK unreachable
            ;
        }
    }["AllocationGrid.useState"]);
    // Persist starting month/year when they change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AllocationGrid.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && currentUser) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCurrentUserData"])({
                    startMonth,
                    startYear
                });
            }
        }
    }["AllocationGrid.useEffect"], [
        startMonth,
        startYear,
        currentUser
    ]);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editValue, setEditValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showUnallocatedModal, setShowUnallocatedModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingAllocation, setPendingAllocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showUserModal, setShowUserModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingUserId, setEditingUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingUserName, setEditingUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingUserDept, setEditingUserDept] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingUserStartDate, setEditingUserStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingUserEndDate, setEditingUserEndDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedCellMonth, setSelectedCellMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedCellUser, setSelectedCellUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showPositionModal, setShowPositionModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showUserManagement, setShowUserManagement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const addProject = (project)=>{
        setProjects((prev)=>[
                ...prev,
                project
            ]);
    };
    const updateProject = (projectId, updates)=>{
        console.log("[v0] updateProject called:", {
            projectId,
            updates
        });
        console.trace("[v0] updateProject call stack");
        setProjects((prev)=>{
            const existing = prev.find((p)=>p.id === projectId);
            if (existing && Object.entries(updates).every(([key, value])=>existing[key] === value)) {
                console.log("[v0] Skipping update: no actual changes detected");
                return prev;
            }
            const next = prev.map((p)=>p.id === projectId ? {
                    ...p,
                    ...updates
                } : p);
            console.log("[v0] projects after update:", next);
            return next;
        });
    };
    const deleteProject = (projectId)=>{
        setProjects((prev)=>prev.filter((p)=>p.id !== projectId));
        setAllocations((prev)=>prev.filter((a)=>a.projectId !== projectId));
    };
    const addUser = ()=>{
        setEditingUserId(null);
        setEditingUserName("");
        setEditingUserDept("");
        setEditingUserStartDate("");
        setEditingUserEndDate("");
        setShowUserModal(true);
    };
    const editUser = (userId)=>{
        const user = users.find((u)=>u.id === userId);
        if (user) {
            setEditingUserId(userId);
            setEditingUserName(user.name);
            setEditingUserDept(user.department);
            setEditingUserStartDate(user.startDate || "");
            setEditingUserEndDate(user.endDate || "");
            setShowUserModal(true);
        }
    };
    const saveUserChanges = ()=>{
        if (!editingUserName.trim()) return;
        if (editingUserId) {
            setUsers((prev)=>prev.map((u)=>u.id === editingUserId ? {
                        ...u,
                        name: editingUserName,
                        department: editingUserDept,
                        startDate: editingUserStartDate || undefined,
                        endDate: editingUserEndDate || undefined
                    } : u));
        } else {
            const newUser = {
                id: `user-${Date.now()}`,
                name: editingUserName,
                department: editingUserDept,
                startDate: editingUserStartDate || undefined,
                endDate: editingUserEndDate || undefined
            };
            setUsers((prev)=>[
                    ...prev,
                    newUser
                ]);
        }
        setShowUserModal(false);
        setEditingUserId(null);
        setEditingUserName("");
        setEditingUserDept("");
        setEditingUserStartDate("");
        setEditingUserEndDate("");
    };
    const deleteUser = (userId)=>{
        setUsers((prev)=>prev.filter((u)=>u.id !== userId));
        setAllocations((prev)=>prev.filter((a)=>a.userId !== userId));
    };
    const updatePositions = (newPositions)=>{
        const updatedProjects = projects.map((project)=>({
                ...project,
                positions: newPositions.filter((p)=>p.projectId === project.id)
            }));
        setProjects(updatedProjects);
    };
    const handleMonthClick = (monthIndex)=>{
        setSelectedMonth(selectedMonth === monthIndex ? null : monthIndex);
    };
    // Months shown in the grid. The globalIndex here MUST match how ProjectManager
    // stores position.monthIndex: (year - 2024) * 12 + month.
    const months = Array.from({
        length: 12
    }, (_, i)=>{
        const date = new Date(startYear, startMonth + i, 1);
        const month = date.getMonth();
        const year = date.getFullYear();
        const globalIndex = (year - 2024) * 12 + month;
        return {
            month,
            year,
            globalIndex,
            display: `${MONTHS[month].slice(0, 3).toUpperCase()} ${String(year).slice(-2)}`
        };
    });
    const handleEmptyCellClick = (userId, monthIndex)=>{
        console.log("[v0] Empty cell clicked:", {
            userId,
            monthIndex,
            selectedMonth
        });
        // Respect user end date: do not allow new allocations after their end date
        const user = users.find((u)=>u.id === userId);
        if (user?.endDate) {
            const end = new Date(user.endDate);
            if (!Number.isNaN(end.getTime())) {
                const endMonth = end.getMonth() // 0-11
                ;
                const endYear = end.getFullYear();
                const endGlobalIndex = (endYear - 2024) * 12 + endMonth;
                if (monthIndex > endGlobalIndex) {
                    // After end date: block allocation
                    return;
                }
            }
        }
        setSelectedCellUser(userId);
        setSelectedCellMonth(monthIndex);
        setShowPositionModal(true);
    };
    // Helper to check if a user is active for a given month
    const isUserActiveInMonth = (userId, monthIndex)=>{
        const user = users.find((u)=>u.id === userId);
        if (!user?.endDate) return true;
        const end = new Date(user.endDate);
        if (Number.isNaN(end.getTime())) return true;
        const endMonth = end.getMonth() // 0-11
        ;
        const endYear = end.getFullYear();
        const endGlobalIndex = (endYear - 2024) * 12 + endMonth;
        return monthIndex <= endGlobalIndex;
    };
    const handleAddAllocation = (projectId, positionName)=>{
        if (selectedCellUser && selectedCellMonth !== null) {
            // Find the underlying position so we can link by positionId
            const project = projects.find((p)=>p.id === projectId);
            const position = project?.positions?.find((pos)=>pos.monthIndex === selectedCellMonth && pos.name === positionName);
            // If we can't find the position or it has no budget, do nothing
            if (!position || !position.percentage) {
                return;
            }
            // How much of this position is already allocated in this month (across all users)
            const alreadyAllocated = allocations.filter((a)=>a.projectId === projectId && a.monthIndex === selectedCellMonth && (a.positionId === position.id || a.positionName === positionName)).reduce((sum, a)=>sum + (a.percentage || 0), 0);
            const remaining = Math.max(0, position.percentage - alreadyAllocated);
            // Nothing left to allocate
            if (remaining <= 0) {
                return;
            }
            const newAllocation = {
                id: `alloc-${Date.now()}`,
                userId: selectedCellUser,
                projectId,
                monthIndex: selectedCellMonth,
                // By default, allocate all remaining budget for this position/month
                percentage: remaining,
                positionId: position?.id,
                positionName
            };
            setAllocations((prev)=>[
                    ...prev,
                    newAllocation
                ]);
            // Update allocated amount in positions
            setProjects((prev)=>prev.map((p)=>p.id === projectId ? {
                        ...p,
                        positions: p.positions?.map((pos)=>pos.monthIndex === selectedCellMonth && pos.name === positionName ? {
                                ...pos,
                                allocated: (pos.allocated || 0) + remaining
                            } : pos)
                    } : p));
            setShowPositionModal(false);
            setSelectedCellUser(null);
            setSelectedCellMonth(null);
        }
    };
    const handleRemoveAllocation = (allocationId)=>{
        const allocation = allocations.find((a)=>a.id === allocationId);
        if (allocation) {
            setProjects((prev)=>prev.map((p)=>p.id === allocation.projectId ? {
                        ...p,
                        positions: p.positions?.map((pos)=>pos.monthIndex === allocation.monthIndex && pos.name === allocation.positionName ? {
                                ...pos,
                                allocated: Math.max(0, (pos.allocated || 0) - 1)
                            } : pos)
                    } : p));
        }
        setAllocations((prev)=>prev.filter((a)=>a.id !== allocationId));
    };
    const handleEditAllocation = (allocationId, newPercentage)=>{
        setAllocations((prev)=>prev.map((a)=>a.id === allocationId ? {
                    ...a,
                    percentage: newPercentage
                } : a));
        setEditingId(null);
        setEditValue(0);
    };
    // Only show users who are active for the current grid window.
    // If a user has an endDate before the starting month/year, hide them.
    const gridStartGlobalIndex = (startYear - 2024) * 12 + startMonth;
    const activeUsers = users.filter((user)=>{
        if (!user.endDate) return true;
        const end = new Date(user.endDate);
        if (Number.isNaN(end.getTime())) return true;
        const endMonth = end.getMonth() // 0-11
        ;
        const endYear = end.getFullYear();
        const endGlobalIndex = (endYear - 2024) * 12 + endMonth;
        return endGlobalIndex >= gridStartGlobalIndex;
    });
    const groupedUsers = Array.from(activeUsers.reduce((acc, user)=>{
        if (!acc.has(user.department)) {
            acc.set(user.department, []);
        }
        acc.get(user.department).push(user);
        return acc;
    }, new Map())).map(([dept, deptUsers])=>({
            department: dept,
            users: deptUsers
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4 p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: (currentUserRole === 'admin' || currentUserRole === 'editor') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2d$manager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectManager"], {
                            projects: projects,
                            positions: projects.flatMap((p)=>p.positions || []),
                            months: MONTHS,
                            startMonth: startMonth,
                            startYear: startYear,
                            onAddProject: addProject,
                            onUpdateProject: updateProject,
                            onDeleteProject: deleteProject,
                            onUpdatePositions: updatePositions
                        }, void 0, false, {
                            fileName: "[project]/components/allocation-grid.tsx",
                            lineNumber: 429,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/allocation-grid.tsx",
                        lineNumber: 426,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 items-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium",
                                        children: "Starting Month"
                                    }, void 0, false, {
                                        fileName: "[project]/components/allocation-grid.tsx",
                                        lineNumber: 444,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: startMonth,
                                        onChange: (e)=>setStartMonth(Number.parseInt(e.target.value)),
                                        className: "border rounded px-2 py-1",
                                        children: MONTHS.map((month, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: idx,
                                                children: month
                                            }, month, false, {
                                                fileName: "[project]/components/allocation-grid.tsx",
                                                lineNumber: 451,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/allocation-grid.tsx",
                                        lineNumber: 445,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/allocation-grid.tsx",
                                lineNumber: 443,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium",
                                        children: "Starting Year"
                                    }, void 0, false, {
                                        fileName: "[project]/components/allocation-grid.tsx",
                                        lineNumber: 458,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: startYear,
                                        onChange: (e)=>setStartYear(Number.parseInt(e.target.value)),
                                        className: "border rounded px-2 py-1",
                                        children: YEARS.map((year)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: year,
                                                children: year
                                            }, year, false, {
                                                fileName: "[project]/components/allocation-grid.tsx",
                                                lineNumber: 465,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/allocation-grid.tsx",
                                        lineNumber: 459,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/allocation-grid.tsx",
                                lineNumber: 457,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/allocation-grid.tsx",
                        lineNumber: 442,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/allocation-grid.tsx",
                lineNumber: 425,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 rounded-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-bold",
                                        children: "Staff Allocations"
                                    }, void 0, false, {
                                        fileName: "[project]/components/allocation-grid.tsx",
                                        lineNumber: 477,
                                        columnNumber: 13
                                    }, this),
                                    (currentUserRole === 'admin' || currentUserRole === 'editor') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: addUser,
                                        variant: "default",
                                        size: "sm",
                                        className: "bg-blue-900 hover:bg-blue-800 text-white",
                                        children: "+ New Staff"
                                    }, void 0, false, {
                                        fileName: "[project]/components/allocation-grid.tsx",
                                        lineNumber: 480,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/allocation-grid.tsx",
                                lineNumber: 476,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 items-center",
                                children: [
                                    currentUserRole === 'admin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>setShowUserManagement(true),
                                        variant: "outline",
                                        size: "sm",
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 500,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/allocation-grid.tsx",
                                                lineNumber: 494,
                                                columnNumber: 17
                                            }, this),
                                            "Users"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/allocation-grid.tsx",
                                        lineNumber: 488,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>{
                                            // Clear current user session but keep their data
                                            const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])();
                                            if (user) {
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCurrentUserData"])({
                                                    startMonth,
                                                    startYear
                                                }); // Save current view settings
                                            }
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearCurrentUser"])();
                                            window.location.href = "/login";
                                        },
                                        variant: "outline",
                                        size: "sm",
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 530,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/allocation-grid.tsx",
                                                lineNumber: 524,
                                                columnNumber: 15
                                            }, this),
                                            "Logout"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/allocation-grid.tsx",
                                        lineNumber: 510,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/allocation-grid.tsx",
                                lineNumber: 485,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/allocation-grid.tsx",
                        lineNumber: 475,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full border-collapse border border-gray-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 p-2 bg-gray-100 w-42",
                                                    children: "Staff"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 546,
                                                    columnNumber: 17
                                                }, this),
                                                months.map((month, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "border border-gray-300 p-2 bg-gray-100 w-32 cursor-pointer hover:bg-gray-200 text-sm",
                                                        onClick: ()=>handleMonthClick(month.globalIndex),
                                                        children: month.display
                                                    }, idx, false, {
                                                        fileName: "[project]/components/allocation-grid.tsx",
                                                        lineNumber: 548,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 545,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 bg-gray-50 w-42 text-xs text-muted-foreground",
                                                    children: "Unallocated"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 558,
                                                    columnNumber: 17
                                                }, this),
                                                months.map((month)=>{
                                                    const monthUnallocated = projects.flatMap((project)=>{
                                                        const positionsForMonth = project.positions?.filter((pos)=>pos.monthIndex === month.globalIndex) || [];
                                                        return positionsForMonth.map((position)=>{
                                                            const allocated = allocations.filter((a)=>a.projectId === project.id && a.monthIndex === month.globalIndex && a.positionId === position.id).reduce((sum, a)=>sum + (a.percentage || 0), 0);
                                                            const unallocated = Math.max(0, position.percentage - allocated);
                                                            if (unallocated <= 0) return null;
                                                            return {
                                                                projectId: project.id,
                                                                projectName: project.name,
                                                                projectColor: project.color,
                                                                positionId: position.id,
                                                                positionName: position.name || "Position",
                                                                percentage: unallocated
                                                            };
                                                        }).filter((p)=>p != null);
                                                    });
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 bg-gray-50 p-1 align-top",
                                                        style: {
                                                            verticalAlign: "top"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-1",
                                                            children: monthUnallocated.map((pos)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center h-4 rounded overflow-hidden bg-gray-200 text-[9px] text-white",
                                                                    style: {
                                                                        minWidth: "50px",
                                                                        maxWidth: "120px"
                                                                    },
                                                                    title: `${pos.projectName} - ${pos.positionName} (${pos.percentage}% unallocated)`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "h-full flex items-center justify-center px-1 truncate",
                                                                        style: {
                                                                            backgroundColor: pos.projectColor || "#3b82f6",
                                                                            width: "100%"
                                                                        },
                                                                        children: [
                                                                            pos.positionName,
                                                                            " (",
                                                                            pos.percentage,
                                                                            "%)"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/allocation-grid.tsx",
                                                                        lineNumber: 607,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, `${pos.projectId}-${pos.positionId}`, false, {
                                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                                    lineNumber: 598,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                            lineNumber: 596,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, month.globalIndex, false, {
                                                        fileName: "[project]/components/allocation-grid.tsx",
                                                        lineNumber: 591,
                                                        columnNumber: 21
                                                    }, this);
                                                })
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 557,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/allocation-grid.tsx",
                                    lineNumber: 544,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: groupedUsers.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: months.length + 1,
                                                        className: "border border-gray-300 p-1 font-semibold text-xs text-gray-800 bg-cyan-200",
                                                        children: group.department
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/allocation-grid.tsx",
                                                        lineNumber: 628,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 627,
                                                    columnNumber: 19
                                                }, this),
                                                group.users.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "border border-gray-300 p-1 w-42",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs leading-tight",
                                                                            children: user.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                                            lineNumber: 636,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        currentUserRole === 'admin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>editUser(user.id),
                                                                            className: "text-blue-600 hover:text-blue-800 text-xs",
                                                                            children: "✏️"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                                            lineNumber: 639,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                                    lineNumber: 635,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/allocation-grid.tsx",
                                                                lineNumber: 634,
                                                                columnNumber: 23
                                                            }, this),
                                                            months.map((month)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$allocation$2d$cell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AllocationCell"], {
                                                                    userId: user.id,
                                                                    monthIndex: month.globalIndex,
                                                                    allocations: allocations.filter((a)=>a.userId === user.id && a.monthIndex === month.globalIndex),
                                                                    project: projects.find((p)=>p.id === allocations[0]?.projectId),
                                                                    projects: projects,
                                                                    month: month,
                                                                    userEnded: !isUserActiveInMonth(user.id, month.globalIndex),
                                                                    readOnly: currentUserRole === 'viewer',
                                                                    onEdit: (id)=>{
                                                                        setEditingId(id);
                                                                        const alloc = allocations.find((a)=>a.id === id);
                                                                        if (alloc) setEditValue(alloc.percentage);
                                                                    },
                                                                    onSaveEdit: handleEditAllocation,
                                                                    onRemove: handleRemoveAllocation,
                                                                    onEmptyCellClick: ()=>handleEmptyCellClick(user.id, month.globalIndex)
                                                                }, `${user.id}-${month.globalIndex}`, false, {
                                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                                    lineNumber: 649,
                                                                    columnNumber: 25
                                                                }, this))
                                                        ]
                                                    }, user.id, true, {
                                                        fileName: "[project]/components/allocation-grid.tsx",
                                                        lineNumber: 633,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, group.department, true, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 626,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/allocation-grid.tsx",
                                    lineNumber: 624,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/allocation-grid.tsx",
                            lineNumber: 543,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/allocation-grid.tsx",
                        lineNumber: 542,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/allocation-grid.tsx",
                lineNumber: 474,
                columnNumber: 7
            }, this),
            showUserModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg p-6 w-96",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold mb-4",
                            children: editingUserId ? "Edit User" : "Add User"
                        }, void 0, false, {
                            fileName: "[project]/components/allocation-grid.tsx",
                            lineNumber: 683,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            children: "Name"
                                        }, void 0, false, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 686,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingUserName,
                                            onChange: (e)=>setEditingUserName(e.target.value),
                                            className: "w-full border rounded px-2 py-1",
                                            placeholder: "User name"
                                        }, void 0, false, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 687,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/allocation-grid.tsx",
                                    lineNumber: 685,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            children: "Department"
                                        }, void 0, false, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 696,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingUserDept,
                                            onChange: (e)=>setEditingUserDept(e.target.value),
                                            className: "w-full border rounded px-2 py-1",
                                            placeholder: "Department"
                                        }, void 0, false, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 697,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/allocation-grid.tsx",
                                    lineNumber: 695,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium mb-1",
                                                    children: "Start Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 707,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    value: editingUserStartDate,
                                                    onChange: (e)=>setEditingUserStartDate(e.target.value),
                                                    className: "w-full border rounded px-2 py-1 text-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 708,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 706,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium mb-1",
                                                    children: "End Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 716,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    value: editingUserEndDate,
                                                    onChange: (e)=>setEditingUserEndDate(e.target.value),
                                                    className: "w-full border rounded px-2 py-1 text-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 717,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-[11px] text-gray-500",
                                                    children: "Leave blank if working indefinitely."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 723,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 715,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/allocation-grid.tsx",
                                    lineNumber: 705,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 justify-end",
                                    children: [
                                        editingUserId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "destructive",
                                            onClick: ()=>{
                                                deleteUser(editingUserId);
                                                setShowUserModal(false);
                                            },
                                            children: "Delete"
                                        }, void 0, false, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 728,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            onClick: ()=>setShowUserModal(false),
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 738,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: saveUserChanges,
                                            children: "Save"
                                        }, void 0, false, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 741,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/allocation-grid.tsx",
                                    lineNumber: 726,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/allocation-grid.tsx",
                            lineNumber: 684,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/allocation-grid.tsx",
                    lineNumber: 682,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/allocation-grid.tsx",
                lineNumber: 681,
                columnNumber: 9
            }, this),
            showPositionModal && selectedCellMonth !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg p-6 w-96 max-h-[80vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold mb-4",
                            children: "Select Position"
                        }, void 0, false, {
                            fileName: "[project]/components/allocation-grid.tsx",
                            lineNumber: 751,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: projects.flatMap((project)=>{
                                // Positions created in ProjectManager already use a global monthIndex (0 = Jan 2024, ...)
                                // Cells in the grid also use this same global monthIndex. So we just match directly.
                                const monthPositions = (project.positions || []).filter((p)=>p.monthIndex === selectedCellMonth && (p.percentage || 0) > 0).map((p)=>{
                                    const allocated = allocations.filter((a)=>a.projectId === project.id && a.monthIndex === selectedCellMonth && a.positionName === p.name).reduce((sum, a)=>sum + (a.percentage || 0), 0);
                                    const available = Math.max(0, (p.percentage || 0) - allocated);
                                    return {
                                        ...p,
                                        projectId: project.id,
                                        projectName: project.name,
                                        projectColor: project.color,
                                        available,
                                        allocated
                                    };
                                }).filter((p)=>p.available > 0);
                                const availablePositions = monthPositions;
                                return availablePositions.map((position)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            handleAddAllocation(project.id, position.name || "");
                                        },
                                        className: "w-full text-left p-3 rounded border border-gray-200 hover:bg-blue-50 transition-colors",
                                        style: {
                                            borderLeft: `4px solid ${project.color}`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-medium",
                                                                children: position.name || "Unnamed"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/allocation-grid.tsx",
                                                                lineNumber: 796,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-gray-600",
                                                                children: project.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/allocation-grid.tsx",
                                                                lineNumber: 797,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/allocation-grid.tsx",
                                                        lineNumber: 795,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-right",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm font-medium",
                                                                children: [
                                                                    position.available,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/allocation-grid.tsx",
                                                                lineNumber: 800,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-gray-500",
                                                                children: position.allocated > 0 ? `${position.allocated}% allocated` : 'Not allocated'
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/allocation-grid.tsx",
                                                                lineNumber: 801,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/allocation-grid.tsx",
                                                        lineNumber: 799,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/allocation-grid.tsx",
                                                lineNumber: 794,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 w-full bg-gray-200 rounded-full h-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-blue-500 h-2 rounded-full",
                                                    style: {
                                                        width: `${position.allocated / position.percentage * 100}%`,
                                                        backgroundColor: project.color
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 807,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/allocation-grid.tsx",
                                                lineNumber: 806,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, `${project.id}-${position.id}`, true, {
                                        fileName: "[project]/components/allocation-grid.tsx",
                                        lineNumber: 784,
                                        columnNumber: 19
                                    }, this));
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/allocation-grid.tsx",
                            lineNumber: 752,
                            columnNumber: 13
                        }, this),
                        projects.every((project)=>!project.positions?.some((p)=>p.monthIndex === selectedCellMonth && (p.percentage || 0) > 0)) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800",
                            children: "No positions available for this month. Add positions in the project settings."
                        }, void 0, false, {
                            fileName: "[project]/components/allocation-grid.tsx",
                            lineNumber: 823,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: ()=>setShowPositionModal(false),
                            className: "w-full mt-4",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/components/allocation-grid.tsx",
                            lineNumber: 827,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/allocation-grid.tsx",
                    lineNumber: 750,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/allocation-grid.tsx",
                lineNumber: 749,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/allocation-grid.tsx",
        lineNumber: 424,
        columnNumber: 5
    }, this);
}
_s(AllocationGrid, "dkwVGD9j3YN6mMhEMEW1G4qZ7s0=");
_c = AllocationGrid;
var _c;
__turbopack_context__.k.register(_c, "AllocationGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_56a2bf2e._.js.map