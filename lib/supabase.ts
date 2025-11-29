import { createClient, SupabaseClient } from '@supabase/supabase-js'

let supabaseInstance: SupabaseClient<Database> | null = null
let supabaseAdminInstance: SupabaseClient<Database> | null = null

function createSupabaseClient(): SupabaseClient<Database> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables. Check your .env.local file.')
  }

  return createClient<Database>(supabaseUrl, supabaseAnonKey)
}

function createSupabaseAdminClient(): SupabaseClient<Database> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error('Missing Supabase admin environment variables. Check your .env.local file.')
  }

  return createClient<Database>(supabaseUrl, serviceRoleKey)
}

// Lazy-loaded Supabase client - only initialized when needed
export function getSupabase(): SupabaseClient<Database> {
  if (!supabaseInstance) {
    supabaseInstance = createSupabaseClient()
  }
  return supabaseInstance
}

// For backward compatibility, but lazy-loaded
export const supabase = getSupabase

// For server-side operations with elevated permissions - lazy loaded
export function getSupabaseAdmin(): SupabaseClient<Database> {
  if (!supabaseAdminInstance) {
    supabaseAdminInstance = createSupabaseAdminClient()
  }
  return supabaseAdminInstance
}

// Database types (will be expanded as we create the schema)
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          name: string
          email: string
          role: 'admin' | 'senior' | 'editor' | 'viewer'
          department?: string
          start_date?: string
          end_date?: string
          work_pattern: 'mon-fri' | 'sun-thu'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          role?: 'admin' | 'senior' | 'editor' | 'viewer'
          department?: string
          start_date?: string
          end_date?: string
          work_pattern?: 'mon-fri' | 'sun-thu'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          role?: 'admin' | 'senior' | 'editor' | 'viewer'
          department?: string
          start_date?: string
          end_date?: string
          work_pattern?: 'mon-fri' | 'sun-thu'
          created_at?: string
          updated_at?: string
        }
      }
      entities: {
        Row: {
          id: string
          name: string
          description?: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          created_at?: string
          updated_at?: string
        }
      }
      projects: {
        Row: {
          id: string
          entity_id?: string
          name: string
          description?: string
          color: string
          start_year: number
          start_month: number
          end_year: number
          end_month: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          entity_id?: string
          name: string
          description?: string
          color: string
          start_year: number
          start_month: number
          end_year: number
          end_month: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          entity_id?: string
          name?: string
          description?: string
          color?: string
          start_year?: number
          start_month?: number
          end_year?: number
          end_month?: number
          created_at?: string
          updated_at?: string
        }
      }
      positions: {
        Row: {
          id: string
          project_id: string
          name: string
          month_index: number
          percentage: number
          allocated_percentage: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          project_id: string
          name: string
          month_index: number
          percentage: number
          allocated_percentage?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          project_id?: string
          name?: string
          month_index?: number
          percentage?: number
          allocated_percentage?: number
          created_at?: string
          updated_at?: string
        }
      }
      allocations: {
        Row: {
          id: string
          user_id: string
          project_id: string
          position_id: string
          position_name: string
          month_index: number
          percentage: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          project_id: string
          position_id: string
          position_name: string
          month_index: number
          percentage: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          project_id?: string
          position_id?: string
          position_name?: string
          month_index?: number
          percentage?: number
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}

// Type helpers
export type User = Database['public']['Tables']['users']['Row']
export type Entity = Database['public']['Tables']['entities']['Row']
export type Project = Database['public']['Tables']['projects']['Row']
export type Position = Database['public']['Tables']['positions']['Row']
export type Allocation = Database['public']['Tables']['allocations']['Row']

export type UserInsert = Database['public']['Tables']['users']['Insert']
export type EntityInsert = Database['public']['Tables']['entities']['Insert']
export type ProjectInsert = Database['public']['Tables']['projects']['Insert']
export type PositionInsert = Database['public']['Tables']['positions']['Insert']
export type AllocationInsert = Database['public']['Tables']['allocations']['Insert']
