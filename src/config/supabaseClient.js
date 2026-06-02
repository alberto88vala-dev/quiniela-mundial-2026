import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nrbiwhhnlekusxpxdflu.supabase.co'; 
const supabaseKey = 'sb_publishable_e6sNpfmTYRHqQn5fnXut6g__QiVPkzL'; 

export const supabase = createClient(supabaseUrl, supabaseKey);