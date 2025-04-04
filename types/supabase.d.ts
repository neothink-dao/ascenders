import { SupabaseClient } from '@supabase/supabase-js'

declare module '@/lib/supabase/server' {
  export function createServerClient(): SupabaseClient
}

declare module '@/lib/supabase/client' {
  export function createClient(): SupabaseClient
} 