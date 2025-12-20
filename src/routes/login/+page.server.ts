import { redirect, fail } from '@sveltejs/kit';
import { supabaseServer } from '$lib/supabase/server';

export const actions = {
	default: async (event) => {
		const supabase = supabaseServer(event);
		const data = await event.request.formData();

		const email = String(data.get('email'));
		const password = String(data.get('password'));

		const { error } = await supabase.auth.signInWithPassword({
			email,
			password
		});

		if (error) {
			return fail(400, { error: error.message });
		}

		// ✅ Supabase cookies are finalized BEFORE redirect
		throw redirect(303, '/dashboard');
	}
};
