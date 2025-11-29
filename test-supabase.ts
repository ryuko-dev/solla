import { supabase } from './lib/supabase'

async function testSupabaseConnection() {
  try {
    console.log('Testing Supabase connection...')
    
    // Test basic connection
    const { data, error } = await supabase.from('users').select('count')
    
    if (error) {
      console.error('❌ Supabase connection failed:', error.message)
      return false
    }
    
    console.log('✅ Supabase connection successful!')
    console.log('📊 Test query result:', data)
    
    // Test if we can create a simple test record (will fail until schema is created)
    try {
      const { data: testData, error: testError } = await supabase
        .from('users')
        .select('*')
        .limit(1)
      
      if (testError && testError.code === 'PGRST116') {
        console.log('⚠️  Tables not created yet. Please run the SQL schema first.')
      } else if (testError) {
        console.log('⚠️  Other error:', testError.message)
      } else {
        console.log('✅ Tables exist and are accessible')
        console.log('📝 Sample data:', testData)
      }
    } catch (err) {
      console.log('⚠️  Error testing tables:', err)
    }
    
    return true
  } catch (err) {
    console.error('❌ Critical error testing Supabase:', err)
    return false
  }
}

// Run the test
testSupabaseConnection()
  .then(success => {
    if (success) {
      console.log('\n🎉 Supabase setup is ready!')
      console.log('📝 Next steps:')
      console.log('   1. Create your Supabase project at https://supabase.com')
      console.log('   2. Copy the URL and keys to .env.local')
      console.log('   3. Run the SQL schema in Supabase dashboard')
      console.log('   4. Run this test again to verify everything works')
    } else {
      console.log('\n❌ Please check your Supabase configuration')
    }
  })
  .catch(console.error)
