// Load environment variables
const fs = require('fs')
const path = require('path')

const envPath = path.join(__dirname, '../.env.local')
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8')
  envContent.split('\n').forEach((line: string) => {
    const match = line.match(/^([^=]+)=(.*)$/)
    if (match) {
      const [, key, value] = match
      const cleanValue = value.replace(/^["']|["']$/g, '')
      process.env[key] = cleanValue
    }
  })
}

const { getSupabaseAdmin } = require('../lib/supabase')
const supabase = getSupabaseAdmin()

// Load localStorage data
function loadLocalStorageData() {
  // This simulates reading from localStorage
  // In a real scenario, you'd need to extract this from browser storage or a backup
  const mockLocalStorageData = [
    {
      id: 'user-1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'admin',
      department: 'Engineering',
      startDate: '2024-01-01',
      endDate: null,
      workPattern: 'mon-fri'
    },
    {
      id: 'user-2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'editor',
      department: 'Design',
      startDate: '2024-02-01',
      endDate: null,
      workPattern: 'mon-fri'
    },
    {
      id: 'user-3',
      name: 'Bob Johnson',
      email: 'bob@example.com',
      role: 'viewer',
      department: 'Marketing',
      startDate: '2024-03-01',
      endDate: null,
      workPattern: 'sun-thu'
    }
  ]

  return mockLocalStorageData
}

async function migrateUsers() {
  try {
    console.log('🚀 Starting user migration...')
    
    // Load existing users from localStorage (simulated)
    const localStorageUsers = loadLocalStorageData()
    console.log(`📦 Found ${localStorageUsers.length} users in localStorage`)

    // Get existing users from Supabase to avoid duplicates
    const { data: existingUsers, error: fetchError } = await supabase
      .from('users')
      .select('email')

    if (fetchError) throw fetchError

    const existingEmails = existingUsers?.map((u: any) => u.email) || []
    console.log(`📋 Found ${existingEmails.length} existing users in Supabase`)

    // Migrate users
    let migratedCount = 0
    let skippedCount = 0

    for (const user of localStorageUsers) {
      const userTyped: any = user
      // Check if user already exists
      if (existingEmails.includes(userTyped.email)) {
        console.log(`⏭️  Skipping ${userTyped.name} - already exists`)
        skippedCount++
        continue
      }

      // Convert to Supabase format
      const supabaseUser = {
        name: userTyped.name,
        email: userTyped.email,
        role: userTyped.role || 'viewer',
        department: userTyped.department,
        start_date: userTyped.startDate || null,
        end_date: userTyped.endDate || null,
        work_pattern: userTyped.workPattern || 'mon-fri'
      }

      // Insert into Supabase
      const { data, error } = await supabase
        .from('users')
        .insert([supabaseUser])
        .select()
        .single()

      if (error) {
        console.error(`❌ Error migrating ${userTyped.name}:`, error.message)
      } else {
        console.log(`✅ Migrated ${userTyped.name} -> ID: ${data.id}`)
        migratedCount++
      }
    }

    console.log('\n🎉 Migration complete!')
    console.log(`📊 Summary:`)
    console.log(`   - Total users: ${localStorageUsers.length}`)
    console.log(`   - Migrated: ${migratedCount}`)
    console.log(`   - Skipped: ${skippedCount}`)

    // Verify migration
    const { data: finalUsers, error: finalError } = await supabase
      .from('users')
      .select('name, email, role')
      .order('name')

    if (finalError) throw finalError

    console.log('\n📋 Current users in Supabase:')
    finalUsers?.forEach((user: any) => {
      console.log(`   - ${user.name} (${user.email}) - ${user.role}`)
    })

  } catch (error: any) {
    console.error('❌ Migration failed:', error.message)
  }
}

// Run migration
migrateUsers()
