"use client"

import type React from "react"
import { X } from "lucide-react"
import type { Allocation } from "./allocation-grid"

interface AllocationBarProps {
  allocation: Allocation
  project?: { id: string; name: string; color: string }
  isFirstMonth: boolean
  onDragStart: (barId: string, event: React.MouseEvent) => void
  onRemove: (id: string) => void
}

export function AllocationBar({ allocation, project, isFirstMonth, onDragStart, onRemove }: AllocationBarProps) {
  if (!project) return null

  return (
    <div
      draggable
      onMouseDown={(e) => onDragStart(allocation.id, e)}
      className="group absolute top-2 left-2 right-2 h-12 rounded px-2 py-1 text-white text-xs font-medium cursor-grab active:cursor-grabbing select-none hover:shadow-lg transition-shadow flex items-center justify-between"
      style={{
        backgroundColor: project.color,
        opacity: 0.9,
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.opacity = "1"
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.opacity = "0.9"
      }}
    >
      {isFirstMonth && <span className="truncate flex-1">{project.name}</span>}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onRemove(allocation.id)
        }}
        className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-1"
        title="Remove allocation"
      >
        <X size={14} />
      </button>
    </div>
  )
}
