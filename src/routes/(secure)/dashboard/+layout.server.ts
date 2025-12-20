import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { supabaseServer } from '$lib/supabase/server';

export const load: LayoutServerLoad = async (event) => {
	const supabase = supabaseServer(event);

	const {
		data: { user }
	} = await supabase.auth.getUser();

	if (!user) {
		throw redirect(303, '/login');
	}

	return { user };
};
