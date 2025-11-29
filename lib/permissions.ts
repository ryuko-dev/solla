// Role-based access control utilities

export type UserRole = 'admin' | 'editor' | 'viewer' | 'senior'

export interface PagePermissions {
  canView: boolean
  canEdit: boolean
  canDelete: boolean
}

export interface TabPermissions {
  allocation: PagePermissions
  planning: PagePermissions
  actualAllocation: PagePermissions
  expenseAllocation: PagePermissions
  scheduledRecords: PagePermissions
  settings: PagePermissions
}

/**
 * Get permissions for a specific role and page
 */
export function getPermissions(role: UserRole, page: keyof Omit<TabPermissions, 'settings'>): PagePermissions {
  switch (role) {
    case 'admin':
      return {
        canView: true,
        canEdit: true,
        canDelete: true
      }
    
    case 'senior':
      return {
        canView: true,
        canEdit: true,
        canDelete: true
      }
    
    case 'editor':
      // Editor can view all tabs except settings, but only edit specific pages
      const canEdit = page === 'expenseAllocation' || page === 'scheduledRecords'
      return {
        canView: true,
        canEdit,
        canDelete: canEdit
      }
    
    case 'viewer':
      // Viewer can only view allocation and planning
      const canView = page === 'allocation' || page === 'planning'
      return {
        canView,
        canEdit: false,
        canDelete: false
      }
    
    default:
      return {
        canView: false,
        canEdit: false,
        canDelete: false
      }
  }
}

/**
 * Get all tab permissions for a role
 */
export function getAllTabPermissions(role: UserRole): TabPermissions {
  return {
    allocation: getPermissions(role, 'allocation'),
    planning: getPermissions(role, 'planning'),
    actualAllocation: getPermissions(role, 'actualAllocation'),
    expenseAllocation: getPermissions(role, 'expenseAllocation'),
    scheduledRecords: getPermissions(role, 'scheduledRecords'),
    settings: {
      canView: role === 'admin',
      canEdit: role === 'admin',
      canDelete: role === 'admin'
    }
  }
}

/**
 * Check if user can access a specific tab
 */
export function canAccessTab(role: UserRole, tab: keyof TabPermissions): boolean {
  const permissions = getAllTabPermissions(role)
  return permissions[tab].canView
}

/**
 * Check if user can edit a specific page
 */
export function canEditPage(role: UserRole, page: keyof Omit<TabPermissions, 'settings'>): boolean {
  return getPermissions(role, page).canEdit
}

/**
 * Check if user can lock/unlock payroll allocation
 */
export function canLockPayroll(role: UserRole): boolean {
  return role === 'admin' || role === 'senior'
}

/**
 * Check if user can delete on a specific page
 */
export function canDeletePage(role: UserRole, page: keyof Omit<TabPermissions, 'settings'>): boolean {
  return getPermissions(role, page).canDelete
}
