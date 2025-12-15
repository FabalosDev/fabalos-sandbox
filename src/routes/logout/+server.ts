import { redirect } from '@sveltejs/kit';
import { createServerClient } from '@supabase/ssr';
import { env } from '$env/dynamic/public';

export async function POST({ cookies }) {
	const supabase = createServerClient(env.PUBLIC_SUPABASE_URL, env.PUBLIC_SUPABASE_ANON_KEY, {
		cookies: {
			get: (key) => cookies.get(key),
			set: (key, value, options) => cookies.set(key, value, { path: '/', ...options }),
			remove: (key, options) => cookies.delete(key, { path: '/', ...options })
		}
	});

	await supabase.auth.signOut();

	throw redirect(303, '/login');
}
