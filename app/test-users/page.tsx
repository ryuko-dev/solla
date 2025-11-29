"use client"

import { useState } from "react"
import { UserService } from "../../lib/supabase-users"
import { UserManagementSupabase } from "../../components/user-management-supabase"
import type { User } from "../../lib/supabase"

export default function TestUsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [showUserManagement, setShowUserManagement] = useState(false)

  const loadUsers = async () => {
    setLoading(true)
    try {
      const fetchedUsers = await UserService.getUsers()
      setUsers(fetchedUsers)
    } catch (error) {
      console.error('Error loading users:', error)
    } finally {
      setLoading(false)
    }
  }

  const testUserSearch = async () => {
    try {
      const searchResults = await UserService.searchUsers('john')
      console.log('Search results:', searchResults)
      alert(`Found ${searchResults.length} users matching 'john'`)
    } catch (error) {
      console.error('Error searching users:', error)
    }
  }

  const testUsersByRole = async () => {
    try {
      const adminUsers = await UserService.getUsersByRole('admin')
      console.log('Admin users:', adminUsers)
      alert(`Found ${adminUsers.length} admin users`)
    } catch (error) {
      console.error('Error fetching users by role:', error)
    }
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Supabase User Management Test</h1>
      
      <div className="space-y-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">User Management</h2>
          <div className="space-y-4">
            <button
              onClick={() => setShowUserManagement(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Open User Management
            </button>
            
            <button 
              onClick={loadUsers}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ml-2"
              disabled={loading}
            >
              {loading ? 'Loading Users...' : 'Load Users from Supabase'}
            </button>
            
            <button
              onClick={testUserSearch}
              className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 ml-2"
            >
              Test Search ('john')
            </button>
            
            <button
              onClick={testUsersByRole}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 ml-2"
            >
              Test Admin Users
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Current Users ({users.length})</h2>
          {loading ? (
            <div>Loading users...</div>
          ) : users.length === 0 ? (
            <div className="text-gray-500">No users loaded. Click "Load Users" to fetch from Supabase.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Department
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Work Pattern
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {user.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          user.role === 'admin' ? 'bg-red-100 text-red-800' :
                          user.role === 'senior' ? 'bg-purple-100 text-purple-800' :
                          user.role === 'editor' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.department || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.work_pattern === 'mon-fri' ? 'Mon-Fri' : 'Sun-Thu'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="bg-blue-50 rounded-lg p-4">
          <h3 className="font-semibold mb-2">🧪 Test Instructions:</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li>✅ Load Users - Working!</li>
            <li>✅ User Table - Working!</li>
            <li>Click "Open User Management" to test CRUD operations</li>
            <li>Add a new user to test creation</li>
            <li>Edit an existing user to test updates</li>
            <li>Delete a user to test deletion (use caution!)</li>
            <li>Test search and filter functions</li>
          </ol>
        </div>
      </div>

      <UserManagementSupabase 
        isOpen={showUserManagement} 
        onClose={() => {
          setShowUserManagement(false)
          loadUsers() // Refresh the user list after management operations
        }} 
      />
    </div>
  )
}
