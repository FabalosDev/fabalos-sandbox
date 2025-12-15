import { createServerClient } from '@supabase/ssr';
import { env } from '$env/dynamic/public';

export const supabaseServer = (event) => {
	return createServerClient(env.PUBLIC_SUPABASE_URL, env.PUBLIC_SUPABASE_ANON_KEY, {
		cookies: {
			get: (key) => event.cookies.get(key),
			set: (key, value, options) => event.cookies.set(key, value, { path: '/', ...options }),
			remove: (key, options) => event.cookies.delete(key, { path: '/', ...options })
		}
	});
};
