import { error } from '@sveltejs/kit';
import { supabaseServer } from '$lib/supabase/server';

export async function load(event) {
	const supabase = supabaseServer(event);
	const { slug } = event.params;

	const { data, error: err } = await supabase
		.from('case_studies')
		.select('*')
		.eq('slug', slug)
		.single();

	if (err || !data) throw error(404, 'Case Study not found');

	return { case: data };
}
