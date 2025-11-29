import { supabase, Position, PositionInsert } from './supabase'

export class PositionService {
  // Get all positions
  static async getPositions(): Promise<Position[]> {
    try {
      const { data, error } = await supabase
        .from('positions')
        .select('*')
        .order('project_id', { ascending: true })

      if (error) throw error
      return data || []
    } catch (error) {
      console.error('Error fetching positions:', error)
      return []
    }
  }

  // Get positions by project ID
  static async getPositionsByProject(projectId: string): Promise<Position[]> {
    try {
      const { data, error } = await supabase
        .from('positions')
        .select('*')
        .eq('project_id', projectId)
        .order('month_index', { ascending: true })

      if (error) throw error
      return data || []
    } catch (error) {
      console.error('Error fetching positions by project:', error)
      return []
    }
  }

  // Get position by ID
  static async getPositionById(id: string): Promise<Position | null> {
    try {
      const { data, error } = await supabase
        .from('positions')
        .select('*')
        .eq('id', id)
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Error fetching position:', error)
      return null
    }
  }

  // Create new position
  static async createPosition(position: PositionInsert): Promise<Position | null> {
    try {
      const { data, error } = await supabase
        .from('positions')
        .insert([position] as any)
        .select()
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Error creating position:', error)
      return null
    }
  }

  // Update position
  static async updatePosition(id: string, updates: Partial<PositionInsert>): Promise<Position | null> {
    try {
      const { data, error } = await supabase
        .from('positions')
        .update({ ...updates, updated_at: new Date().toISOString() } as any)
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Error updating position:', error)
      return null
    }
  }

  // Delete position
  static async deletePosition(id: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('positions')
        .delete()
        .eq('id', id)

      if (error) throw error
      return true
    } catch (error) {
      console.error('Error deleting position:', error)
      return false
    }
  }

  // Delete positions by project ID
  static async deletePositionsByProject(projectId: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('positions')
        .delete()
        .eq('project_id', projectId)

      if (error) throw error
      return true
    } catch (error) {
      console.error('Error deleting positions by project:', error)
      return false
    }
  }

  // Search positions by name
  static async searchPositions(query: string): Promise<Position[]> {
    try {
      const { data, error } = await supabase
        .from('positions')
        .select('*')
        .ilike('name', `%${query}%`)
        .order('name')

      if (error) throw error
      return data || []
    } catch (error) {
      console.error('Error searching positions:', error)
      return []
    }
  }

  // Get positions with project info
  static async getPositionsProjectInfo(): Promise<(Position & { project_name: string })[]> {
    try {
      const { data, error } = await supabase
        .from('positions')
        .select(`
          *,
          projects:projects(name)
        `)
        .order('project_id', { ascending: true })

      if (error) throw error
      
      return data?.map((position: any) => ({
        ...position,
        project_name: position.projects?.name || 'Unknown Project'
      })) || []
    } catch (error) {
      console.error('Error fetching positions with project info:', error)
      return []
    }
  }

  // Create multiple positions for a project
  static async createProjectPositions(
    projectId: string, 
    positions: Array<{ name: string; month_index: number; percentage: number }>
  ): Promise<Position[]> {
    try {
      const positionData = positions.map(pos => ({
        project_id: projectId,
        name: pos.name,
        month_index: pos.month_index,
        percentage: pos.percentage,
        allocated_percentage: 0
      }))

      const { data, error } = await supabase
        .from('positions')
        .insert(positionData as any)
        .select()

      if (error) throw error
      return data || []
    } catch (error) {
      console.error('Error creating project positions:', error)
      return []
    }
  }
}
