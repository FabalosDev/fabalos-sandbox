import { redirect } from '@sveltejs/kit';
import { supabaseServer } from '$lib/supabase/server';

export async function load(event) {
	const supabase = supabaseServer(event);
	const { slug } = event.params;

	const { data, error } = await supabase.from('case_studies').select('*').eq('slug', slug).single();

	if (error) throw error;

	return { case: data };
}

export const actions = {
	save: async (event) => {
		const supabase = supabaseServer(event);
		const form = await event.request.formData();
		const { slug } = event.params;

		const summary = {
			problem: form.get('problemSummary'),
			solution: form.get('solutionSummary'),
			result: form.get('resultSummary')
		};

		const sections = JSON.parse(form.get('sections') as string);

		await supabase
			.from('case_studies')
			.update({
				title: form.get('title'),
				hero_image: form.get('hero_image'),
				summary,
				sections
			})
			.eq('slug', slug);

		// 🔥 THIS IS THE MISSING PIECE
		throw redirect(303, `/dashboard/cortexops/case/${slug}`);
	}
};
