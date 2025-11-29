"use client"

import React, { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { UserService } from "../lib/supabase-users"
import type { User } from "../lib/supabase"
import type { Entity } from "../lib/types"

interface UserManagementProps {
  isOpen: boolean
  onClose: () => void
}

export function UserManagementSupabase({ isOpen, onClose }: UserManagementProps) {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [newUser, setNewUser] = useState({ 
    email: "", 
    name: "", 
    role: "editor" as 'admin' | 'senior' | 'editor' | 'viewer',
    department: "",
    work_pattern: "mon-fri" as 'mon-fri' | 'sun-thu'
  })
  const [isAdding, setIsAdding] = useState(false)
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [editForm, setEditForm] = useState({
    email: "",
    name: "",
    role: "editor" as 'admin' | 'senior' | 'editor' | 'viewer',
    department: "",
    work_pattern: "mon-fri" as 'mon-fri' | 'sun-thu'
  })

  // Load users from Supabase on component mount
  useEffect(() => {
    if (isOpen) {
      loadUsers()
    }
  }, [isOpen])

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

  const handleAddUser = async () => {
    if (!newUser.email || !newUser.name) {
      alert("Please fill in all required fields")
      return
    }

    setLoading(true)
    try {
      const createdUser = await UserService.createUser({
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        department: newUser.department || undefined,
        work_pattern: newUser.work_pattern
      })

      if (createdUser) {
        await loadUsers() // Refresh the list
        setNewUser({ 
          email: "", 
          name: "", 
          role: "editor",
          department: "",
          work_pattern: "mon-fri"
        })
        setIsAdding(false)
      } else {
        alert("Failed to create user. Please try again.")
      }
    } catch (error) {
      console.error('Error adding user:', error)
      alert("Error adding user. Please check console for details.")
    } finally {
      setLoading(false)
    }
  }

  const handleUpdateUser = async () => {
    if (!editingUser) return

    setLoading(true)
    try {
      const updatedUser = await UserService.updateUser(editingUser.id, {
        name: editForm.name,
        email: editForm.email,
        role: editForm.role,
        department: editForm.department || undefined,
        work_pattern: editForm.work_pattern
      })

      if (updatedUser) {
        await loadUsers() // Refresh the list
        setEditingUser(null)
        setEditForm({
          email: "",
          name: "",
          role: "editor",
          department: "",
          work_pattern: "mon-fri"
        })
      } else {
        alert("Failed to update user. Please try again.")
      }
    } catch (error) {
      console.error('Error updating user:', error)
      alert("Error updating user. Please check console for details.")
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteUser = async (userId: string) => {
    if (!confirm("Are you sure you want to delete this user?")) {
      return
    }

    setLoading(true)
    try {
      const success = await UserService.deleteUser(userId)
      if (success) {
        await loadUsers() // Refresh the list
      } else {
        alert("Failed to delete user. Please try again.")
      }
    } catch (error) {
      console.error('Error deleting user:', error)
      alert("Error deleting user. Please check console for details.")
    } finally {
      setLoading(false)
    }
  }

  const startEdit = (user: User) => {
    setEditingUser(user)
    setEditForm({
      email: user.email,
      name: user.name,
      role: user.role,
      department: user.department || "",
      work_pattern: user.work_pattern
    })
  }

  const cancelEdit = () => {
    setEditingUser(null)
    setEditForm({
      email: "",
      name: "",
      role: "editor",
      department: "",
      work_pattern: "mon-fri"
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">User Management</h2>
        
        {/* Users Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Users</h3>
            {!isAdding && (
              <Button onClick={() => setIsAdding(true)}>
                Add User
              </Button>
            )}
          </div>

          {/* Add User Form */}
          {isAdding && (
            <div className="border rounded p-4 mb-4 bg-gray-50">
              <h4 className="font-medium mb-3">Add New User</h4>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                  className="border rounded px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="Name"
                  value={newUser.name}
                  onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                  className="border rounded px-3 py-2"
                />
                <select
                  value={newUser.role}
                  onChange={(e) => setNewUser({...newUser, role: e.target.value as any})}
                  className="border rounded px-3 py-2"
                >
                  <option value="viewer">Viewer</option>
                  <option value="editor">Editor</option>
                  <option value="senior">Senior</option>
                  <option value="admin">Admin</option>
                </select>
                <input
                  type="text"
                  placeholder="Department (optional)"
                  value={newUser.department}
                  onChange={(e) => setNewUser({...newUser, department: e.target.value})}
                  className="border rounded px-3 py-2"
                />
                <select
                  value={newUser.work_pattern}
                  onChange={(e) => setNewUser({...newUser, work_pattern: e.target.value as any})}
                  className="border rounded px-3 py-2"
                >
                  <option value="mon-fri">Monday - Friday</option>
                  <option value="sun-thu">Sunday - Thursday</option>
                </select>
              </div>
              <div className="flex gap-2 mt-3">
                <Button onClick={handleAddUser} disabled={loading}>
                  {loading ? 'Adding...' : 'Add User'}
                </Button>
                <Button variant="outline" onClick={() => setIsAdding(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          )}

          {/* Users List */}
          <div className="border rounded">
            {loading ? (
              <div className="p-4 text-center">Loading users...</div>
            ) : users.length === 0 ? (
              <div className="p-4 text-center text-gray-500">No users found</div>
            ) : (
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 border-b">Name</th>
                    <th className="text-left p-3 border-b">Email</th>
                    <th className="text-left p-3 border-b">Role</th>
                    <th className="text-left p-3 border-b">Department</th>
                    <th className="text-left p-3 border-b">Work Pattern</th>
                    <th className="text-left p-3 border-b">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b">
                      {editingUser?.id === user.id ? (
                        <>
                          <td className="p-3">
                            <input
                              type="text"
                              value={editForm.name}
                              onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                              className="border rounded px-2 py-1 w-full"
                            />
                          </td>
                          <td className="p-3">
                            <input
                              type="email"
                              value={editForm.email}
                              onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                              className="border rounded px-2 py-1 w-full"
                            />
                          </td>
                          <td className="p-3">
                            <select
                              value={editForm.role}
                              onChange={(e) => setEditForm({...editForm, role: e.target.value as any})}
                              className="border rounded px-2 py-1 w-full"
                            >
                              <option value="viewer">Viewer</option>
                              <option value="editor">Editor</option>
                              <option value="senior">Senior</option>
                              <option value="admin">Admin</option>
                            </select>
                          </td>
                          <td className="p-3">
                            <input
                              type="text"
                              value={editForm.department}
                              onChange={(e) => setEditForm({...editForm, department: e.target.value})}
                              className="border rounded px-2 py-1 w-full"
                            />
                          </td>
                          <td className="p-3">
                            <select
                              value={editForm.work_pattern}
                              onChange={(e) => setEditForm({...editForm, work_pattern: e.target.value as any})}
                              className="border rounded px-2 py-1 w-full"
                            >
                              <option value="mon-fri">Mon-Fri</option>
                              <option value="sun-thu">Sun-Thu</option>
                            </select>
                          </td>
                          <td className="p-3">
                            <div className="flex gap-2">
                              <Button size="sm" onClick={handleUpdateUser} disabled={loading}>
                                {loading ? 'Saving...' : 'Save'}
                              </Button>
                              <Button size="sm" variant="outline" onClick={cancelEdit}>
                                Cancel
                              </Button>
                            </div>
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="p-3">{user.name}</td>
                          <td className="p-3">{user.email}</td>
                          <td className="p-3">
                            <span className={`px-2 py-1 rounded text-xs ${
                              user.role === 'admin' ? 'bg-red-100 text-red-800' :
                              user.role === 'senior' ? 'bg-purple-100 text-purple-800' :
                              user.role === 'editor' ? 'bg-blue-100 text-blue-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {user.role}
                            </span>
                          </td>
                          <td className="p-3">{user.department || '-'}</td>
                          <td className="p-3">{user.work_pattern === 'mon-fri' ? 'Mon-Fri' : 'Sun-Thu'}</td>
                          <td className="p-3">
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" onClick={() => startEdit(user)}>
                                Edit
                              </Button>
                              <Button size="sm" variant="destructive" onClick={() => handleDeleteUser(user.id)} disabled={loading}>
                                Delete
                              </Button>
                            </div>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  )
}
