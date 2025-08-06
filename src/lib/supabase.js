import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mvyhmwdxdlgisuqytovi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12eWhtd2R4ZGxnaXN1cXl0b3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5NDkwODgsImV4cCI6MjA2OTUyNTA4OH0.GQpCjjcEKKg_exY28JprHqeubiigzoRkhyKzmXFpzWE';

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase