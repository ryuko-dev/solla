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

// Load mock project data
function loadMockProjectData() {
  const mockProjects = [
    {
      name: 'Website Redesign',
      description: 'Complete redesign of company website',
      color: '#3B82F6',
      start_year: 2024,
      start_month: 0,
      end_year: 2024,
      end_month: 5
    },
    {
      name: 'Mobile App Development',
      description: 'Native mobile application for iOS and Android',
      color: '#10B981',
      start_year: 2024,
      start_month: 2,
      end_year: 2024,
      end_month: 8
    },
    {
      name: 'Brand Identity',
      description: 'Complete brand identity and logo design',
      color: '#F59E0B',
      start_year: 2024,
      start_month: 1,
      end_year: 2024,
      end_month: 3
    },
    {
      name: 'Marketing Campaign',
      description: 'Digital marketing campaign for product launch',
      color: '#EF4444',
      start_year: 2024,
      start_month: 3,
      end_year: 2024,
      end_month: 7
    }
  ]

  return mockProjects
}

async function migrateProjects() {
  try {
    console.log('🚀 Starting project migration...')
    
    // Get entities to assign projects to
    const { data: entities, error: entityError } = await supabase
      .from('entities')
      .select('id, name')
      .order('name')

    if (entityError) throw entityError

    if (!entities || entities.length === 0) {
      console.log('❌ No entities found. Please run entity migration first.')
      return
    }

    console.log(`📦 Found ${entities.length} entities to assign projects to`)

    // Load mock projects
    const mockProjects = loadMockProjectData()
    console.log(`📦 Found ${mockProjects.length} projects to migrate`)

    // Get existing projects from Supabase to avoid duplicates
    const { data: existingProjects, error: fetchError } = await supabase
      .from('projects')
      .select('name')

    if (fetchError) throw fetchError

    const existingNames = existingProjects?.map((p) => p.name) || []
    console.log(`📋 Found ${existingNames.length} existing projects in Supabase`)

    // Migrate projects
    let migratedCount = 0
    let skippedCount = 0

    for (let i = 0; i < mockProjects.length; i++) {
      const project = mockProjects[i]
      
      // Check if project already exists
      if (existingNames.includes(project.name)) {
        console.log(`⏭️  Skipping ${project.name} - already exists`)
        skippedCount++
        continue
      }

      // Assign to entity (rotate through entities)
      const entity = entities[i % entities.length]
      
      // Insert into Supabase
      const { data, error } = await supabase
        .from('projects')
        .insert([{
          ...project,
          entity_id: entity.id
        }])
        .select(`
          *,
          entities:entities(id, name)
        `)
        .single()

      if (error) {
        console.error(`❌ Error migrating ${project.name}:`, error.message)
      } else {
        console.log(`✅ Migrated ${project.name} -> ID: ${data.id} (Entity: ${entity.name})`)
        migratedCount++
      }
    }

    console.log('\n🎉 Project migration complete!')
    console.log(`📊 Summary:`)
    console.log(`   - Total projects: ${mockProjects.length}`)
    console.log(`   - Migrated: ${migratedCount}`)
    console.log(`   - Skipped: ${skippedCount}`)

    // Verify migration
    const { data: finalProjects, error: finalError } = await supabase
      .from('projects')
      .select(`
        name,
        entities:entities(name)
      `)
      .order('name')

    if (finalError) throw finalError

    console.log('\n📋 Current projects in Supabase:')
    finalProjects?.forEach((project) => {
      console.log(`   - ${project.name} (Entity: ${project.entities?.name || 'Unknown'})`)
    })

  } catch (error) {
    console.error('❌ Migration failed:', error.message)
  }
}

// Run migration
migrateProjects()
