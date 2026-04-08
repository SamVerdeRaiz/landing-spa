import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  "https://xyxinjuzhutjvvfjmatz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5eGluanV6aHV0anZ2ZmptYXR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU2Mjc2MjcsImV4cCI6MjA5MTIwMzYyN30.1WZhmxwCZvi4bOeS-2U_7yrFdYO2cL7rn8OkxqvYlWw"
)