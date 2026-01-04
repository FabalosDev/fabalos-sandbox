import { error, redirect, fail } from '@sveltejs/kit';
import { supabaseServer } from '$lib/supabase/server';

export const load = async (event) => {
	const supabase = supabaseServer(event);
	const { slug } = event.params;

	const { data, error: dbError } = await supabase
		.from('case_studies')
		.select('*')
		.eq('slug', slug)
		.single();

	if (dbError || !data) {
		throw error(404, 'Case study not found');
	}

	return { caseStudy: data };
};

export const actions = {
	save: async (event) => {
		const supabase = supabaseServer(event);
		const { slug } = event.params;
		const form = await event.request.formData();

		// 1. Tags & Tools
		const tagsInput = String(form.get('tags') ?? '');
		const toolsInput = String(form.get('tools') ?? '');

		const tagsArray = tagsInput
			? tagsInput
					.split(',')
					.map((t) => t.trim())
					.filter(Boolean)
			: [];

		const toolsArray = toolsInput
			? toolsInput
					.split(',')
					.map((t) => t.trim())
					.filter(Boolean)
			: [];

		// 2. SEO (Fixed to match your Form names)
		const seoObject = {
			title: String(form.get('seoTitle') ?? ''), // ✅ Matches name="seoTitle"
			description: String(form.get('seoDescription') ?? ''), // ✅ Matches name="seoDescription"
			ogImage: String(form.get('seoOgImage') ?? '') // ✅ Matches name="seoOgImage"
		};

		// 3. Sections
		const sections = JSON.parse(String(form.get('sections') ?? '[]')).map((s) => ({
			title: s?.title ?? '',
			image: s?.image ?? '',
			body: Array.isArray(s?.body) ? s.body.filter(Boolean) : []
		}));

		// 4. Payload
		const payload = {
			title: String(form.get('title') ?? ''),
			short_summary: String(form.get('shortSummary') ?? ''), // Note: Ensure form uses "shortSummary" or "short_summary"
			summary: String(form.get('summary') ?? ''),
			problem: String(form.get('problem') ?? ''),
			solution: String(form.get('solution') ?? ''),
			result: String(form.get('result') ?? ''),
			thumbnail: String(form.get('thumbnail') ?? ''),
			hero_image: String(form.get('hero_image') ?? ''),
			status: String(form.get('status') ?? 'draft'),

			tags: tagsArray,
			tools: toolsArray,
			seo: seoObject, // This sends the data to the 'seo' column
			sections
		};

		const { error } = await supabase.from('case_studies').update(payload).eq('slug', slug);

		if (error) return fail(500, { message: error.message });

		throw redirect(303, '/dashboard/cortexops/case');
	}
};
