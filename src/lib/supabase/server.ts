import { createServerClient } from '@supabase/ssr';
import { env } from '$env/dynamic/private';

export const supabaseServer = (event) => {
	return createServerClient(
		env.SUPABASE_URL,
		env.SUPABASE_SERVICE_ROLE_KEY, // ✅ CORRECT KEY
		{
			cookies: {
				get: (key) => event.cookies.get(key),
				set: (key, value, options) => event.cookies.set(key, value, { path: '/', ...options }),
				remove: (key, options) => event.cookies.delete(key, { path: '/', ...options })
			},
			auth: {
				autoRefreshToken: false, // ✅ IMPORTANT
				persistSession: false
			}
		}
	);
};
