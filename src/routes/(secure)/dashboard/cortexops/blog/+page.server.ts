import { supabaseServer } from '$lib/supabase/server';

export async function load(event) {
	const supabase = supabaseServer(event);

	const { data, error } = await supabase
		.from('blog_posts')
		.select('id, title, slug, summary, thumbnail, status, created_at')
		.order('created_at', { ascending: false });

	if (error) {
		console.error(error);
		return { posts: [] };
	}

	return { posts: data };
}
