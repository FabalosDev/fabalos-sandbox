import { redirect } from '@sveltejs/kit';
import { createServerClient } from '@supabase/ssr';
import type { LayoutServerLoad } from './$types';
import { env } from '$env/dynamic/public';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const supabase = createServerClient(env.PUBLIC_SUPABASE_URL, env.PUBLIC_SUPABASE_ANON_KEY, {
		cookies: {
			get(key) {
				return cookies.get(key);
			},
			set(key, value, options) {
				cookies.set(key, value, { path: '/', ...options });
			},
			remove(key, options) {
				cookies.delete(key, { path: '/', ...options });
			}
		}
	});

	const {
		data: { user }
	} = await supabase.auth.getUser();

	if (!user) {
		throw redirect(303, '/login');
	}

	return { user };
};
