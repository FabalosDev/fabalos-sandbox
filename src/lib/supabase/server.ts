import { createServerClient } from '@supabase/ssr';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

export const supabaseServer = (event) =>
	createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
		cookies: {
			get: (key) => event.cookies.get(key),
			set: (key, val, opts) => event.cookies.set(key, val, { path: '/', ...opts }),
			remove: (key, opts) => event.cookies.delete(key, { path: '/', ...opts })
		}
	});
