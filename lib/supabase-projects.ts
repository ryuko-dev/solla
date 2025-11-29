import { supabase, Project, ProjectInsert, Entity } from './supabase'

export type ProjectWithEntity = Project & {
  entities: Entity | null
}

export class ProjectService {
  // Get all projects
  static async getProjects(): Promise<ProjectWithEntity[]> {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select(`
          *,
          entities:entities(id, name)
        `)
        .order('name')

      if (error) throw error
      return data || []
    } catch (error) {
      console.error('Error fetching projects:', error)
      return []
    }
  }

  // Get project by ID
  static async getProjectById(id: string): Promise<ProjectWithEntity | null> {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select(`
          *,
          entities:entities(id, name)
        `)
        .eq('id', id)
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Error fetching project:', error)
      return null
    }
  }

  // Create new project
  static async createProject(project: ProjectInsert): Promise<ProjectWithEntity | null> {
    try {
      const { data, error } = await supabase
        .from('projects')
        .insert([project] as any)
        .select(`
          *,
          entities:entities(id, name)
        `)
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Error creating project:', error)
      return null
    }
  }

  // Update project
  static async updateProject(id: string, updates: Partial<Omit<ProjectInsert, 'id'>>): Promise<ProjectWithEntity | null> {
    try {
      const { data, error } = await supabase
        .from('projects')
        .update({ ...updates, updated_at: new Date().toISOString() } as any)
        .eq('id', id)
        .select(`
          *,
          entities:entities(id, name)
        `)
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Error updating project:', error)
      return null
    }
  }

  // Delete project
  static async deleteProject(id: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id)

      if (error) throw error
      return true
    } catch (error) {
      console.error('Error deleting project:', error)
      return false
    }
  }

  // Search projects by name or description
  static async searchProjects(query: string): Promise<ProjectWithEntity[]> {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select(`
          *,
          entities:entities(id, name)
        `)
        .or(`name.ilike.%${query}%,description.ilike.%${query}%`)
        .order('name')

      if (error) throw error
      return data || []
    } catch (error) {
      console.error('Error searching projects:', error)
      return []
    }
  }

  // Get projects by entity ID
  static async getProjectsByEntity(entityId: string): Promise<ProjectWithEntity[]> {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select(`
          *,
          entities:entities(id, name)
        `)
        .eq('entity_id', entityId)
        .order('name')

      if (error) throw error
      return data || []
    } catch (error) {
      console.error('Error fetching projects by entity:', error)
      return []
    }
  }

  // Get projects by date range
  static async getProjectsByDateRange(startYear: number, endYear: number): Promise<ProjectWithEntity[]> {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select(`
          *,
          entities:entities(id, name)
        `)
        .gte('start_year', startYear)
        .lte('end_year', endYear)
        .order('name')

      if (error) throw error
      return data || []
    } catch (error) {
      console.error('Error fetching projects by date range:', error)
      return []
    }
  }

  // Get projects with position count
  static async getProjectsPositionCount(): Promise<(ProjectWithEntity & { position_count: number })[]> {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select(`
          *,
          entities:entities(id, name),
          positions:positions(id)
        `)
        .order('name')

      if (error) throw error
      
      return data?.map((project: any) => ({
        ...project,
        position_count: project.positions?.length || 0
      })) || []
    } catch (error) {
      console.error('Error fetching projects with position count:', error)
      return []
    }
  }
}
