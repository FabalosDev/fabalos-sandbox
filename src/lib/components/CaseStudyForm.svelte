<script lang="ts">
	// props
	export let value = {};
	export let disabledSlug = false;

	/* ---------------------------
	   1. NORMALIZE INPUT
	---------------------------- */
	const defaults = {
		status: 'draft',
		title: '',
		slug: '',
		shortSummary: '',
		thumbnail: '',
		hero_image: '',
		tags: [],
		tools: [],
		problem: '',
		solution: '',
		result: '',
		seo: {
			title: '',
			description: '',
			ogImage: ''
		},
		sections: [{ title: '', image: '', body: [''] }]
	};

	value = {
		...defaults,
		...value,
		seo: { ...defaults.seo, ...(value.seo ?? {}) },
		sections: value.sections?.length ? value.sections : defaults.sections
	};

	/* ---------------------------
	   2. STRING INPUTS (UI)
	---------------------------- */
	let tagsInput = value.tags.join(', ');
	let toolsInput = value.tools.join(', ');

	$: value.tags = tagsInput
		.split(',')
		.map((t) => t.trim())
		.filter(Boolean);

	$: value.tools = toolsInput
		.split(',')
		.map((t) => t.trim())
		.filter(Boolean);

	/* ---------------------------
	   3. SECTION HELPERS
	---------------------------- */
	function addSection() {
		value.sections = [...value.sections, { title: '', image: '', body: [''] }];
	}

	function removeSection(i: number) {
		value.sections = value.sections.filter((_, idx) => idx !== i);
	}

	function addParagraph(i: number) {
		value.sections[i].body.push('');
		value.sections = [...value.sections];
	}
</script>

<!-- REQUIRED FOR SERVER -->
<input type="hidden" name="sections" value={JSON.stringify(value.sections)} />

<!-- MAIN -->
<input class="input" name="title" bind:value={value.title} placeholder="Title" />

<input
	class="input"
	name="slug"
	bind:value={value.slug}
	placeholder="Slug"
	disabled={disabledSlug}
/>

<input
	class="input"
	name="shortSummary"
	bind:value={value.shortSummary}
	placeholder="Short Summary"
/>

<input class="input" name="thumbnail" bind:value={value.thumbnail} placeholder="Thumbnail URL" />

<input class="input" name="hero_image" bind:value={value.hero_image} placeholder="Hero Image URL" />

<!-- TAGS / TOOLS -->
<input class="input" name="tags" bind:value={tagsInput} placeholder="Tags (comma-separated)" />

<!-- STATUS -->
<select class="input" name="status" bind:value={value.status}>
	<option value="draft">Draft</option>
	<option value="published">Published</option>
</select>

<input
	class="input"
	name="tools"
	bind:value={toolsInput}
	placeholder="Tools used (comma-separated)"
/>

<!-- SUMMARY -->
<textarea
	class="textarea"
	name="problemSummary"
	bind:value={value.problem}
	placeholder="Problem Summary"
></textarea>

<textarea
	class="textarea"
	name="solutionSummary"
	bind:value={value.solution}
	placeholder="Solution Summary"
></textarea>

<textarea
	class="textarea"
	name="resultSummary"
	bind:value={value.result}
	placeholder="Result Summary"
></textarea>

<!-- SEO -->
<input
	class="input"
	name="seoTitle"
	bind:value={value.seo.title}
	placeholder="SEO Title (defaults to case title)"
/>

<textarea
	class="textarea"
	name="seoDescription"
	bind:value={value.seo.description}
	placeholder="SEO Description (defaults to summary)"
></textarea>

<input
	class="input"
	name="seoOgImage"
	bind:value={value.seo.ogImage}
	placeholder="OG Image URL (defaults to hero image)"
/>

<!-- SECTIONS -->
<h2 class="mt-6 text-xl text-blue-300">Sections</h2>

{#each value.sections as section, i}
	<div class="space-y-3 rounded border p-4">
		<input class="input" bind:value={section.title} placeholder="Section Title" />

		<input class="input" bind:value={section.image} placeholder="Section Image URL" />

		{#each section.body as _, p}
			<textarea
				class="textarea"
				bind:value={value.sections[i].body[p]}
				placeholder={`Paragraph ${p + 1}`}
			></textarea>
		{/each}

		<div class="flex gap-2">
			<button type="button" class="btn-sm" on:click={() => addParagraph(i)}> + Paragraph </button>

			<button type="button" class="btn-sm text-red-400" on:click={() => removeSection(i)}>
				Remove Section
			</button>
		</div>
	</div>
{/each}

<button type="button" class="btn mt-4" on:click={addSection}> Add Section </button>
