"use client"

import { useState } from "react"
import { PositionService } from "../../lib/supabase-positions"
import { AllocationService } from "../../lib/supabase-allocations"
import { ProjectService, ProjectWithEntity } from "../../lib/supabase-projects"
import { UserService } from "../../lib/supabase-users"
import { PositionManagementSupabase } from "../../components/position-management-supabase"
import { AllocationManagementSupabase } from "../../components/allocation-management-supabase"
import type { Position, Allocation } from "../../lib/supabase"
import type { User } from "../../lib/supabase"

export default function TestPositionsPage() {
  const [positions, setPositions] = useState<Position[]>([])
  const [allocations, setAllocations] = useState<Allocation[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [projects, setProjects] = useState<ProjectWithEntity[]>([])
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState<'positions' | 'allocations'>('positions')
  const [showPositionManagement, setShowPositionManagement] = useState(false)
  const [showAllocationManagement, setShowAllocationManagement] = useState(false)

  const loadPositions = async () => {
    setLoading(true)
    try {
      const fetchedPositions = await PositionService.getPositions()
      setPositions(fetchedPositions)
    } catch (error) {
      console.error('Error loading positions:', error)
    } finally {
      setLoading(false)
    }
  }

  const loadAllocations = async () => {
    setLoading(true)
    try {
      const fetchedAllocations = await AllocationService.getAllocationsWithDetails()
      setAllocations(fetchedAllocations)
    } catch (error) {
      console.error('Error loading allocations:', error)
    } finally {
      setLoading(false)
    }
  }

  const loadUsers = async () => {
    try {
      const fetchedUsers = await UserService.getUsers()
      setUsers(fetchedUsers)
    } catch (error) {
      console.error('Error loading users:', error)
    }
  }

  const loadProjects = async () => {
    try {
      const fetchedProjects = await ProjectService.getProjects()
      setProjects(fetchedProjects)
    } catch (error) {
      console.error('Error loading projects:', error)
    }
  }

  const testPositionSearch = async () => {
    try {
      const searchResults = await PositionService.searchPositions('developer')
      console.log('Position search results:', searchResults)
      alert(`Found ${searchResults.length} positions matching 'developer'`)
    } catch (error) {
      console.error('Error searching positions:', error)
    }
  }

  const testProjectPositions = async () => {
    try {
      if (projects.length === 0) {
        alert('Please load projects first')
        return
      }
      const firstProject = projects[0]
      const projectPositions = await PositionService.getPositionsByProject(firstProject.id)
      console.log('Project positions:', projectPositions)
      alert(`Found ${projectPositions.length} positions for project: ${firstProject.name}`)
    } catch (error) {
      console.error('Error fetching project positions:', error)
    }
  }

  const testUserAllocations = async () => {
    try {
      if (users.length === 0) {
        alert('Please load users first')
        return
      }
      const firstUser = users[0]
      const userAllocations = await AllocationService.getAllocationsByUser(firstUser.id)
      console.log('User allocations:', userAllocations)
      alert(`Found ${userAllocations.length} allocations for user: ${firstUser.name}`)
    } catch (error) {
      console.error('Error fetching user allocations:', error)
    }
  }

  const testProjectAllocations = async () => {
    try {
      if (projects.length === 0) {
        alert('Please load projects first')
        return
      }
      const firstProject = projects[0]
      const projectAllocations = await AllocationService.getAllocationsByProject(firstProject.id)
      console.log('Project allocations:', projectAllocations)
      alert(`Found ${projectAllocations.length} allocations for project: ${firstProject.name}`)
    } catch (error) {
      console.error('Error fetching project allocations:', error)
    }
  }

  const getMonthName = (monthIndex: number) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return months[monthIndex] || 'Unknown'
  }

  const getProjectName = (projectId: string) => {
    const project = projects.find(p => p.id === projectId)
    return project?.name || 'Unknown Project'
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Supabase Positions & Allocations Test</h1>
      
      <div className="space-y-4">
        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setActiveTab('positions')}
              className={`px-4 py-2 rounded ${
                activeTab === 'positions' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Positions ({positions.length})
            </button>
            <button
              onClick={() => setActiveTab('allocations')}
              className={`px-4 py-2 rounded ${
                activeTab === 'allocations' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Allocations ({allocations.length})
            </button>
          </div>

          {/* Common Controls */}
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={loadUsers}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Load Users
            </button>
            <button
              onClick={loadProjects}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Load Projects
            </button>
          </div>

          {/* Position Controls */}
          {activeTab === 'positions' && (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setShowPositionManagement(true)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Open Position Management
                </button>
                <button 
                  onClick={loadPositions}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  disabled={loading}
                >
                  {loading ? 'Loading Positions...' : 'Load Positions'}
                </button>
                <button
                  onClick={testPositionSearch}
                  className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                >
                  Test Search ('developer')
                </button>
                <button
                  onClick={testProjectPositions}
                  className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                >
                  Test Project Positions
                </button>
              </div>
            </div>
          )}

          {/* Allocation Controls */}
          {activeTab === 'allocations' && (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setShowAllocationManagement(true)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Open Allocation Management
                </button>
                <button 
                  onClick={loadAllocations}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  disabled={loading}
                >
                  {loading ? 'Loading Allocations...' : 'Load Allocations'}
                </button>
                <button
                  onClick={testUserAllocations}
                  className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                >
                  Test User Allocations
                </button>
                <button
                  onClick={testProjectAllocations}
                  className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                >
                  Test Project Allocations
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Position Table */}
        {activeTab === 'positions' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Positions ({positions.length})</h2>
            {loading ? (
              <div>Loading positions...</div>
            ) : positions.length === 0 ? (
              <div className="text-gray-500">No positions loaded. Click "Load Positions" to fetch from Supabase.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
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
                        Allocated
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {positions.map((position) => (
                      <tr key={position.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {position.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {getProjectName(position.project_id)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {getMonthName(position.month_index)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {position.percentage}%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center">
                            <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                              <div 
                                className="bg-blue-500 h-2 rounded-full" 
                                style={{ width: `${(position.allocated_percentage / position.percentage) * 100}%` }}
                              />
                            </div>
                            {position.allocated_percentage}%
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Allocation Table */}
        {activeTab === 'allocations' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Allocations ({allocations.length})</h2>
            {loading ? (
              <div>Loading allocations...</div>
            ) : allocations.length === 0 ? (
              <div className="text-gray-500">No allocations loaded. Click "Load Allocations" to fetch from Supabase.</div>
            ) : (
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
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {allocations.map((allocation) => (
                      <tr key={allocation.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {(allocation as any).user_name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {(allocation as any).position_name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {(allocation as any).project_name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {getMonthName(allocation.month_index)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {allocation.percentage}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        <div className="bg-blue-50 rounded-lg p-4">
          <h3 className="font-semibold mb-2">🧪 Test Instructions:</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li>✅ Load Users and Projects first</li>
            <li>✅ Load Positions and Allocations from Supabase</li>
            <li>✅ Test search functionality for positions</li>
            <li>✅ Test project-specific positions</li>
            <li>✅ Test user-specific allocations</li>
            <li>✅ Test project-specific allocations</li>
            <li>✅ Verify position allocation percentages</li>
            <li>✅ Check user-project-position relationships</li>
            <li>🆕 Click "Open Position Management" to test full CRUD operations</li>
            <li>🆕 Click "Open Allocation Management" to test full CRUD operations</li>
            <li>🆕 Test create, edit, and delete operations</li>
            <li>🆕 Verify allocation percentage updates</li>
          </ol>
        </div>
      </div>

      <PositionManagementSupabase 
        isOpen={showPositionManagement} 
        onClose={() => {
          setShowPositionManagement(false)
          loadPositions() // Refresh the position list after management operations
        }} 
      />

      <AllocationManagementSupabase 
        isOpen={showAllocationManagement} 
        onClose={() => {
          setShowAllocationManagement(false)
          loadAllocations() // Refresh the allocation list after management operations
        }} 
      />
    </div>
  )
}
