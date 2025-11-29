import { supabase, Entity, EntityInsert } from './supabase'

export class EntityService {
  // Get all entities
  static async getEntities(): Promise<Entity[]> {
    try {
      const { data, error } = await supabase
        .from('entities')
        .select('*')
        .order('name')

      if (error) throw error
      return data || []
    } catch (error) {
      console.error('Error fetching entities:', error)
      return []
    }
  }

  // Get entity by ID
  static async getEntityById(id: string): Promise<Entity | null> {
    try {
      const { data, error } = await supabase
        .from('entities')
        .select('*')
        .eq('id', id)
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Error fetching entity:', error)
      return null
    }
  }

  // Create new entity
  static async createEntity(entity: EntityInsert): Promise<Entity | null> {
    try {
      const { data, error } = await supabase
        .from('entities')
        .insert([entity] as any)
        .select()
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Error creating entity:', error)
      return null
    }
  }

  // Update entity
  static async updateEntity(id: string, updates: Partial<EntityInsert>): Promise<Entity | null> {
    try {
      const { data, error } = await supabase
        .from('entities')
        .update({ ...updates, updated_at: new Date().toISOString() } as any)
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Error updating entity:', error)
      return null
    }
  }

  // Delete entity
  static async deleteEntity(id: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('entities')
        .delete()
        .eq('id', id)

      if (error) throw error
      return true
    } catch (error) {
      console.error('Error deleting entity:', error)
      return false
    }
  }

  // Search entities by name or description
  static async searchEntities(query: string): Promise<Entity[]> {
    try {
      const { data, error } = await supabase
        .from('entities')
        .select('*')
        .or(`name.ilike.%${query}%,description.ilike.%${query}%`)
        .order('name')

      if (error) throw error
      return data || []
    } catch (error) {
      console.error('Error searching entities:', error)
      return []
    }
  }

  // Get entities with project count
  static async getEntitiesWithProjectCount(): Promise<(Entity & { project_count: number })[]> {
    try {
      const { data, error } = await supabase
        .from('entities')
        .select(`
          *,
          projects:projects(id)
        `)
        .order('name')

      if (error) throw error
      
      return data?.map((entity: any) => ({
        ...entity,
        project_count: entity.projects?.length || 0
      })) || []
    } catch (error) {
      console.error('Error fetching entities with project count:', error)
      return []
    }
  }
}
