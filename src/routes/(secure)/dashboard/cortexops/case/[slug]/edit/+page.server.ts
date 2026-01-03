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

		// 1. Process Arrays (Tags & Tools)
		// We split the comma-separated string into an array and trim whitespace
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

		// 2. Process SEO (JSON Object)
		// We assume your form has inputs named 'seo_title', 'seo_description', etc.
		const seoObject = {
			title: String(form.get('seo_title') ?? ''),
			description: String(form.get('seo_description') ?? ''),
			ogImage: String(form.get('seo_image') ?? '')
		};

		// 3. Process Sections (JSON Array)
		const sections = JSON.parse(String(form.get('sections') ?? '[]')).map((s) => ({
			title: s?.title ?? '',
			image: s?.image ?? '',
			body: Array.isArray(s?.body) ? s.body.filter(Boolean) : []
		}));

		// 4. Build the Final Payload
		const payload = {
			title: String(form.get('title') ?? ''),
			short_summary: String(form.get('shortSummary') ?? ''),
			summary: String(form.get('summary') ?? ''),
			problem: String(form.get('problem') ?? ''),
			solution: String(form.get('solution') ?? ''),
			result: String(form.get('result') ?? ''),
			thumbnail: String(form.get('thumbnail') ?? ''),
			hero_image: String(form.get('hero_image') ?? ''),
			status: String(form.get('status') ?? 'draft'),

			// ✅ The Missing Fields Are Now Included
			tags: tagsArray,
			tools: toolsArray,
			seo: seoObject,
			sections
		};

		const { error: updateError } = await supabase
			.from('case_studies')
			.update(payload)
			.eq('slug', slug);

		if (updateError) return fail(500, { message: updateError.message });

		throw redirect(303, '/dashboard/cortexops/case');
	}
};
