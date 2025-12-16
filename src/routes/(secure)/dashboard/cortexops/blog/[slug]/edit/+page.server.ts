import { error, redirect } from '@sveltejs/kit';
import { supabaseServer } from '$lib/supabase/server';

export async function load(event) {
	const supabase = supabaseServer(event);
	const { slug } = event.params;

	const { data: blog, error: dbError } = await supabase
		.from('blog_posts')
		.select('*')
		.eq('slug', slug)
		.single();

	if (dbError || !blog) {
		throw error(404, 'Blog not found');
	}

	return { blog };
}

export const actions = {
	save: async (event) => {
		const supabase = supabaseServer(event);
		const form = await event.request.formData();
		const { slug } = event.params;

		const category = form.get('category');
		if (!category) {
			throw error(400, 'Category is required');
		}

		const tagsRaw = form.get('tags') as string;

		const { error: updateError } = await supabase
			.from('blog_posts')
			.update({
				title: form.get('title'),
				summary: form.get('summary'),
				category,
				tags: tagsRaw
					? tagsRaw
							.split(',')
							.map((t) => t.trim())
							.filter(Boolean)
					: [],
				status: form.get('status') ?? 'draft',
				thumbnail: form.get('thumbnail'),
				heroImage: form.get('heroImage'),
				sections: JSON.parse(form.get('sections') as string),
				footerNote: form.get('footerNote'),
				updated_at: new Date().toISOString()
			})
			.eq('slug', slug);

		if (updateError) {
			throw error(500, updateError.message);
		}

		throw redirect(303, '/dashboard/cortexops/blog');
	}
};
