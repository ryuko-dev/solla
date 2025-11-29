"use client"
import { useState } from "react"
import type { Project, Position } from "../lib/types"
import { UserRole } from "../lib/permissions"

interface ProjectManagerProps {
  projects: Project[]
  positions: Position[]
  months: string[]
  startMonth?: number
  startYear?: number
  onAddProject: (project: Project) => void
  onUpdateProject: (projectId: string, updates: Partial<Project>) => void
  onDeleteProject: (projectId: string) => void
  onUpdatePositions: (positions: Position[]) => void
  onProjectSelect?: (projectId: string | null) => void
  selectedProjectId?: string | null
  onCleanupAllocations?: (projectId: string, validPositionIds: string[]) => void
  currentUserRole?: UserRole | null
}

interface PositionBudget {
  id: string
  name: string
  projectTask?: string
  budgets: Record<number, number>
}

export function ProjectManager({
  projects,
  positions = [],
  months,
  startMonth = 0,
  startYear = 2024,
  onAddProject,
  onUpdateProject,
  onDeleteProject,
  onUpdatePositions,
  onProjectSelect,
  selectedProjectId,
  onCleanupAllocations,
  currentUserRole,
}: ProjectManagerProps) {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null)
  const [newProjectName, setNewProjectName] = useState("")
  const [selectedColor, setSelectedColor] = useState("#3B82F6")
  const [positionBudgets, setPositionBudgets] = useState<PositionBudget[]>([])
  const [projectStartMonth, setProjectStartMonth] = useState(0)
  const [projectStartYear, setProjectStartYear] = useState(2024)
  const [projectEndMonth, setProjectEndMonth] = useState(0)
  const [projectEndYear, setProjectEndYear] = useState(2024)
  const [monthTablePage, setMonthTablePage] = useState(0)
  const [allocationMode, setAllocationMode] = useState<'percentage' | 'days'>('percentage')

  // Check if current user can edit projects
  const canEditProjects = currentUserRole === 'admin' || currentUserRole === 'editor'

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
    "December",
  ]
  const YEARS = Array.from({ length: 10 }, (_, i) => 2024 + i)

  // Helper to calculate working days in a month
  const getWorkingDaysInMonth = (year: number, month: number, startDay: number = 1): number => {
    const date = new Date(year, month, 1)
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    let workingDays = 0
    
    for (let day = 1; day <= daysInMonth; day++) {
      date.setDate(day)
      const dayOfWeek = date.getDay() // 0 = Sunday, 6 = Saturday
      
      if (startDay === 1) {
        // Monday to Friday (1-5)
        if (dayOfWeek >= 1 && dayOfWeek <= 5) {
          workingDays++
        }
      } else {
        // Sunday to Thursday (0-4)
        if (dayOfWeek >= 0 && dayOfWeek <= 4) {
          workingDays++
        }
      }
    }
    
    return workingDays
  }

  const COLORS = [
    "#3B82F6", // Blue
    "#10B981", // Green
    "#F59E0B", // Amber
    "#8B5CF6", // Purple
    "#EC4899", // Pink
    "#06B6D4", // Cyan
    "#EF4444", // Red
    "#14B8A6", // Teal
  ]

  const toGlobalMonthIndex = (month: number, year: number) => {
    return (year - 2024) * 12 + month
  }

  const fromGlobalMonthIndex = (globalIndex: number) => {
    return {
      month: globalIndex % 12,
      year: 2024 + Math.floor(globalIndex / 12),
    }
  }

  const projectDurationMonths = (() => {
    const startIdx = toGlobalMonthIndex(projectStartMonth, projectStartYear)
    const endIdx = toGlobalMonthIndex(projectEndMonth, projectEndYear)
    return Math.max(1, endIdx - startIdx + 1)
  })()

  const getDisplayMonths = () => {
    const startIdx = toGlobalMonthIndex(projectStartMonth, projectStartYear)
    const endIdx = toGlobalMonthIndex(projectEndMonth, projectEndYear)
    const pageStart = startIdx + monthTablePage * 12
    const pageEnd = Math.min(pageStart + 12, endIdx + 1)

    const displayMonths = []
    for (let i = pageStart; i < pageEnd; i++) {
      const { month, year } = fromGlobalMonthIndex(i)
      displayMonths.push({
        month,
        year,
        displayName: `${MONTHS[month].slice(0, 3)} ${year.toString().slice(-2)}`,
        globalIndex: i,
      })
    }
    return displayMonths
  }

  const displayMonths = getDisplayMonths()
  const maxPages = Math.ceil(projectDurationMonths / 12)

  const handleCreateProject = () => {
    if (!newProjectName.trim()) return

    console.log('[DEBUG] Creating project with dates:', {
      projectStartMonth,
      projectStartYear,
      projectEndMonth,
      projectEndYear
    })

    const newProject: Project = {
      id: `proj-${Date.now()}`,
      name: newProjectName,
      color: selectedColor,
      startMonth: projectStartMonth,
      startYear: projectStartYear,
      endMonth: projectEndMonth,
      endYear: projectEndYear,
      allocationMode,
    }

    console.log('[DEBUG] Project object being created:', newProject)

    onAddProject(newProject)

    const newPositions: Position[] = []
    const startIdx = toGlobalMonthIndex(projectStartMonth, projectStartYear)
    const endIdx = toGlobalMonthIndex(projectEndMonth, projectEndYear)

    positionBudgets.forEach((positionBudget) => {
      displayMonths.forEach((displayMonth, displayIdx) => {
        const percentage = positionBudget.budgets[displayMonth.globalIndex] || 0
        if (percentage > 0) {
          const position: Position = {
            id: `pos-${newProject.id}-${positionBudget.id}-${displayMonth.globalIndex}`,
            projectId: newProject.id,
            monthIndex: displayMonth.globalIndex,
            percentage: allocationMode === 'days' ? (percentage / getWorkingDaysInMonth(displayMonth.year, displayMonth.month, 1)) * 100 : percentage,
            allocated: 0,
            name: positionBudget.name,
            projectTask: positionBudget.projectTask,
            days: allocationMode === 'days' ? percentage : undefined,
          }
          newPositions.push(position)
        }
      })
    })

    if (newPositions.length > 0) {
      onUpdatePositions([...positions, ...newPositions])
    }

    setNewProjectName("")
    setSelectedColor("#3B82F6")
    setPositionBudgets([])
    setProjectStartMonth(0)
    setProjectStartYear(2024)
    setProjectEndMonth(0)
    setProjectEndYear(2024)
    setMonthTablePage(0)
    setAllocationMode('percentage')
    setShowCreateModal(false)
  }

  const handleEditProject = (projectId: string) => {
    setEditingProjectId(projectId)
    const project = projects.find((p) => p.id === projectId)
    if (project) {
      setNewProjectName(project.name)
      setSelectedColor(project.color)
      setProjectStartMonth(project.startMonth ?? 0)
      setProjectStartYear(project.startYear ?? 2024)
      setProjectEndMonth(project.endMonth ?? 0)
      setProjectEndYear(project.endYear ?? 2024)
      setAllocationMode(project.allocationMode ?? 'percentage')
      setMonthTablePage(0)

      const projectPositions = positions.filter((p) => p.projectId === projectId)
      const positionMap = new Map<string, PositionBudget>()

      projectPositions.forEach((p) => {
        const name = p.name || "Unnamed Position"
        if (!positionMap.has(name)) {
          positionMap.set(name, {
            id: `${name}-${Date.now()}`,
            name,
            projectTask: p.projectTask,
            budgets: {},
          })
        }
        const pos = positionMap.get(name)!
        // Use days if available, otherwise use percentage
        const value = project.allocationMode === 'days' && p.days ? p.days : p.percentage
        pos.budgets[p.monthIndex] = value
      })

      setPositionBudgets(Array.from(positionMap.values()))
    }
  }

  const handleSaveEditProject = () => {
    if (!editingProjectId || !newProjectName.trim()) return

    const projectId = editingProjectId // Store before clearing state

    console.log("[v0] Saving project with dates:", {
      projectId,
      startMonth: projectStartMonth,
      startYear: projectStartYear,
      endMonth: projectEndMonth,
      endYear: projectEndYear,
    })

    console.log("[v0] Saving project with color:", {
      projectId,
      selectedColor,
    })

    console.log("[v0] About to call onUpdateProject with:", {
      projectId,
      name: newProjectName,
      color: selectedColor,
      startMonth: projectStartMonth,
      startYear: projectStartYear,
      endMonth: projectEndMonth,
      endYear: projectEndYear,
    })

    // Update positions BEFORE updating the project to avoid triggering another project update
    const existingPositions = positions.filter((p) => p.projectId === projectId)
    const newPositions: Position[] = []

    positionBudgets.forEach((positionBudget) => {
      displayMonths.forEach((displayMonth) => {
        const value = positionBudget.budgets[displayMonth.globalIndex] || 0
        if (value > 0) {
          const existingPos = existingPositions.find(
            (p) => p.monthIndex === displayMonth.globalIndex && p.name === positionBudget.name,
          )
          const project = projects.find((p) => p.id === projectId)
          const mode = project?.allocationMode || 'percentage'
          
          const position: Position = {
            id: existingPos?.id || `pos-${projectId}-${positionBudget.id}-${displayMonth.globalIndex}`,
            projectId,
            monthIndex: displayMonth.globalIndex,
            percentage: mode === 'days' ? (value / getWorkingDaysInMonth(displayMonth.year, displayMonth.month, 1)) * 100 : value,
            allocated: existingPos?.allocated || 0,
            name: positionBudget.name,
            projectTask: positionBudget.projectTask,
            days: mode === 'days' ? value : undefined,
          }
          newPositions.push(position)
        }
      })
    })

    const otherPositions = positions.filter((p) => p.projectId !== projectId)
    onUpdatePositions([...otherPositions, ...newPositions])

    // Clean up allocations for removed positions
    if (onCleanupAllocations) {
      const validPositionIds = newPositions.map(p => p.id)
      onCleanupAllocations(projectId, validPositionIds)
    }

    // Now update the project
    onUpdateProject(projectId, {
      name: newProjectName,
      color: selectedColor,
      startMonth: projectStartMonth,
      startYear: projectStartYear,
      endMonth: projectEndMonth,
      endYear: projectEndYear,
      allocationMode,
    })

    // Close the edit modal immediately so the project list re-renders with the new color
    setEditingProjectId(null)

    setNewProjectName("")
    setSelectedColor("#3B82F6")
    setPositionBudgets([])
    setProjectStartMonth(0)
    setProjectStartYear(2024)
    setProjectEndMonth(0)
    setProjectEndYear(2024)
    setMonthTablePage(0)
    setAllocationMode('percentage')
  }

  const handleAddPositionLine = () => {
    setPositionBudgets([
      ...positionBudgets,
      {
        id: `pos-${Date.now()}`,
        name: "New Position",
        budgets: {},
      },
    ])
  }

  const handleDeletePositionLine = (id: string) => {
    setPositionBudgets(positionBudgets.filter((p) => p.id !== id))
  }

  const handleUpdatePositionName = (id: string, name: string) => {
    setPositionBudgets(positionBudgets.map((p) => (p.id === id ? { ...p, name } : p)))
  }

  const handleUpdateProjectTask = (id: string, projectTask: string) => {
    setPositionBudgets(positionBudgets.map((p) => (p.id === id ? { ...p, projectTask } : p)))
  }

  const handleUpdatePositionBudget = (id: string, globalMonthIndex: number, value: number) => {
    setPositionBudgets(
      positionBudgets.map((p) => (p.id === id ? { ...p, budgets: { ...p.budgets, [globalMonthIndex]: value } } : p)),
    )
  }

  const exportPositionsToExcel = () => {
    if (positionBudgets.length === 0) {
      alert("No positions to export")
      return
    }

    let csvContent = ""
    
    // Create header row with project task, position name and all months
    const headerRow = ["Project Task", "Position Name", ...displayMonths.map(m => m.displayName)]
    csvContent += headerRow.join(",") + "\n"
    
    // Add data rows for each position (only include positions with names)
    positionBudgets
      .filter(p => p.name.trim() !== "")
      .forEach(position => {
        const row = [position.projectTask || "", position.name]
        displayMonths.forEach(month => {
          const value = position.budgets[month.globalIndex] || 0
          row.push(value.toString())
        })
        csvContent += row.join(",") + "\n"
      })
    
    // Create and download the file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    
    const projectName = newProjectName || "Project"
    const fileName = `${projectName}-positions-${allocationMode}-${new Date().toISOString().split('T')[0]}.csv`
    link.setAttribute('href', url)
    link.setAttribute('download', fileName)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const importPositionsFromExcel = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string
        const lines = text.split('\n').filter(line => line.trim())
        
        if (lines.length < 2) {
          alert("File must contain at least a header row and one data row")
          return
        }

        // Parse header row to get months
        const headers = lines[0].split(',').map(h => h.trim())
        const monthHeaders = headers.slice(2) // Remove "Project Task" and "Position Name"
        
        // Parse data rows
        const importedPositions: PositionBudget[] = []
        
        for (let i = 1; i < lines.length; i++) {
          const values = lines[i].split(',').map(v => v.trim())
          if (values.length < 3 || !values[1]) continue // Skip empty rows
          
          const projectTask = values[0]
          const positionName = values[1]
          const budgets: Record<number, number> = {}
          
          // Map values to months
          values.slice(2).forEach((value, index) => {
            if (index < displayMonths.length) {
              const numValue = parseFloat(value) || 0
              budgets[displayMonths[index].globalIndex] = numValue
            }
          })
          
          importedPositions.push({
            id: `imported-${positionName}-${Date.now()}-${i}`,
            name: positionName,
            projectTask,
            budgets
          })
        }
        
        if (importedPositions.length > 0) {
          if (positionBudgets.some(p => p.name.trim() !== "")) {
            const confirmReplace = confirm(
              `Import will replace existing positions with ${importedPositions.length} imported positions. Continue?`
            )
            if (!confirmReplace) return
          }
          
          // Update the positionBudgets state for the table display
          setPositionBudgets(importedPositions)
          
          alert(`Successfully imported ${importedPositions.length} positions`)
        } else {
          alert("No valid position data found in file")
        }
      } catch (error) {
        console.error('Import error:', error)
        alert("Error importing file. Please check the file format and try again.")
      }
    }
    
    reader.onerror = () => {
      alert("Error reading file")
    }
    
    reader.readAsText(file)
    
    // Reset the file input
    if (event.target) {
      event.target.value = ''
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 items-center">
        {projects.map((project) => {
          // Determine if text should be white or black based on background color brightness
          const getContrastColor = (hex: string) => {
            const r = parseInt(hex.slice(1, 3), 16)
            const g = parseInt(hex.slice(3, 5), 16)
            const b = parseInt(hex.slice(5, 7), 16)
            const brightness = (r * 299 + g * 587 + b * 114) / 1000
            return brightness > 128 ? "#000" : "#fff"
          }
          const textColor = getContrastColor(project.color)
          
          return (
            <div
              key={project.id}
              className={`flex items-center justify-between px-3 py-1.5 rounded border border-border cursor-pointer hover:opacity-80 transition-opacity w-32 h-8 ${
                selectedProjectId === project.id ? 'ring-2 ring-offset-2 ring-blue-500' : ''
              }`}
              style={{ backgroundColor: project.color, color: textColor }}
              onClick={() => {
                if (onProjectSelect) {
                  onProjectSelect(selectedProjectId === project.id ? null : project.id)
                }
              }}
            >
              <span className="text-xs font-medium truncate flex-1">{project.name}</span>
              {canEditProjects && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleEditProject(project.id)
                  }}
                  className="px-1.5 py-0.5 text-[10px] bg-white/20 rounded hover:bg-white/30 transition-colors flex-shrink-0"
                  style={{ color: textColor }}
                >
                  Edit
                </button>
              )}
            </div>
          )
        })}
        {canEditProjects && (
          <button
            onClick={() => setShowCreateModal(true)}
            className="px-4 py-2 bg-primary text-primary-foreground rounded font-medium hover:bg-primary/90 transition-colors text-sm"
          >
            + New Project
          </button>
        )}
      </div>

      {(showCreateModal || editingProjectId) && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card p-6 rounded-lg border border-border shadow-lg w-full h-full mx-4 overflow-y-auto">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              {editingProjectId ? "Edit Project" : "Create New Project"}
            </h2>

            <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-2 block">Project Name</label>
                <input
                  type="text"
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded text-foreground bg-card"
                  placeholder="Enter project name"
                  disabled={!canEditProjects}
                  autoFocus
                />
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground mb-2 block">Project Color</label>
                <div className="flex gap-2 flex-wrap">
                  {COLORS.map((color) => (
                    <button
                      key={color}
                      onClick={() => {
                        console.log("[v0] Color picker clicked, setting color to:", color)
                        setSelectedColor(color)
                      }}
                      className={`w-8 h-8 rounded transition-all ${selectedColor === color ? "ring-2 ring-offset-2 ring-primary" : "hover:opacity-80"}`}
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="text-xs font-medium text-muted-foreground mb-2 block">Allocation Mode</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="allocationMode"
                    value="percentage"
                    checked={allocationMode === 'percentage'}
                    onChange={(e) => setAllocationMode('percentage')}
                    className="text-primary"
                    disabled={!canEditProjects}
                  />
                  <span className="text-sm">% Allocation</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="allocationMode"
                    value="days"
                    checked={allocationMode === 'days'}
                    onChange={(e) => setAllocationMode('days')}
                    className="text-primary"
                    disabled={!canEditProjects}
                  />
                  <span className="text-sm">Day Allocation</span>
                </label>
              </div>
            </div>

            <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-2 block">Start Month</label>
                <select
                  value={projectStartMonth}
                  onChange={(e) => setProjectStartMonth(Number(e.target.value))}
                  className="border border-border rounded px-3 py-2 w-full text-sm bg-background text-foreground"
                  disabled={!canEditProjects}
                >
                  {MONTHS.map((month, idx) => (
                    <option key={idx} value={idx}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground mb-2 block">Start Year</label>
                <select
                  value={projectStartYear}
                  onChange={(e) => setProjectStartYear(Number(e.target.value))}
                  className="border border-border rounded px-3 py-2 w-full text-sm bg-background text-foreground"
                  disabled={!canEditProjects}
                >
                  {YEARS.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground mb-2 block">End Month</label>
                <select
                  value={projectEndMonth}
                  onChange={(e) => setProjectEndMonth(Number(e.target.value))}
                  className="border border-border rounded px-3 py-2 w-full text-sm bg-background text-foreground"
                  disabled={!canEditProjects}
                >
                  {MONTHS.map((month, idx) => (
                    <option key={idx} value={idx}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground mb-2 block">End Year</label>
                <select
                  value={projectEndYear}
                  onChange={(e) => setProjectEndYear(Number(e.target.value))}
                  className="border border-border rounded px-3 py-2 w-full text-sm bg-background text-foreground"
                  disabled={!canEditProjects}
                >
                  {YEARS.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-medium text-muted-foreground">
                  Positions by Month ({allocationMode === 'days' ? 'Days' : '%'}) - Page {monthTablePage + 1} of {maxPages}
                </label>
                <div className="flex gap-2 items-center">
                  <button
                    onClick={() => setMonthTablePage(Math.max(0, monthTablePage - 1))}
                    disabled={monthTablePage === 0}
                    className="px-3 py-1 text-xs bg-primary text-primary-foreground rounded hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    ← Prev 12
                  </button>
                  <button
                    onClick={() => setMonthTablePage(Math.min(maxPages - 1, monthTablePage + 1))}
                    disabled={monthTablePage >= maxPages - 1}
                    className="px-3 py-1 text-xs bg-primary text-primary-foreground rounded hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next 12 →
                  </button>
                  <button
                    onClick={handleAddPositionLine}
                    className="px-3 py-1 text-xs bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
                    disabled={!canEditProjects}
                  >
                    + Add Position
                  </button>
                  <button
                    onClick={exportPositionsToExcel}
                    className="px-3 py-1 text-xs bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                    title="Export positions to Excel"
                  >
                    📥 Export
                  </button>
                  <button
                    onClick={() => document.getElementById('excel-import-input')?.click()}
                    className="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    title="Import positions from Excel"
                    disabled={!canEditProjects}
                  >
                    📤 Import
                  </button>
                  <input
                    id="excel-import-input"
                    type="file"
                    accept=".xlsx,.xls,.csv"
                    onChange={importPositionsFromExcel}
                    style={{ display: 'none' }}
                    disabled={!canEditProjects}
                  />
                </div>
              </div>
              <div className="border border-border rounded overflow-x-auto">
                <table className="w-full text-[10px]">
                  <thead className="bg-muted border-b border-border">
                    <tr>
                      <th className="px-4 py-2 text-left font-semibold text-muted-foreground min-w-20">
                        Project Task
                      </th>
                      <th className="px-4 py-2 text-left font-semibold text-muted-foreground min-w-40">
                        Position Name
                      </th>
                      {displayMonths.map((displayMonth) => (
                        <th
                          key={displayMonth.globalIndex}
                          className="px-4 py-2 text-center font-semibold text-muted-foreground min-w-20"
                        >
                          {displayMonth.displayName}
                        </th>
                      ))}
                      <th className="px-4 py-2 text-center font-semibold text-muted-foreground w-10">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {positionBudgets.length === 0 ? (
                      <tr>
                        <td colSpan={displayMonths.length + 3} className="px-4 py-8 text-center text-muted-foreground">
                          No positions yet. Click "Add Position" to create one.
                        </td>
                      </tr>
                    ) : (
                      positionBudgets.map((positionBudget) => (
                        <tr key={positionBudget.id} className="border-t border-border hover:bg-muted/50">
                          <td className="px-4 py-2 border-r border-border">
                            <input
                              type="text"
                              value={positionBudget.projectTask || ""}
                              onChange={(e) => handleUpdateProjectTask(positionBudget.id, e.target.value)}
                              className="w-full px-2 py-1 border border-border rounded text-foreground bg-card"
                              placeholder="e.g., 01.03.01"
                              disabled={!canEditProjects}
                            />
                          </td>
                          <td className="px-4 py-2 border-r border-border">
                            <input
                              type="text"
                              value={positionBudget.name}
                              onChange={(e) => handleUpdatePositionName(positionBudget.id, e.target.value)}
                              className="w-full px-2 py-1 border border-border rounded text-foreground bg-card"
                              placeholder="e.g., Senior Developer"
                              disabled={!canEditProjects}
                            />
                          </td>
                          {displayMonths.map((displayMonth) => (
                            <td
                              key={displayMonth.globalIndex}
                              className="px-4 py-2 border-r border-border last:border-r-0 bg-background"
                            >
                              <input
                                type="number"
                                min="0"
                                max={allocationMode === 'days' ? getWorkingDaysInMonth(displayMonth.year, displayMonth.month, 1) : 999}
                                value={positionBudget.budgets[displayMonth.globalIndex] || ""}
                                onChange={(e) =>
                                  handleUpdatePositionBudget(
                                    positionBudget.id,
                                    displayMonth.globalIndex,
                                    e.target.value ? Number(e.target.value) : 0,
                                  )
                                }
                                className="w-full px-2 py-1 text-center border border-border rounded text-foreground bg-card"
                                placeholder={allocationMode === 'days' ? `0-${getWorkingDaysInMonth(displayMonth.year, displayMonth.month, 1)} days` : "0%"}
                                disabled={!canEditProjects}
                              />
                            </td>
                          ))}
                          <td className="px-4 py-2 text-center">
                            <button
                              onClick={() => handleDeletePositionLine(positionBudget.id)}
                              className="px-2 py-1 text-xs bg-destructive text-destructive-foreground rounded hover:bg-destructive/90 transition-colors"
                              disabled={!canEditProjects}
                            >
                              ✕
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex gap-2 justify-end">
              <button
                onClick={() => {
                  setShowCreateModal(false)
                  setEditingProjectId(null)
                  setNewProjectName("")
                  setSelectedColor("#3B82F6")
                  setPositionBudgets([])
                  setProjectStartMonth(0)
                  setProjectStartYear(2024)
                  setProjectEndMonth(0)
                  setProjectEndYear(2024)
                  setMonthTablePage(0)
                  setAllocationMode('percentage')
                }}
                className="px-4 py-2 bg-muted text-muted-foreground rounded font-medium hover:bg-muted/80 transition-colors text-sm"
              >
                Cancel
              </button>
              {editingProjectId && (
                <button
                  onClick={() => {
                    if (
                      window.confirm("Are you sure you want to delete this project? All positions will be removed.")
                    ) {
                      onDeleteProject(editingProjectId)
                      setEditingProjectId(null)
                      setNewProjectName("")
                      setSelectedColor("#3B82F6")
                      setPositionBudgets([])
                      setProjectStartMonth(0)
                      setProjectStartYear(2024)
                      setProjectEndMonth(0)
                      setProjectEndYear(2024)
                      setMonthTablePage(0)
                      setAllocationMode('percentage')
                    }
                  }}
                  className="px-4 py-2 bg-destructive text-black rounded font-medium hover:bg-destructive/90 transition-colors text-sm"
                >
                  Delete Project
                </button>
              )}
              <button
                onClick={editingProjectId ? handleSaveEditProject : handleCreateProject}
                className="px-4 py-2 bg-primary text-primary-foreground rounded font-medium hover:bg-primary/90 transition-colors text-sm"
                disabled={!canEditProjects}
              >
                {editingProjectId ? "Save Changes" : "Create Project"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
