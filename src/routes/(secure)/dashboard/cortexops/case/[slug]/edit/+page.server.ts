import { error, redirect, fail } from '@sveltejs/kit';
import { supabaseServer } from '$lib/supabase/server';

export const load = async (event) => {
	const supabase = supabaseServer(event);
	const { slug } = event.params; // ✅ FIX

	const { data, error: dbError } = await supabase
		.from('case_studies')
		.select('*')
		.eq('slug', slug)
		.single();

	if (dbError || !data) {
		throw error(404, 'Case study not found');
	}

	return { case: data };
};

export const actions = {
	save: async (event) => {
		const supabase = supabaseServer(event);
		const { slug } = event.params; // ✅ ALSO FIX
		const form = await event.request.formData();

		const payload = {
			title: form.get('title'),
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

			sections: JSON.parse(form.get('sections') as string).map((s) => ({
				title: s.title,
				image: s.image,
				paragraphs: s.body.filter(Boolean)
			}))
		};

		const { error: updateError } = await supabase
			.from('case_studies')
			.update(payload)
			.eq('slug', slug);

		if (updateError) {
			console.error(updateError);
			return fail(500, { message: updateError.message });
		}

		throw redirect(303, '/dashboard/cortexops/case');
	}
};
