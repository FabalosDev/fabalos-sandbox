<script lang="ts">
	export let data;

	const cs = data.case;

	let title = cs.title ?? '';
	let slug = cs.slug ?? '';
	let hero_image = cs.hero_image ?? '';

	let problemSummary = cs.summary?.problem ?? '';
	let solutionSummary = cs.summary?.solution ?? '';
	let resultSummary = cs.summary?.result ?? '';

	let sections = structuredClone(cs.sections ?? [{ title: '', image: '', body: [''] }]);

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
	<h1 class="text-3xl font-bold text-blue-300">Edit Case Study</h1>

	<!-- ⭐ IMPORTANT: action="?/default" -->
	<form method="POST" action="?/save" class="space-y-6">
		<input type="hidden" name="sections" value={JSON.stringify(sections)} />

		<div class="grid gap-4">
			<input name="title" bind:value={title} placeholder="Title" class="input" />
			<input name="slug" bind:value={slug} class="input" disabled />
			<input name="hero_image" bind:value={hero_image} placeholder="Hero Image URL" class="input" />
		</div>

		<h2 class="text-xl text-blue-300">Summary Panels</h2>

		<textarea
			name="problemSummary"
			bind:value={problemSummary}
			placeholder="Problem Summary"
			class="textarea"
		></textarea>

		<textarea
			name="solutionSummary"
			bind:value={solutionSummary}
			placeholder="Solution Summary"
			class="textarea"
		></textarea>

		<textarea
			name="resultSummary"
			bind:value={resultSummary}
			placeholder="Result Summary"
			class="textarea"
		></textarea>

		<h2 class="text-xl text-blue-300">Detailed Sections</h2>

		{#each sections as section, i}
			<div class="space-y-3 rounded border p-4">
				<div class="flex justify-between">
					<h3 class="text-blue-300">Section {i + 1}</h3>
					<button type="button" on:click={() => removeSection(i)} class="text-red-400">
						Remove
					</button>
				</div>

				<input bind:value={section.title} placeholder="Section Title" class="input" />
				<input bind:value={section.image} placeholder="Section Image URL" class="input" />

				{#each section.body as _, p}
					<textarea
						bind:value={sections[i].body[p]}
						placeholder={`Paragraph ${p + 1}`}
						class="textarea"
					></textarea>
				{/each}

				<button type="button" on:click={() => addParagraph(i)} class="btn-sm"> + Paragraph </button>
			</div>
		{/each}

		<div class="flex gap-3">
			<button type="button" on:click={addSection} class="btn">Add Section</button>
			<button type="submit" class="btn-green">Save Changes</button>
		</div>
	</form>
</div>
