import { redirect, error } from '@sveltejs/kit';
import { supabaseServer } from '$lib/supabase/server';

export const actions = {
	save: async (event) => {
		const supabase = supabaseServer(event);
		const form = await event.request.formData();

		const { error: insertError } = await supabase.from('blog_posts').insert({
			title: form.get('title'),
			slug: form.get('slug'),
			summary: form.get('summary'),
			thumbnail: form.get('thumbnail'),
			heroImage: form.get('heroImage'),
			sections: JSON.parse(form.get('sections') as string),
			footerNote: form.get('footerNote')
		});

		if (insertError) {
			throw error(500, insertError.message);
		}

		// balik sa list
		throw redirect(303, '/dashboard/cortexops/blog');
	}
};
