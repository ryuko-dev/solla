// Load environment variables
const fs = require('fs')
const path = require('path')

const envPath = path.join(__dirname, '../.env.local')
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8')
  envContent.split('\n').forEach((line) => {
    const match = line.match(/^([^=]+)=(.*)$/)
    if (match) {
      const [, key, value] = match
      const cleanValue = value.replace(/^["']|["']$/g, '')
      process.env[key] = cleanValue
    }
  })
}

const { createClient } = require('@supabase/supabase-js')

// Create admin client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

// Load mock allocation data
function loadMockAllocationData() {
  const mockAllocations = [
    // Frontend Developer allocations for Website Redesign
    {
      positionName: 'Frontend Developer',
      projectName: 'Website Redesign',
      allocations: [
        { userName: 'John Doe', month_index: 0, percentage: 100 },
        { userName: 'John Doe', month_index: 1, percentage: 100 },
        { userName: 'John Doe', month_index: 2, percentage: 100 },
      ]
    },
    // UI/UX Designer allocations for Website Redesign
    {
      positionName: 'UI/UX Designer',
      projectName: 'Website Redesign',
      allocations: [
        { userName: 'Jane Smith', month_index: 0, percentage: 75 },
        { userName: 'Jane Smith', month_index: 1, percentage: 75 },
        { userName: 'Sarah Johnson', month_index: 2, percentage: 50 },
      ]
    },
    // iOS Developer allocations for Mobile App Development
    {
      positionName: 'iOS Developer',
      projectName: 'Mobile App Development',
      allocations: [
        { userName: 'Mike Wilson', month_index: 2, percentage: 100 },
        { userName: 'Mike Wilson', month_index: 3, percentage: 100 },
        { userName: 'Mike Wilson', month_index: 4, percentage: 100 },
        { userName: 'Mike Wilson', month_index: 5, percentage: 100 },
        { userName: 'Mike Wilson', month_index: 6, percentage: 100 },
        { userName: 'Mike Wilson', month_index: 7, percentage: 100 },
      ]
    },
    // Android Developer allocations for Mobile App Development
    {
      positionName: 'Android Developer',
      projectName: 'Mobile App Development',
      allocations: [
        { userName: 'Emily Brown', month_index: 2, percentage: 100 },
        { userName: 'Emily Brown', month_index: 3, percentage: 100 },
        { userName: 'Emily Brown', month_index: 4, percentage: 100 },
        { userName: 'Emily Brown', month_index: 5, percentage: 100 },
        { userName: 'Emily Brown', month_index: 6, percentage: 100 },
        { userName: 'Emily Brown', month_index: 7, percentage: 100 },
      ]
    },
    // Brand Designer allocations for Brand Identity
    {
      positionName: 'Brand Designer',
      projectName: 'Brand Identity',
      allocations: [
        { userName: 'Jane Smith', month_index: 1, percentage: 100 },
        { userName: 'Jane Smith', month_index: 2, percentage: 100 },
        { userName: 'Jane Smith', month_index: 3, percentage: 100 },
      ]
    },
    // Marketing Manager allocations for Marketing Campaign
    {
      positionName: 'Marketing Manager',
      projectName: 'Marketing Campaign',
      allocations: [
        { userName: 'Sarah Johnson', month_index: 3, percentage: 100 },
        { userName: 'Sarah Johnson', month_index: 4, percentage: 100 },
        { userName: 'Sarah Johnson', month_index: 5, percentage: 100 },
        { userName: 'Sarah Johnson', month_index: 6, percentage: 100 },
        { userName: 'Sarah Johnson', month_index: 7, percentage: 100 },
      ]
    },
    // Content Writer allocations for Marketing Campaign
    {
      positionName: 'Content Writer',
      projectName: 'Marketing Campaign',
      allocations: [
        { userName: 'John Doe', month_index: 3, percentage: 75 },
        { userName: 'John Doe', month_index: 4, percentage: 75 },
        { userName: 'Emily Brown', month_index: 5, percentage: 50 },
      ]
    }
  ]

  return mockAllocations
}

async function migrateAllocations() {
  try {
    console.log('🚀 Starting allocation migration...')
    
    // Get users, projects, and positions
    const [usersResult, projectsResult, positionsResult] = await Promise.all([
      supabase.from('users').select('id, name').order('name'),
      supabase.from('projects').select('id, name').order('name'),
      supabase.from('positions').select('id, name, project_id, month_index').order('name')
    ])

    if (usersResult.error) throw usersResult.error
    if (projectsResult.error) throw projectsResult.error
    if (positionsResult.error) throw positionsResult.error

    const users = usersResult.data || []
    const projects = projectsResult.data || []
    const positions = positionsResult.data || []

    if (users.length === 0) {
      console.log('❌ No users found. Please run user migration first.')
      return
    }

    if (projects.length === 0) {
      console.log('❌ No projects found. Please run project migration first.')
      return
    }

    if (positions.length === 0) {
      console.log('❌ No positions found. Please run position migration first.')
      return
    }

    console.log(`📦 Found ${users.length} users, ${projects.length} projects, ${positions.length} positions`)

    // Load mock allocations
    const mockAllocationData = loadMockAllocationData()
    console.log(`📦 Found ${mockAllocationData.length} allocation sets to migrate`)

    // Get existing allocations from Supabase to avoid duplicates
    const { data: existingAllocations, error: fetchError } = await supabase
      .from('allocations')
      .select('user_id, project_id, position_id, month_index')

    if (fetchError) throw fetchError

    const existingKeys = existingAllocations?.map((a) => `${a.user_id}-${a.project_id}-${a.position_id}-${a.month_index}`) || []
    console.log(`📋 Found ${existingKeys.length} existing allocations in Supabase`)

    // Migrate allocations
    let migratedCount = 0
    let skippedCount = 0

    for (const allocationData of mockAllocationData) {
      // Find the project
      const project = projects.find(p => p.name === allocationData.projectName)
      if (!project) {
        console.log(`⚠️  Project not found: ${allocationData.projectName}`)
        continue
      }

      console.log(`📋 Processing allocations for: ${allocationData.positionName} in ${allocationData.projectName}`)

      for (const alloc of allocationData.allocations) {
        // Find the user
        const user = users.find(u => u.name === alloc.userName)
        if (!user) {
          console.log(`⚠️  User not found: ${alloc.userName}`)
          continue
        }

        // Find the position
        const position = positions.find(p => 
          p.name === allocationData.positionName && 
          p.project_id === project.id && 
          p.month_index === alloc.month_index
        )
        if (!position) {
          console.log(`⚠️  Position not found: ${allocationData.positionName} (Month ${alloc.month_index})`)
          continue
        }

        // Check if allocation already exists
        const allocationKey = `${user.id}-${project.id}-${position.id}-${alloc.month_index}`
        if (existingKeys.includes(allocationKey)) {
          console.log(`⏭️  Skipping allocation for ${alloc.userName} (Month ${alloc.month_index}) - already exists`)
          skippedCount++
          continue
        }

        // Insert into Supabase
        const { data, error } = await supabase
          .from('allocations')
          .insert([{
            user_id: user.id,
            project_id: project.id,
            position_id: position.id,
            position_name: allocationData.positionName,
            month_index: alloc.month_index,
            percentage: alloc.percentage
          }])
          .select()
          .single()

        if (error) {
          console.error(`❌ Error migrating allocation for ${alloc.userName}:`, error.message)
        } else {
          console.log(`✅ Migrated allocation for ${alloc.userName} (Month ${alloc.month_index}, ${alloc.percentage}%) -> ID: ${data.id}`)
          migratedCount++
        }
      }
    }

    console.log('\n🎉 Allocation migration complete!')
    console.log(`📊 Summary:`)
    console.log(`   - Total allocation sets: ${mockAllocationData.length}`)
    console.log(`   - Migrated: ${migratedCount}`)
    console.log(`   - Skipped: ${skippedCount}`)

    // Verify migration
    const { data: finalAllocations, error: finalError } = await supabase
      .from('allocations')
      .select(`
        percentage,
        month_index,
        users:users(name),
        projects:projects(name),
        positions:positions(name)
      `)
      .order('users(name)')

    if (finalError) throw finalError

    console.log('\n📋 Current allocations in Supabase:')
    finalAllocations?.forEach((allocation) => {
      console.log(`   - ${allocation.users?.name || 'Unknown'}: ${allocation.positions?.name || 'Unknown'} (${allocation.projects?.name || 'Unknown'}) - Month ${allocation.month_index}, ${allocation.percentage}%`)
    })

  } catch (error) {
    console.error('❌ Migration failed:', error.message)
  }
}

// Run migration
migrateAllocations()
