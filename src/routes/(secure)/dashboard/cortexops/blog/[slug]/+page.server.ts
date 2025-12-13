import { error } from '@sveltejs/kit';
import { supabaseServer } from '$lib/supabase/server';

export async function load(event) {
	const supabase = supabaseServer(event);
	const { slug } = event.params;

	const { data: post, error: dbError } = await supabase
		.from('blog_posts')
		.select('*')
		.eq('slug', slug)
		.single();

	if (dbError || !post) throw error(404, 'Not found');

	return { post };
}
