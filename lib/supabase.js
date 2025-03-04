import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPBASE_ANON || ""

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

