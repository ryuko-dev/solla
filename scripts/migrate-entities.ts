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

// Load mock entity data
function loadMockEntityData() {
  const mockEntities = [
    {
      name: 'Tech Corp',
      description: 'Technology company specializing in software development'
    },
    {
      name: 'Design Studio',
      description: 'Creative agency for digital design and branding'
    },
    {
      name: 'Marketing Agency',
      description: 'Full-service marketing and advertising agency'
    }
  ]

  return mockEntities
}

async function migrateEntities() {
  try {
    console.log('🚀 Starting entity migration...')
    
    // Load mock entities
    const mockEntities = loadMockEntityData()
    console.log(`📦 Found ${mockEntities.length} entities to migrate`)

    // Get existing entities from Supabase to avoid duplicates
    const { data: existingEntities, error: fetchError } = await supabase
      .from('entities')
      .select('name')

    if (fetchError) throw fetchError

    const existingNames = existingEntities?.map((e) => e.name) || []
    console.log(`📋 Found ${existingNames.length} existing entities in Supabase`)

    // Migrate entities
    let migratedCount = 0
    let skippedCount = 0

    for (const entity of mockEntities) {
      // Check if entity already exists
      if (existingNames.includes(entity.name)) {
        console.log(`⏭️  Skipping ${entity.name} - already exists`)
        skippedCount++
        continue
      }

      // Insert into Supabase
      const { data, error } = await supabase
        .from('entities')
        .insert([entity])
        .select()
        .single()

      if (error) {
        console.error(`❌ Error migrating ${entity.name}:`, error.message)
      } else {
        console.log(`✅ Migrated ${entity.name} -> ID: ${data.id}`)
        migratedCount++
      }
    }

    console.log('\n🎉 Entity migration complete!')
    console.log(`📊 Summary:`)
    console.log(`   - Total entities: ${mockEntities.length}`)
    console.log(`   - Migrated: ${migratedCount}`)
    console.log(`   - Skipped: ${skippedCount}`)

    // Verify migration
    const { data: finalEntities, error: finalError } = await supabase
      .from('entities')
      .select('name, description')
      .order('name')

    if (finalError) throw finalError

    console.log('\n📋 Current entities in Supabase:')
    finalEntities?.forEach((entity) => {
      console.log(`   - ${entity.name}: ${entity.description}`)
    })

  } catch (error) {
    console.error('❌ Migration failed:', error.message)
  }
}

// Run migration
migrateEntities()
