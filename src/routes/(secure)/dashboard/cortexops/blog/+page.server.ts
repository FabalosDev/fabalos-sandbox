import { supabaseServer } from '$lib/supabase/server';

export async function load(event) {
	const supabase = supabaseServer(event);

	const { data, error } = await supabase
		.from('blog_posts')
		.select('id, title, slug, summary, thumbnail, created_at')
		.order('created_at', { ascending: false });

	return { posts: data || [] };
}
