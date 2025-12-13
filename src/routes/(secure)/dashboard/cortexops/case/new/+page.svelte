<script lang="ts">
	import { fail, redirect } from '@sveltejs/kit';
	import { supabaseServer } from '$lib/supabase/server';

	export const actions = {
		default: async (event) => {
			const supabase = supabaseServer(event);
			const form = await event.request.formData();

			const payload = {
				title: form.get('title'),
				slug: form.get('slug'),
				hero_image: form.get('hero_image'),
				summary: {
					problem: form.get('problemSummary'),
					solution: form.get('solutionSummary'),
					result: form.get('resultSummary')
				},
				sections: JSON.parse(form.get('sections') as string)
			};

			console.log('CASE SAVE PAYLOAD:', payload); // ← IMPORTANT

			const { error } = await supabase.from('case_studies').insert([payload]);

			if (error) {
				console.error(error);
				return fail(500, { message: error.message });
			}

			throw redirect(303, '/dashboard/cortexops/case');
		}
	};

	let title = '';
	let slug = '';
	let shortSummary = '';
	let thumbnail = '';
	let hero_image = '';

	let problemSummary = '';
	let solutionSummary = '';
	let resultSummary = '';

	let sections = [{ title: '', image: '', body: [''] }];

	function addSection() {
		sections = [...sections, { title: '', image: '', body: [''] }];
	}

	function removeSection(i: number) {
		sections = sections.filter((_, idx) => idx !== i);
	}

	function addParagraph(i: number) {
		sections[i].body.push('');
		sections = [...sections];
	}
</script>

<div class="space-y-6 p-8">
	<h1 class="text-3xl font-bold text-blue-300">New Case Study</h1>

	<form method="POST" action="?/save" class="space-y-6">
		<!-- JSON payload for sections -->
		<input type="hidden" name="sections" value={JSON.stringify(sections)} />

		<!-- Main fields -->
		<div class="grid gap-4">
			<input
				name="title"
				bind:value={title}
				placeholder="Title"
				class="w-full rounded-lg border border-blue-800/40 bg-blue-900/20 px-3 py-2 text-gray-200"
			/>

			<input
				name="slug"
				bind:value={slug}
				placeholder="Slug"
				class="w-full rounded-lg border border-blue-800/40 bg-blue-900/20 px-3 py-2 text-gray-200"
			/>

			<input
				name="shortSummary"
				bind:value={shortSummary}
				placeholder="Short Summary"
				class="w-full rounded-lg border border-blue-800/40 bg-blue-900/20 px-3 py-2 text-gray-200"
			/>

			<input
				name="thumbnail"
				bind:value={thumbnail}
				placeholder="Thumbnail URL"
				class="w-full rounded-lg border border-blue-800/40 bg-blue-900/20 px-3 py-2 text-gray-200"
			/>

			<input
				name="hero_image"
				bind:value={hero_image}
				placeholder="Hero Image URL"
				class="w-full rounded-lg border border-blue-800/40 bg-blue-900/20 px-3 py-2 text-gray-200"
			/>
		</div>

		<!-- Summary Panels -->
		<h2 class="text-xl font-semibold text-blue-300">Summary Panels</h2>

		<textarea
			name="problemSummary"
			bind:value={problemSummary}
			placeholder="Problem Summary"
			class="h-28 w-full rounded-lg border border-blue-800/40 bg-blue-900/20 px-3 py-2 text-gray-200"
		></textarea>

		<textarea
			name="solutionSummary"
			bind:value={solutionSummary}
			placeholder="Solution Summary"
			class="h-28 w-full rounded-lg border border-blue-800/40 bg-blue-900/20 px-3 py-2 text-gray-200"
		></textarea>

		<textarea
			name="resultSummary"
			bind:value={resultSummary}
			placeholder="Result Summary"
			class="h-28 w-full rounded-lg border border-blue-800/40 bg-blue-900/20 px-3 py-2 text-gray-200"
		></textarea>

		<!-- Sections -->
		<h2 class="mt-4 text-xl font-semibold text-blue-300">Detailed Sections</h2>

		{#each sections as section, i}
			<div class="space-y-4 rounded-xl border border-blue-800/40 bg-blue-900/10 p-4">
				<div class="flex items-center justify-between">
					<h3 class="font-semibold text-blue-300">Section {i + 1}</h3>
					<button
						type="button"
						on:click={() => removeSection(i)}
						class="text-red-400 hover:text-red-300"
					>
						Remove
					</button>
				</div>

				<input
					bind:value={section.title}
					placeholder="Section Title"
					class="w-full rounded-lg border border-blue-800/40 bg-blue-900/20 px-3 py-2 text-gray-200"
				/>

				<input
					bind:value={section.image}
					placeholder="Section Image URL"
					class="w-full rounded-lg border border-blue-800/40 bg-blue-900/20 px-3 py-2 text-gray-200"
				/>

				<div class="space-y-2">
					{#each section.body as _, pIndex}
						<textarea
							bind:value={sections[i].body[pIndex]}
							placeholder={`Paragraph ${pIndex + 1}`}
							class="h-28 w-full rounded-lg border border-blue-800/40 bg-blue-900/20 px-3 py-2 text-gray-200"
						></textarea>
					{/each}

					<button
						type="button"
						on:click={() => addParagraph(i)}
						class="rounded-lg bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
					>
						Add Paragraph
					</button>
				</div>
			</div>
		{/each}

		<div class="flex gap-3">
			<button
				type="button"
				on:click={addSection}
				class="rounded-lg bg-blue-700 px-4 py-2 text-white hover:bg-blue-600"
			>
				Add Section
			</button>

			<button
				type="submit"
				class="rounded-lg bg-green-600 px-6 py-2 font-semibold text-white hover:bg-green-700"
			>
				Save Case Study
			</button>
		</div>
	</form>
</div>
