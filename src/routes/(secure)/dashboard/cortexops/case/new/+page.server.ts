import { redirect, fail } from '@sveltejs/kit';
import { supabaseServer } from '$lib/supabase/server';

export const actions = {
	save: async (event) => {
		const supabase = supabaseServer(event);
		const form = await event.request.formData();

		const sections = JSON.parse(form.get('sections') as string);

		const data = {
			title: form.get('title'),
			slug: form.get('slug'),
			thumbnail: form.get('thumbnail'),
			hero_image: form.get('hero_image'),

			summary: {
				problem: form.get('problemSummary'),
				solution: form.get('solutionSummary'),
				result: form.get('resultSummary')
			},

			tags: ((form.get('tags') as string) || '')
				.split(',')
				.map((t) => t.trim())
				.filter(Boolean),

			tools: ((form.get('tools') as string) || '')
				.split(',')
				.map((t) => t.trim())
				.filter(Boolean),

			seo: {
				title: form.get('seoTitle'),
				description: form.get('seoDescription'),
				ogImage: form.get('seoOgImage')
			},

			sections: sections.map((s) => ({
				title: s.title,
				image: s.image,
				paragraphs: s.body.filter(Boolean)
			}))
		};

		const { error } = await supabase.from('case_studies').insert(data);

		if (error) {
			console.error(error);
			return fail(500, { message: error.message });
		}

		throw redirect(303, '/dashboard/cortexops/case');
	}
};
