// Load environment variables
const fs = require('fs')
const path = require('path')

const envPath = path.join(__dirname, '.env.local')
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8')
  envContent.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/)
    if (match) {
      const [, key, value] = match
      const cleanValue = value.replace(/^["']|["']$/g, '')
      process.env[key] = cleanValue
    }
  })
}

const { createClient } = require('@supabase/supabase-js')
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

async function addTestData() {
  try {
    console.log('🚀 Adding test data...')

    // Add a test entity
    const { data: entity, error: entityError } = await supabase
      .from('entities')
      .insert([{ name: 'Test Entity', description: 'Test entity for development' }])
      .select()
      .single()

    if (entityError) throw entityError
    console.log('✅ Entity created:', entity)

    // Add a test project
    const { data: project, error: projectError } = await supabase
      .from('projects')
      .insert([{
        entity_id: entity.id,
        name: 'Test Project',
        description: 'Test project for development',
        color: '#3B82F6',
        start_year: 2024,
        start_month: 0,
        end_year: 2024,
        end_month: 11
      }])
      .select()
      .single()

    if (projectError) throw projectError
    console.log('✅ Project created:', project)

    // Add a test user
    const { data: user, error: userError } = await supabase
      .from('users')
      .insert([{
        name: 'Test User',
        email: 'test@example.com',
        role: 'admin',
        department: 'IT',
        work_pattern: 'mon-fri'
      }])
      .select()
      .single()

    if (userError) throw userError
    console.log('✅ User created:', user)

    // Add a test position
    const { data: position, error: positionError } = await supabase
      .from('positions')
      .insert([{
        project_id: project.id,
        name: 'Developer',
        month_index: 0, // January 2024
        percentage: 100
      }])
      .select()
      .single()

    if (positionError) throw positionError
    console.log('✅ Position created:', position)

    // Add a test allocation
    const { data: allocation, error: allocationError } = await supabase
      .from('allocations')
      .insert([{
        user_id: user.id,
        project_id: project.id,
        position_id: position.id,
        position_name: 'Developer',
        month_index: 0,
        percentage: 50
      }])
      .select()
      .single()

    if (allocationError) throw allocationError
    console.log('✅ Allocation created:', allocation)

    console.log('\n🎉 All test data created successfully!')
    console.log('📊 Summary:')
    console.log(`   - Entity: ${entity.name}`)
    console.log(`   - Project: ${project.name}`)
    console.log(`   - User: ${user.name}`)
    console.log(`   - Position: ${position.name}`)
    console.log(`   - Allocation: ${allocation.percentage}%`)

  } catch (error) {
    console.error('❌ Error adding test data:', error.message)
  }
}

addTestData()
