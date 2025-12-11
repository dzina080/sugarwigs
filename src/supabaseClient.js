import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tphizrijpyuyavhswbpq.supabase.co';  // replace with your Supabase project URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwaGl6cmlqcHl1eWF2aHN3YnBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxMTQ5NzgsImV4cCI6MjA2ODY5MDk3OH0.FG-fGMCActUrFEvNW7IZu-RbV25bkgvkfF6WjN_fu8k';  // replace with your anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
