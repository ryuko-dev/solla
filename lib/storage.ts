// User-specific storage utilities
export interface UserData {
  projects: any[]
  users: any[]
  allocations: any[]
  positions: any[]
  entities: any[]
  startMonth?: number
  startYear?: number
  systemUsers?: SystemUser[] // Global system users (for login)
}

export interface SystemUser {
  id: string
  email: string
  name: string
  password: string
  role: 'admin' | 'editor' | 'viewer' | 'senior'
  isActive: boolean
  createdAt: string
}

const STORAGE_KEYS = {
  CURRENT_USER: "sola-current-user",
  USER_DATA_PREFIX: "sola-user-data-",
  SYSTEM_USERS: "sola-system-users", // Global user registry
} as const

export function getSystemUsers(): SystemUser[] {
  if (typeof window === 'undefined') return []
  const data = localStorage.getItem(STORAGE_KEYS.SYSTEM_USERS)
  return data ? JSON.parse(data) : []
}

export function setSystemUsers(users: SystemUser[]): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEYS.SYSTEM_USERS, JSON.stringify(users))
}

export function addSystemUser(user: Omit<SystemUser, 'id' | 'createdAt'>): SystemUser {
  const users = getSystemUsers()
  const newUser: SystemUser = {
    ...user,
    id: `system-user-${Date.now()}`,
    createdAt: new Date().toISOString(),
  }
  setSystemUsers([...users, newUser])
  return newUser
}

export function updateSystemUser(id: string, updates: Partial<SystemUser>): void {
  const users = getSystemUsers()
  const updated = users.map(u => u.id === id ? { ...u, ...updates } : u)
  setSystemUsers(updated)
}

export function deleteSystemUser(id: string): void {
  const users = getSystemUsers()
  setSystemUsers(users.filter(u => u.id !== id))
}

export function authenticateUser(email: string, password: string): SystemUser | null {
  const users = getSystemUsers()
  return users.find(u => u.email === email && u.password === password && u.isActive) || null
}

export function getCurrentUser(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(STORAGE_KEYS.CURRENT_USER)
}

export function getCurrentSystemUser(): SystemUser | null {
  const email = getCurrentUser()
  if (!email) return null
  const users = getSystemUsers()
  return users.find(u => u.email === email) || null
}

export function setCurrentUser(email: string): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEYS.CURRENT_USER, email)
}

export function clearCurrentUser(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(STORAGE_KEYS.CURRENT_USER)
}

export function getUserData(email: string): UserData {
  if (typeof window === 'undefined') return { projects: [], users: [], allocations: [], positions: [], entities: [] }
  
  const data = localStorage.getItem(STORAGE_KEYS.USER_DATA_PREFIX + email)
  return data ? JSON.parse(data) : { projects: [], users: [], allocations: [], positions: [], entities: [] }
}

export function setUserData(email: string, data: Partial<UserData>): void {
  if (typeof window === 'undefined') return
  
  const existing = getUserData(email)
  const updated = { ...existing, ...data }
  localStorage.setItem(STORAGE_KEYS.USER_DATA_PREFIX + email, JSON.stringify(updated))
}

export function clearUserData(email: string): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(STORAGE_KEYS.USER_DATA_PREFIX + email)
}

// Convenience functions that work with the current user
export function getCurrentUserData(): UserData {
  const currentUser = getCurrentUser()
  if (!currentUser) return { projects: [], users: [], allocations: [], positions: [], entities: [] }
  return getUserData(currentUser)
}

export function setCurrentUserData(data: Partial<UserData>): void {
  const currentUser = getCurrentUser()
  if (!currentUser) return
  setUserData(currentUser, data)
}
