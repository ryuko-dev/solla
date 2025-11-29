// Shared state utilities for cross-page persistence

import React from 'react'

export interface SharedMonthYearState {
  month: number
  year: number
}

const SHARED_MONTH_YEAR_KEY = 'sola-shared-month-year'

// Get shared month/year state
export function getSharedMonthYear(): SharedMonthYearState {
  if (typeof window === 'undefined') {
    // Default to current month/year for server-side rendering
    const now = new Date()
    return { month: now.getMonth(), year: now.getFullYear() }
  }
  
  try {
    const saved = localStorage.getItem(SHARED_MONTH_YEAR_KEY)
    if (saved) {
      const parsed = JSON.parse(saved)
      // Validate the saved data
      if (typeof parsed.month === 'number' && parsed.month >= 0 && parsed.month <= 11 &&
          typeof parsed.year === 'number' && parsed.year >= 2020 && parsed.year <= 2030) {
        return parsed
      }
    }
  } catch (error) {
    console.warn('Error parsing shared month/year state:', error)
  }
  
  // Fallback to current month/year
  const now = new Date()
  return { month: now.getMonth(), year: now.getFullYear() }
}

// Set shared month/year state
export function setSharedMonthYear(month: number, year: number): void {
  if (typeof window === 'undefined') return
  
  try {
    const state: SharedMonthYearState = { month, year }
    localStorage.setItem(SHARED_MONTH_YEAR_KEY, JSON.stringify(state))
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('sharedMonthYearChanged', {
      detail: { month, year }
    }))
  } catch (error) {
    console.error('Error saving shared month/year state:', error)
  }
}

// Hook for components to use shared month/year state with event listening
export function useSharedMonthYear() {
  if (typeof window === 'undefined') {
    // Server-side fallback
    const now = new Date()
    return [getSharedMonthYear(), setSharedMonthYear] as const
  }

  const [state, setState] = React.useState<SharedMonthYearState>(getSharedMonthYear)
  
  React.useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === SHARED_MONTH_YEAR_KEY && e.newValue) {
        try {
          const newState = JSON.parse(e.newValue)
          setState(newState)
        } catch (error) {
          console.warn('Error parsing storage change:', error)
        }
      }
    }
    
    const handleCustomEvent = (e: CustomEvent<{ month: number; year: number }>) => {
      setState({ month: e.detail.month, year: e.detail.year })
    }
    
    // Listen for both storage events and custom events
    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('sharedMonthYearChanged', handleCustomEvent as EventListener)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('sharedMonthYearChanged', handleCustomEvent as EventListener)
    }
  }, [])
  
  const setMonthYear = React.useCallback((month: number, year: number) => {
    setState({ month, year })
    setSharedMonthYear(month, year)
  }, [])
  
  return [state, setMonthYear] as const
}
