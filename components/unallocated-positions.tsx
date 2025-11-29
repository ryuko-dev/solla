"use client"

import type { Project, Allocation } from "@/lib/types"

interface UnallocatedPositionsProps {
  projects: Project[]
  allocations: Allocation[]
  selectedMonth: number | null
  displayMonths: Array<{ month: number; year: number; globalIndex: number; display: string }>
}

export function UnallocatedPositions({
  projects,
  allocations,
  selectedMonth,
  displayMonths,
}: UnallocatedPositionsProps) {
  if (selectedMonth === null) {
    return (
      <div className="border-border rounded-lg p-4 bg-muted/20 min-w-64 border-4">
        <p className="text-sm text-muted-foreground">Select a month to see unallocated positions</p>
      </div>
    )
  }

  const unallocatedPositions = projects.flatMap((project) => {
    // Get all positions for this project that match the selected month
    const positionsForMonth =
      projects.find((p) => p.id === project.id)?.positions?.filter((pos) => pos.monthIndex === selectedMonth) || []

    const results = positionsForMonth
      .map((position) => {
        const allocated = allocations
          .filter((a) => a.projectId === project.id && a.monthIndex === selectedMonth && a.positionId === position.id)
          .reduce((sum, a) => sum + a.percentage, 0)

        const unallocated = Math.max(0, position.percentage - allocated)
        if (unallocated <= 0) return null

        return {
          projectId: project.id,
          projectName: project.name,
          projectColor: project.color,
          positionId: position.id,
          positionName: position.name || "Position",
          percentage: unallocated,
        }
      })
      .filter((p): p is NonNullable<typeof p> => p != null)

    return results
  })

  if (unallocatedPositions.length === 0) {
    return (
      <div className="border border-border rounded-lg p-4 bg-muted/20 min-w-64">
        <p className="text-sm text-muted-foreground">
          {selectedMonth === null 
            ? "Select a month to see unallocated positions" 
            : "No unallocated positions for this month"}
        </p>
      </div>
    )
  }

  return (
    <div className="border border-border rounded-lg p-3 bg-muted/20 min-w-64">
      <h3 className="font-semibold text-xs mb-2 tracking-wide text-muted-foreground">
        {selectedMonth !== null 
          ? `Unallocated Positions (${displayMonths[selectedMonth % 12]?.display})`
          : 'Unallocated Positions'}
      </h3>

      {/* Show compact bars side by side; text on top, no percentage-based fill length */}
      <div className="flex flex-wrap gap-1">
        {unallocatedPositions.map((pos) => {
          const project = projects.find((p) => p.id === pos.projectId)

          return (
            <div
              key={`${pos.projectId}-${pos.positionId}`}
              className="flex items-center h-5 rounded overflow-hidden bg-gray-100 text-[10px] text-white"
              style={{
                minWidth: '60px',
                maxWidth: '140px',
              }}
              title={`${project?.name ?? 'Project'} - ${pos.positionName} (${pos.percentage}% unallocated)`}
            >
              <div
                className="h-full flex items-center justify-center px-1 truncate"
                style={{
                  backgroundColor: project?.color || '#3b82f6',
                  width: '100%',
                }}
              >
                {pos.positionName} ({pos.percentage}%)
              </div>
            </div>
          )
        })}
      </div>
      
      {selectedMonth !== null && (
        <div className="mt-3 text-xs text-muted-foreground text-center">
          Click on a cell in the grid to allocate this position
        </div>
      )}
    </div>
  )
}
