// Load environment variables from .env.local
const fs = require('fs')
const path = require('path')

// Read .env.local file
const envPath = path.join(__dirname, '.env.local')
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8')
  envContent.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/)
    if (match) {
      const [, key, value] = match
      // Remove quotes if present
      const cleanValue = value.replace(/^["']|["']$/g, '')
      process.env[key] = cleanValue
      console.log(`✅ Loaded: ${key}=${cleanValue.substring(0, 20)}...`)
    }
  })
} else {
  console.log('❌ .env.local file not found')
}

// Now test Supabase
const { createClient } = require('@supabase/supabase-js')

console.log('\n🔍 Testing environment variables:')
console.log('NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? '✅ Set' : '❌ Missing')
console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '✅ Set' : '❌ Missing')

if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )
    
    console.log('\n🚀 Testing Supabase connection...')
    supabase.from('users').select('count').then(({ data, error }) => {
      if (error) {
        console.log('❌ Connection error:', error.message)
        if (error.message.includes('relation "users" does not exist')) {
          console.log('💡 Tables not created yet. Run the SQL schema first.')
        }
      } else {
        console.log('✅ Connection successful!')
        console.log('📊 Result:', data)
      }
    }).catch(err => {
      console.log('❌ Critical error:', err.message)
    })
  } catch (err) {
    console.log('❌ Client creation error:', err.message)
  }
} else {
  console.log('\n❌ Please check your .env.local file')
}
