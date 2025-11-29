// Load environment variables from .env.local
const fs = require('fs')
const path = require('path')

const envPath = path.join(__dirname, '.env.local')
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8')
  console.log('📁 .env.local file found')
  console.log('📄 Content:')
  console.log(envContent)
  
  envContent.split('\n').forEach((line, index) => {
    if (line.trim() && !line.startsWith('#')) {
      console.log(`✅ Line ${index + 1}: ${line}`)
    }
  })
} else {
  console.log('❌ .env.local file not found')
}

console.log('\n🔍 Environment variables check:')
console.log('NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? '✅ Set' : '❌ Missing')
console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '✅ Set' : '❌ Missing')
console.log('SUPABASE_SERVICE_ROLE_KEY:', process.env.SUPABASE_SERVICE_ROLE_KEY ? '✅ Set' : '❌ Missing')
