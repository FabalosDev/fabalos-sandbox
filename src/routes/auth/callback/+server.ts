import { json } from '@sveltejs/kit';
import { supabaseServer } from '$lib/supabase/server';

export async function POST(event) {
	const supabase = supabaseServer(event);
	const body = await event.request.json();

	if (body?.event === 'SIGNED_IN' && body?.session) {
		await supabase.auth.setSession(body.session);
	}

	return json({ success: true });
}
