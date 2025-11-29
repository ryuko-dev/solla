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

// Load mock position data
function loadMockPositionData() {
  const mockPositions = [
    // Website Redesign project positions
    {
      projectName: 'Website Redesign',
      positions: [
        { name: 'Frontend Developer', month_index: 0, percentage: 100 },
        { name: 'Frontend Developer', month_index: 1, percentage: 100 },
        { name: 'Frontend Developer', month_index: 2, percentage: 100 },
        { name: 'UI/UX Designer', month_index: 0, percentage: 75 },
        { name: 'UI/UX Designer', month_index: 1, percentage: 75 },
        { name: 'UI/UX Designer', month_index: 2, percentage: 50 },
      ]
    },
    // Mobile App Development project positions
    {
      projectName: 'Mobile App Development',
      positions: [
        { name: 'iOS Developer', month_index: 2, percentage: 100 },
        { name: 'iOS Developer', month_index: 3, percentage: 100 },
        { name: 'iOS Developer', month_index: 4, percentage: 100 },
        { name: 'iOS Developer', month_index: 5, percentage: 100 },
        { name: 'iOS Developer', month_index: 6, percentage: 100 },
        { name: 'iOS Developer', month_index: 7, percentage: 100 },
        { name: 'Android Developer', month_index: 2, percentage: 100 },
        { name: 'Android Developer', month_index: 3, percentage: 100 },
        { name: 'Android Developer', month_index: 4, percentage: 100 },
        { name: 'Android Developer', month_index: 5, percentage: 100 },
        { name: 'Android Developer', month_index: 6, percentage: 100 },
        { name: 'Android Developer', month_index: 7, percentage: 100 },
      ]
    },
    // Brand Identity project positions
    {
      projectName: 'Brand Identity',
      positions: [
        { name: 'Brand Designer', month_index: 1, percentage: 100 },
        { name: 'Brand Designer', month_index: 2, percentage: 100 },
        { name: 'Brand Designer', month_index: 3, percentage: 100 },
      ]
    },
    // Marketing Campaign project positions
    {
      projectName: 'Marketing Campaign',
      positions: [
        { name: 'Marketing Manager', month_index: 3, percentage: 100 },
        { name: 'Marketing Manager', month_index: 4, percentage: 100 },
        { name: 'Marketing Manager', month_index: 5, percentage: 100 },
        { name: 'Marketing Manager', month_index: 6, percentage: 100 },
        { name: 'Marketing Manager', month_index: 7, percentage: 100 },
        { name: 'Content Writer', month_index: 3, percentage: 75 },
        { name: 'Content Writer', month_index: 4, percentage: 75 },
        { name: 'Content Writer', month_index: 5, percentage: 50 },
      ]
    }
  ]

  return mockPositions
}

async function migratePositions() {
  try {
    console.log('🚀 Starting position migration...')
    
    // Get projects to assign positions to
    const { data: projects, error: projectError } = await supabase
      .from('projects')
      .select('id, name')
      .order('name')

    if (projectError) throw projectError

    if (!projects || projects.length === 0) {
      console.log('❌ No projects found. Please run project migration first.')
      return
    }

    console.log(`📦 Found ${projects.length} projects to assign positions to`)

    // Load mock positions
    const mockPositionData = loadMockPositionData()
    console.log(`📦 Found ${mockPositionData.length} project position sets to migrate`)

    // Get existing positions from Supabase to avoid duplicates
    const { data: existingPositions, error: fetchError } = await supabase
      .from('positions')
      .select('name, project_id, month_index')

    if (fetchError) throw fetchError

    const existingKeys = existingPositions?.map((p) => `${p.name}-${p.project_id}-${p.month_index}`) || []
    console.log(`📋 Found ${existingKeys.length} existing positions in Supabase`)

    // Migrate positions
    let migratedCount = 0
    let skippedCount = 0

    for (const projectData of mockPositionData) {
      // Find the project
      const project = projects.find(p => p.name === projectData.projectName)
      if (!project) {
        console.log(`⚠️  Project not found: ${projectData.projectName}`)
        continue
      }

      console.log(`📋 Processing positions for: ${projectData.projectName} (ID: ${project.id})`)

      for (const positionData of projectData.positions) {
        // Check if position already exists
        const positionKey = `${positionData.name}-${project.id}-${positionData.month_index}`
        if (existingKeys.includes(positionKey)) {
          console.log(`⏭️  Skipping ${positionData.name} (Month ${positionData.month_index}) - already exists`)
          skippedCount++
          continue
        }

        // Insert into Supabase
        const { data, error } = await supabase
          .from('positions')
          .insert([{
            project_id: project.id,
            name: positionData.name,
            month_index: positionData.month_index,
            percentage: positionData.percentage,
            allocated_percentage: 0
          }])
          .select()
          .single()

        if (error) {
          console.error(`❌ Error migrating ${positionData.name}:`, error.message)
        } else {
          console.log(`✅ Migrated ${positionData.name} (Month ${positionData.month_index}) -> ID: ${data.id}`)
          migratedCount++
        }
      }
    }

    console.log('\n🎉 Position migration complete!')
    console.log(`📊 Summary:`)
    console.log(`   - Total position sets: ${mockPositionData.length}`)
    console.log(`   - Migrated: ${migratedCount}`)
    console.log(`   - Skipped: ${skippedCount}`)

    // Verify migration
    const { data: finalPositions, error: finalError } = await supabase
      .from('positions')
      .select(`
        name,
        month_index,
        percentage,
        projects:projects(name)
      `)
      .order('name')

    if (finalError) throw finalError

    console.log('\n📋 Current positions in Supabase:')
    finalPositions?.forEach((position) => {
      console.log(`   - ${position.name} (Month ${position.month_index}, ${position.percentage}%) - Project: ${position.projects?.name || 'Unknown'}`)
    })

  } catch (error) {
    console.error('❌ Migration failed:', error.message)
  }
}

// Run migration
migratePositions()
