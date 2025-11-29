# Supabase Setup Guide

## 🚀 Quick Start

### 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Set project name: `sola-supa`
5. Generate a strong database password
6. Choose your region
7. Wait for project creation (2-3 minutes)

### 2. Get Your Credentials
1. In your Supabase project, go to **Settings** → **API**
2. Copy these values:
   - **Project URL** (starts with `https://`)
   - **anon public** key (starts with `eyJ...`)
   - **service_role** key (starts with `eyJ...`)

### 3. Update Environment Variables
Edit `.env.local` file and replace the placeholder values:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 4. Test Connection
Run the test script:
```bash
npx tsx test-supabase.ts
```

### 5. Create Database Schema
Go to your Supabase project → **SQL Editor** → **New query** and run:

```sql
-- Create Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  role VARCHAR(50) NOT NULL DEFAULT 'viewer',
  department VARCHAR(255),
  start_date DATE,
  end_date DATE,
  work_pattern VARCHAR(20) DEFAULT 'mon-fri',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create Entities table
CREATE TABLE entities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create Projects table
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  entity_id UUID REFERENCES entities(id),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  color VARCHAR(7) NOT NULL,
  start_year INT NOT NULL,
  start_month INT NOT NULL,
  end_year INT NOT NULL,
  end_month INT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create Positions table
CREATE TABLE positions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id),
  name VARCHAR(255) NOT NULL,
  month_index INT NOT NULL,
  percentage DECIMAL(5,2) NOT NULL,
  allocated_percentage DECIMAL(5,2) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(project_id, name, month_index)
);

-- Create Allocations table
CREATE TABLE allocations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  project_id UUID REFERENCES projects(id),
  position_id UUID REFERENCES positions(id),
  position_name VARCHAR(255) NOT NULL,
  month_index INT NOT NULL,
  percentage DECIMAL(5,2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, project_id, position_id, month_index)
);

-- Create indexes for performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_projects_entity_id ON projects(entity_id);
CREATE INDEX idx_positions_project_id ON positions(project_id);
CREATE INDEX idx_allocations_user_id ON allocations(user_id);
CREATE INDEX idx_allocations_project_id ON allocations(project_id);
CREATE INDEX idx_allocations_month_index ON allocations(month_index);
```

### 6. Verify Everything Works
Run the test again:
```bash
npx tsx test-supabase.ts
```

You should see:
- ✅ Supabase connection successful!
- ✅ Tables exist and are accessible

## 📁 Files Created

- `.env.local` - Environment variables (not in git)
- `lib/supabase.ts` - Supabase client and types
- `test-supabase.ts` - Connection test script
- `SUPABASE_SETUP.md` - This guide

## 🎯 Next Steps

1. **Complete the setup** above
2. **Test the connection** 
3. **Start migrating data** from localStorage
4. **Update components** to use Supabase
5. **Add authentication** (optional)

## 🛠️ Usage Examples

```typescript
import { supabase } from './lib/supabase'

// Get all users
const { data: users } = await supabase.from('users').select('*')

// Add a new user
const { data: newUser } = await supabase
  .from('users')
  .insert([{ name: 'John Doe', email: 'john@example.com' }])

// Update a user
const { data: updatedUser } = await supabase
  .from('users')
  .update({ name: 'Jane Doe' })
  .eq('id', 'user-id-here')
```

## 🔧 Troubleshooting

- **Connection failed**: Check your URL and keys in `.env.local`
- **Tables not found**: Run the SQL schema in Supabase dashboard
- **Permission denied**: Check RLS policies in Supabase

## 📞 Need Help?

- Check the [Supabase docs](https://supabase.com/docs)
- Run the test script for debugging
- Check browser console for detailed error messages
