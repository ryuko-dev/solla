"use client"

import { useState, useEffect } from "react"
import { AllocationService } from "../lib/supabase-allocations"
import { PositionService } from "../lib/supabase-positions"
import { UserService } from "../lib/supabase-users"
import { ProjectService, ProjectWithEntity } from "../lib/supabase-projects"
import type { Allocation, AllocationInsert } from "../lib/supabase"
import type { User, Position, Project } from "../lib/supabase"

interface AllocationManagementProps {
  isOpen: boolean
  onClose: () => void
}

export function AllocationManagementSupabase({ isOpen, onClose }: AllocationManagementProps) {
  const [allocations, setAllocations] = useState<(Allocation & {
    user_name: string;
    project_name: string;
    position_name: string;
  })[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [positions, setPositions] = useState<Position[]>([])
  const [projects, setProjects] = useState<ProjectWithEntity[]>([])
  const [loading, setLoading] = useState(false)
  const [editingAllocation, setEditingAllocation] = useState<Allocation | null>(null)
  const [formData, setFormData] = useState<AllocationInsert>({
    user_id: '',
    project_id: '',
    position_id: '',
    position_name: '',
    month_index: 0,
    percentage: 100
  })
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedUser, setSelectedUser] = useState<string>('')
  const [selectedProject, setSelectedProject] = useState<string>('')

  useEffect(() => {
    if (isOpen) {
      loadData()
    }
  }, [isOpen])

  const loadData = async () => {
    setLoading(true)
    try {
      const [fetchedAllocations, fetchedUsers, fetchedPositions, fetchedProjects] = await Promise.all([
        AllocationService.getAllocationsWithDetails(),
        UserService.getUsers(),
        PositionService.getPositions(),
        ProjectService.getProjects()
      ])
      setAllocations(fetchedAllocations)
      setUsers(fetchedUsers)
      setPositions(fetchedPositions)
      setProjects(fetchedProjects)
    } catch (error) {
      console.error('Error loading data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (editingAllocation) {
        // Update existing allocation
        const updated = await AllocationService.updateAllocation(editingAllocation.id, formData)
        if (updated) {
          await loadData() // Reload to get updated details
        }
      } else {
        // Create new allocation
        const created = await AllocationService.createAllocation(formData)
        if (created) {
          await loadData() // Reload to get updated details
          await AllocationService.updatePositionAllocatedPercentage(formData.position_id)
        }
      }

      // Reset form
      resetForm()
    } catch (error) {
      console.error('Error saving allocation:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (allocation: any) => {
    setEditingAllocation(allocation)
    setFormData({
      user_id: allocation.user_id,
      project_id: allocation.project_id,
      position_id: allocation.position_id,
      position_name: allocation.position_name,
      month_index: allocation.month_index,
      percentage: allocation.percentage
    })
  }

  const handleDelete = async (id: string, positionId: string) => {
    if (!confirm('Are you sure you want to delete this allocation?')) {
      return
    }

    setLoading(true)
    try {
      const success = await AllocationService.deleteAllocation(id)
      if (success) {
        await loadData() // Reload to get updated details
        await AllocationService.updatePositionAllocatedPercentage(positionId)
      }
    } catch (error) {
      console.error('Error deleting allocation:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      loadData()
      return
    }

    setLoading(true)
    try {
      const allAllocations = await AllocationService.getAllocationsWithDetails()
      const filtered = allAllocations.filter(alloc => 
        alloc.user_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alloc.position_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alloc.project_name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setAllocations(filtered)
    } catch (error) {
      console.error('Error searching allocations:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleUserFilter = async () => {
    if (!selectedUser) {
      loadData()
      return
    }

    setLoading(true)
    try {
      const userAllocations = await AllocationService.getAllocationsByUser(selectedUser)
      // Get detailed info for user allocations
      const detailedAllocations = await Promise.all(
        userAllocations.map(async (alloc) => {
          const user = users.find(u => u.id === alloc.user_id)
          const project = projects.find(p => p.id === alloc.project_id)
          const position = positions.find(p => p.id === alloc.position_id)
          return {
            ...alloc,
            user_name: user?.name || 'Unknown User',
            project_name: project?.name || 'Unknown Project',
            position_name: position?.name || 'Unknown Position'
          }
        })
      )
      setAllocations(detailedAllocations)
    } catch (error) {
      console.error('Error filtering allocations by user:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleProjectFilter = async () => {
    if (!selectedProject) {
      loadData()
      return
    }

    setLoading(true)
    try {
      const projectAllocations = await AllocationService.getAllocationsByProject(selectedProject)
      // Get detailed info for project allocations
      const detailedAllocations = await Promise.all(
        projectAllocations.map(async (alloc) => {
          const user = users.find(u => u.id === alloc.user_id)
          const project = projects.find(p => p.id === alloc.project_id)
          const position = positions.find(p => p.id === alloc.position_id)
          return {
            ...alloc,
            user_name: user?.name || 'Unknown User',
            project_name: project?.name || 'Unknown Project',
            position_name: position?.name || 'Unknown Position'
          }
        })
      )
      setAllocations(detailedAllocations)
    } catch (error) {
      console.error('Error filtering allocations by project:', error)
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setFormData({
      user_id: '',
      project_id: '',
      position_id: '',
      position_name: '',
      month_index: 0,
      percentage: 100
    })
    setEditingAllocation(null)
  }

  const getMonthName = (monthIndex: number) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
                   'July', 'August', 'September', 'October', 'November', 'December']
    return months[monthIndex] || 'January'
  }

  const getUserName = (userId: string) => {
    const user = users.find(u => u.id === userId)
    return user?.name || 'Unknown User'
  }

  const getProjectName = (projectId: string) => {
    const project = projects.find(p => p.id === projectId)
    return project?.name || 'Unknown Project'
  }

  const getPositionName = (positionId: string) => {
    const position = positions.find(p => p.id === positionId)
    return position?.name || 'Unknown Position'
  }

  const getAvailablePositions = () => {
    if (!formData.project_id) return []
    return positions.filter(p => p.project_id === formData.project_id)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Allocation Management</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[70vh]">
          {/* Allocation Form */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-medium mb-4">
              {editingAllocation ? 'Edit Allocation' : 'Add New Allocation'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    User *
                  </label>
                  <select
                    required
                    value={formData.user_id}
                    onChange={(e) => setFormData({ ...formData, user_id: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a user</option>
                    {users.map((user) => (
                      <option key={user.id} value={user.id}>
                        {user.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project *
                  </label>
                  <select
                    required
                    value={formData.project_id}
                    onChange={(e) => {
                      setFormData({ 
                        ...formData, 
                        project_id: e.target.value,
                        position_id: '',
                        position_name: ''
                      })
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a project</option>
                    {projects.map((project) => (
                      <option key={project.id} value={project.id}>
                        {project.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Position *
                  </label>
                  <select
                    required
                    value={formData.position_id}
                    onChange={(e) => {
                      const position = positions.find(p => p.id === e.target.value)
                      setFormData({ 
                        ...formData, 
                        position_id: e.target.value,
                        position_name: position?.name || ''
                      })
                    }}
                    disabled={!formData.project_id}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                  >
                    <option value="">Select a position</option>
                    {getAvailablePositions().map((position) => (
                      <option key={position.id} value={position.id}>
                        {position.name} ({getMonthName(position.month_index)})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Month *
                  </label>
                  <select
                    required
                    value={formData.month_index}
                    onChange={(e) => setFormData({ ...formData, month_index: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i} value={i}>
                        {getMonthName(i)}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Percentage (%)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={formData.percentage}
                    onChange={(e) => setFormData({ ...formData, percentage: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="100"
                  />
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
                >
                  {loading ? 'Saving...' : (editingAllocation ? 'Update Allocation' : 'Add Allocation')}
                </button>
                {editingAllocation && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Search and Filter Bar */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search allocations..."
                className="flex-1 min-w-[200px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSearch}
                className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
              >
                Search
              </button>
              <select
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Users</option>
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </select>
              <button
                onClick={handleUserFilter}
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
              >
                Filter User
              </button>
              <select
                value={selectedProject}
                onChange={(e) => setSelectedProject(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Projects</option>
                {projects.map((project) => (
                  <option key={project.id} value={project.id}>
                    {project.name}
                  </option>
                ))}
              </select>
              <button
                onClick={handleProjectFilter}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Filter Project
              </button>
              <button
                onClick={loadData}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Allocations Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Position
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Project
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Month
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Percentage
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loading && allocations.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                      Loading allocations...
                    </td>
                  </tr>
                ) : allocations.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                      No allocations found
                    </td>
                  </tr>
                ) : (
                  allocations.map((allocation) => (
                    <tr key={allocation.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {allocation.user_name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {allocation.position_name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {allocation.project_name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {getMonthName(allocation.month_index)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          allocation.percentage === 100 ? 'bg-green-100 text-green-800' :
                          allocation.percentage >= 75 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {allocation.percentage}%
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => handleEdit(allocation)}
                          className="text-blue-600 hover:text-blue-900 mr-3"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(allocation.id, allocation.position_id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
