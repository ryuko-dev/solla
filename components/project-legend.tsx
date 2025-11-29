interface ProjectLegendProps {
  projects: Array<{ id: string; name: string; color: string }>
}

export function ProjectLegend({ projects }: ProjectLegendProps) {
  return (
    <div className="flex flex-wrap gap-6">
      {projects.map((project) => (
        <div key={project.id} className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: project.color }} />
          <span className="text-sm font-medium text-foreground">{project.name}</span>
        </div>
      ))}
    </div>
  )
}
