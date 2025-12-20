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

		// ✅ ONE sections mapping ONLY
		const sections = JSON.parse(String(form.get('sections') ?? '[]')).map((s) => ({
			title: s?.title ?? '',
			image: s?.image ?? '',
			body: Array.isArray(s?.body) ? s.body.filter(Boolean) : []
		}));

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

			// ✅ THIS WAS MISSING
			sections
		};

		const { error } = await supabase.from('case_studies').update(payload).eq('slug', slug);

		if (error) return fail(500, { message: error.message });

		throw redirect(303, '/dashboard/cortexops/case');
	}
};
