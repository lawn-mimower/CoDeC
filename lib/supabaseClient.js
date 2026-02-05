import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || ''

let supabase

if (!supabaseUrl || !supabaseAnonKey) {
	// Avoid throwing during module initialization — provide a safe stub
	// that surfaces a helpful error when used.
	// This prevents Next from failing to compile if env vars are not set.
	// Reminder: set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local
	// for full functionality.
	// eslint-disable-next-line no-console
	console.warn('Supabase environment variables are not set. Supabase client is disabled.')

	const result = { data: null, error: new Error('Supabase not configured') }

	const asyncResult = async () => result

	const chainableSelect = () => ({
		single: asyncResult,
		maybeSingle: asyncResult,
		then: asyncResult,
	})

	const noop = asyncResult

	supabase = {
		from: () => ({
			select: chainableSelect,
			insert: noop,
			update: noop,
			delete: noop,
		}),
		// minimal passthroughs for common usage
		auth: {
			signIn: async () => result,
			signOut: async () => result,
		},
	}
} else {
	supabase = createClient(supabaseUrl, supabaseAnonKey)
}

export { supabase }
export default supabase
