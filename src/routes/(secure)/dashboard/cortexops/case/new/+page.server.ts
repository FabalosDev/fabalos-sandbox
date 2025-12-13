import { redirect, fail } from '@sveltejs/kit';
import { supabaseServer } from '$lib/supabase/server';

export const actions = {
	save: async (event) => {
		const supabase = supabaseServer(event);
		const form = await event.request.formData();

		const summary = {
			problem: form.get('problemSummary'),
			solution: form.get('solutionSummary'),
			result: form.get('resultSummary')
		};

		const sections = JSON.parse(form.get('sections') as string);

		const { error } = await supabase.from('case_studies').insert({
			title: form.get('title'),
			slug: form.get('slug'),
			thumbnail: form.get('thumbnail'),
			hero_image: form.get('hero_image'),
			summary,
			sections
		});

		if (error) {
			console.error(error);
			return fail(500, { message: error.message });
		}

		// 🔥 THIS LINE REMOVES ?/save
		throw redirect(303, '/dashboard/cortexops/case');
	}
};
