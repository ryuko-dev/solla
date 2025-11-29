import { supabase, Allocation, AllocationInsert } from './supabase'

export class AllocationService {
  // Get all allocations
  static async getAllocations(): Promise<Allocation[]> {
    try {
      const { data, error } = await supabase
        .from('allocations')
        .select('*')
        .order('project_id', { ascending: true })

      if (error) throw error
      return data || []
    } catch (error) {
      console.error('Error fetching allocations:', error)
      return []
    }
  }

  // Get allocations by project ID
  static async getAllocationsByProject(projectId: string): Promise<Allocation[]> {
    try {
      const { data, error } = await supabase
        .from('allocations')
        .select('*')
        .eq('project_id', projectId)
        .order('user_id', { ascending: true })

      if (error) throw error
      return data || []
    } catch (error) {
      console.error('Error fetching allocations by project:', error)
      return []
    }
  }

  // Get allocations by user ID
  static async getAllocationsByUser(userId: string): Promise<Allocation[]> {
    try {
      const { data, error } = await supabase
        .from('allocations')
        .select('*')
        .eq('user_id', userId)
        .order('project_id', { ascending: true })

      if (error) throw error
      return data || []
    } catch (error) {
      console.error('Error fetching allocations by user:', error)
      return []
    }
  }

  // Get allocations by position ID
  static async getAllocationsByPosition(positionId: string): Promise<Allocation[]> {
    try {
      const { data, error } = await supabase
        .from('allocations')
        .select('*')
        .eq('position_id', positionId)
        .order('user_id', { ascending: true })

      if (error) throw error
      return data || []
    } catch (error) {
      console.error('Error fetching allocations by position:', error)
      return []
    }
  }

  // Get allocation by ID
  static async getAllocationById(id: string): Promise<Allocation | null> {
    try {
      const { data, error } = await supabase
        .from('allocations')
        .select('*')
        .eq('id', id)
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Error fetching allocation:', error)
      return null
    }
  }

  // Create new allocation
  static async createAllocation(allocation: AllocationInsert): Promise<Allocation | null> {
    try {
      const { data, error } = await supabase
        .from('allocations')
        .insert([allocation] as any)
        .select()
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Error creating allocation:', error)
      return null
    }
  }

  // Update allocation
  static async updateAllocation(id: string, updates: Partial<AllocationInsert>): Promise<Allocation | null> {
    try {
      const { data, error } = await supabase
        .from('allocations')
        .update({ ...updates, updated_at: new Date().toISOString() } as any)
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Error updating allocation:', error)
      return null
    }
  }

  // Delete allocation
  static async deleteAllocation(id: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('allocations')
        .delete()
        .eq('id', id)

      if (error) throw error
      return true
    } catch (error) {
      console.error('Error deleting allocation:', error)
      return false
    }
  }

  // Delete allocations by project ID
  static async deleteAllocationsByProject(projectId: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('allocations')
        .delete()
        .eq('project_id', projectId)

      if (error) throw error
      return true
    } catch (error) {
      console.error('Error deleting allocations by project:', error)
      return false
    }
  }

  // Delete allocations by position ID
  static async deleteAllocationsByPosition(positionId: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('allocations')
        .delete()
        .eq('position_id', positionId)

      if (error) throw error
      return true
    } catch (error) {
      console.error('Error deleting allocations by position:', error)
      return false
    }
  }

  // Get allocations with full relationship data
  static async getAllocationsWithDetails(): Promise<(Allocation & {
    user_name: string;
    project_name: string;
    position_name: string;
  })[]> {
    try {
      const { data, error } = await supabase
        .from('allocations')
        .select(`
          *,
          users:users(name),
          projects:projects(name),
          positions:positions(name)
        `)
        .order('project_id', { ascending: true })

      if (error) throw error
      
      return data?.map((allocation: any) => ({
        ...allocation,
        user_name: allocation.users?.name || 'Unknown User',
        project_name: allocation.projects?.name || 'Unknown Project',
        position_name: allocation.positions?.name || 'Unknown Position'
      })) || []
    } catch (error) {
      console.error('Error fetching allocations with details:', error)
      return []
    }
  }

  // Get user allocations for a specific month
  static async getUserAllocationsByMonth(userId: string, monthIndex: number): Promise<Allocation[]> {
    try {
      const { data, error } = await supabase
        .from('allocations')
        .select('*')
        .eq('user_id', userId)
        .eq('month_index', monthIndex)
        .order('project_id', { ascending: true })

      if (error) throw error
      return data || []
    } catch (error) {
      console.error('Error fetching user allocations by month:', error)
      return []
    }
  }

  // Get project allocations for a specific month
  static async getProjectAllocationsByMonth(projectId: string, monthIndex: number): Promise<Allocation[]> {
    try {
      const { data, error } = await supabase
        .from('allocations')
        .select('*')
        .eq('project_id', projectId)
        .eq('month_index', monthIndex)
        .order('user_id', { ascending: true })

      if (error) throw error
      return data || []
    } catch (error) {
      console.error('Error fetching project allocations by month:', error)
      return []
    }
  }

  // Create multiple allocations for a position
  static async createPositionAllocations(
    positionId: string,
    positionName: string,
    allocations: Array<{ user_id: string; month_index: number; percentage: number }>
  ): Promise<Allocation[]> {
    try {
      const allocationData = allocations.map(alloc => ({
        position_id: positionId,
        position_name: positionName,
        user_id: alloc.user_id,
        month_index: alloc.month_index,
        percentage: alloc.percentage
      }))

      const { data, error } = await supabase
        .from('allocations')
        .insert(allocationData as any)
        .select()

      if (error) throw error
      return data || []
    } catch (error) {
      console.error('Error creating position allocations:', error)
      return []
    }
  }

  // Update position allocated percentage
  static async updatePositionAllocatedPercentage(positionId: string): Promise<boolean> {
    try {
      // First, get all allocations for this position
      const { data: allocations, error: fetchError } = await supabase
        .from('allocations')
        .select('percentage')
        .eq('position_id', positionId)

      if (fetchError) throw fetchError

      // Calculate total allocated percentage
      const totalAllocated = allocations?.reduce((sum, alloc) => sum + (alloc.percentage || 0), 0) || 0

      // Update the position
      const { error: updateError } = await supabase
        .from('positions')
        .update({ allocated_percentage: totalAllocated } as any)
        .eq('id', positionId)

      if (updateError) throw updateError
      return true
    } catch (error) {
      console.error('Error updating position allocated percentage:', error)
      return false
    }
  }
}
