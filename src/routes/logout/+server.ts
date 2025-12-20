import { redirect } from '@sveltejs/kit';
import { supabaseServer } from '$lib/supabase/server';

export async function POST(event) {
	const supabase = supabaseServer(event);

	await supabase.auth.signOut();

	// ✅ Cookies cleared before redirect
	throw redirect(303, '/login');
}
