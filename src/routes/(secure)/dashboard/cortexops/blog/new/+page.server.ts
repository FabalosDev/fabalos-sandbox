import { redirect, error } from '@sveltejs/kit';
import { supabaseServer } from '$lib/supabase/server';

export const actions = {
	save: async (event) => {
		const supabase = supabaseServer(event);
		const form = await event.request.formData();

		const category = form.get('category');
		if (!category) {
			throw error(400, 'Category is required');
		}

		const tagsRaw = form.get('tags') as string;

		const { error: insertError } = await supabase.from('blog_posts').insert({
			title: form.get('title'),
			slug: form.get('slug'),
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
			seo: {
				title: form.get('seoTitle') || form.get('title'),
				description: form.get('seoDescription') || form.get('summary'),
				ogImage: form.get('seoOgImage') || form.get('heroImage')
			}
		}); // ✅ THIS was missing

		if (insertError) {
			throw error(500, insertError.message);
		}

		throw redirect(303, '/dashboard/cortexops/blog');
	}
};
