import { error } from '@sveltejs/kit';
import { supabaseServer } from '$lib/supabase/server';

export async function load(event) {
	const supabase = supabaseServer(event);

	const { data, error: err } = await supabase
		.from('case_studies')
		.select('id, title, slug, summary, created_at')
		.order('created_at', { ascending: false });

	if (err) throw error(500, err.message);

	return { cases: data ?? [] };
}
