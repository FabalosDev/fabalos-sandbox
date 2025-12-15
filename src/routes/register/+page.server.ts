import { redirect, fail } from '@sveltejs/kit';
import { createServerClient } from '@supabase/ssr';
import { env } from '$env/dynamic/public';

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		const supabase = createServerClient(env.PUBLIC_SUPABASE_URL, env.PUBLIC_SUPABASE_ANON_KEY, {
			cookies: {
				get: (key) => cookies.get(key),
				set: (key, value, options) => cookies.set(key, value, { path: '/', ...options }),
				remove: (key, options) => cookies.delete(key, { path: '/', ...options })
			}
		});

		const { error } = await supabase.auth.signUp({
			email,
			password
		});

		if (error) {
			return fail(400, { error: error.message });
		}

		// Depending on Supabase email confirmation settings:
		// - If confirmation OFF → user is logged in
		// - If confirmation ON → session is pending
		throw redirect(303, '/dashboard');
	}
};
