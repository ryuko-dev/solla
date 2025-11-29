"use client"

import { useState } from "react"
import { EntityService } from "../../lib/supabase-entities"
import { ProjectService, ProjectWithEntity } from "../../lib/supabase-projects"
import { EntityManagementSupabase } from "../../components/entity-management-supabase"
import { ProjectManagementSupabase } from "../../components/project-management-supabase"
import type { Entity, Project } from "../../lib/supabase"

export default function TestEntitiesPage() {
  const [entities, setEntities] = useState<Entity[]>([])
  const [projects, setProjects] = useState<ProjectWithEntity[]>([])
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState<'entities' | 'projects'>('entities')
  const [showEntityManagement, setShowEntityManagement] = useState(false)
  const [showProjectManagement, setShowProjectManagement] = useState(false)

  const loadEntities = async () => {
    setLoading(true)
    try {
      const fetchedEntities = await EntityService.getEntities()
      setEntities(fetchedEntities)
    } catch (error) {
      console.error('Error loading entities:', error)
    } finally {
      setLoading(false)
    }
  }

  const loadProjects = async () => {
    setLoading(true)
    try {
      const fetchedProjects = await ProjectService.getProjects()
      setProjects(fetchedProjects)
    } catch (error) {
      console.error('Error loading projects:', error)
    } finally {
      setLoading(false)
    }
  }

  const testEntitySearch = async () => {
    try {
      const searchResults = await EntityService.searchEntities('tech')
      console.log('Entity search results:', searchResults)
      alert(`Found ${searchResults.length} entities matching 'tech'`)
    } catch (error) {
      console.error('Error searching entities:', error)
    }
  }

  const testProjectSearch = async () => {
    try {
      const searchResults = await ProjectService.searchProjects('website')
      console.log('Project search results:', searchResults)
      alert(`Found ${searchResults.length} projects matching 'website'`)
    } catch (error) {
      console.error('Error searching projects:', error)
    }
  }

  const testProjectsByEntity = async () => {
    try {
      if (entities.length === 0) {
        alert('Please load entities first')
        return
      }
      const firstEntity = entities[0]
      const entityProjects = await ProjectService.getProjectsByEntity(firstEntity.id)
      console.log('Projects by entity:', entityProjects)
      alert(`Found ${entityProjects.length} projects for entity: ${firstEntity.name}`)
    } catch (error) {
      console.error('Error fetching projects by entity:', error)
    }
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Supabase Entities & Projects Test</h1>
      
      <div className="space-y-4">
        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setActiveTab('entities')}
              className={`px-4 py-2 rounded ${
                activeTab === 'entities' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Entities ({entities.length})
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-4 py-2 rounded ${
                activeTab === 'projects' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Projects ({projects.length})
            </button>
          </div>

          {/* Entity Controls */}
          {activeTab === 'entities' && (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setShowEntityManagement(true)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Open Entity Management
                </button>
                <button 
                  onClick={loadEntities}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  disabled={loading}
                >
                  {loading ? 'Loading Entities...' : 'Load Entities'}
                </button>
                <button
                  onClick={testEntitySearch}
                  className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                >
                  Test Search ('tech')
                </button>
              </div>
            </div>
          )}

          {/* Project Controls */}
          {activeTab === 'projects' && (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setShowProjectManagement(true)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Open Project Management
                </button>
                <button 
                  onClick={loadProjects}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  disabled={loading}
                >
                  {loading ? 'Loading Projects...' : 'Load Projects'}
                </button>
                <button
                  onClick={testProjectSearch}
                  className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                >
                  Test Search ('website')
                </button>
                <button
                  onClick={testProjectsByEntity}
                  className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                >
                  Test Projects by Entity
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Entity Table */}
        {activeTab === 'entities' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Entities ({entities.length})</h2>
            {loading ? (
              <div>Loading entities...</div>
            ) : entities.length === 0 ? (
              <div className="text-gray-500">No entities loaded. Click "Load Entities" to fetch from Supabase.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Created
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {entities.map((entity) => (
                      <tr key={entity.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {entity.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {entity.description || '-'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(entity.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Project Table */}
        {activeTab === 'projects' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Projects ({projects.length})</h2>
            {loading ? (
              <div>Loading projects...</div>
            ) : projects.length === 0 ? (
              <div className="text-gray-500">No projects loaded. Click "Load Projects" to fetch from Supabase.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Entity
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date Range
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Color
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {projects.map((project) => (
                      <tr key={project.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <div className="flex items-center">
                            <div 
                              className="w-3 h-3 rounded-full mr-2"
                              style={{ backgroundColor: project.color }}
                            />
                            {project.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {project.entities?.name || '-'}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {project.description || '-'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(project.start_year, project.start_month).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short' 
                          })} - {new Date(project.end_year, project.end_month).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short' 
                          })}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center">
                            <div 
                              className="w-6 h-6 rounded border border-gray-300"
                              style={{ backgroundColor: project.color }}
                            />
                            <span className="ml-2">{project.color}</span>
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

        <div className="bg-blue-50 rounded-lg p-4">
          <h3 className="font-semibold mb-2">🧪 Test Instructions:</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li>✅ Load Entities and Projects from Supabase</li>
            <li>✅ Test search functionality for both entities and projects</li>
            <li>✅ Test project filtering by entity</li>
            <li>✅ Verify entity-project relationships are working</li>
            <li>🆕 Click "Open Entity Management" to test full CRUD operations</li>
            <li>🆕 Click "Open Project Management" to test full CRUD operations</li>
            <li>🆕 Test create, edit, and delete operations</li>
          </ol>
        </div>
      </div>

      <EntityManagementSupabase 
        isOpen={showEntityManagement} 
        onClose={() => {
          setShowEntityManagement(false)
          loadEntities() // Refresh the entity list after management operations
        }} 
      />

      <ProjectManagementSupabase 
        isOpen={showProjectManagement} 
        onClose={() => {
          setShowProjectManagement(false)
          loadProjects() // Refresh the project list after management operations
        }} 
      />
    </div>
  )
}
