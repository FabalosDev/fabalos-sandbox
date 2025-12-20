<script lang="ts">
	// props
	export let value = {};

	let formValue;

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
		sections: [{ title: '', image: '', body: [''] }],
		summary: ''
	};

	formValue = structuredClone(value ?? {});

	formValue = {
		...defaults,
		...formValue,
		seo: { ...defaults.seo, ...(formValue.seo ?? {}) },
		sections:
			Array.isArray(formValue.sections) && formValue.sections.length
				? formValue.sections.map((s) => ({
						title: s.title ?? '',
						image: s.image ?? '',
						body: Array.isArray(s.body) ? s.body : Array.isArray(s.paragraphs) ? s.paragraphs : ['']
					}))
				: structuredClone(defaults.sections)
	};

	/* ---------------------------
	   2. STRING INPUTS (UI)
	---------------------------- */
	let tagsInput = formValue.tags.join(', ');
	let toolsInput = formValue.tools.join(', ');

	$: formValue.tags = tagsInput
		.split(',')
		.map((t) => t.trim())
		.filter(Boolean);

	$: formValue.tools = toolsInput
		.split(',')
		.map((t) => t.trim())
		.filter(Boolean);

	/* ---------------------------
	   3. SECTION HELPERS
	---------------------------- */
	function addSection() {
		formValue.sections = [...formValue.sections, { title: '', image: '', body: [''] }];
	}

	function removeSection(i: number) {
		formValue.sections = formValue.sections.filter((_, idx) => idx !== i);
	}

	function addParagraph(i: number) {
		formValue.sections[i].body.push('');
		formValue.sections = [...formValue.sections];
	}
</script>

<!-- REQUIRED FOR SERVER -->
<input type="hidden" name="sections" value={JSON.stringify(formValue.sections)} />

<!-- MAIN -->
<input class="input" name="title" bind:value={formValue.title} placeholder="Title" />

<input
	class="input"
	name="slug"
	bind:value={formValue.slug}
	placeholder="Slug"
	disabled={disabledSlug}
/>

<input class="input" name="summary" bind:value={formValue.summary} placeholder="Summary" />

<input
	class="input"
	name="thumbnail"
	bind:value={formValue.thumbnail}
	placeholder="Thumbnail URL"
/>

<input
	class="input"
	name="hero_image"
	bind:value={formValue.hero_image}
	placeholder="Hero Image URL"
/>

<!-- TAGS / TOOLS -->
<input class="input" name="tags" bind:value={tagsInput} placeholder="Tags (comma-separated)" />

<!-- STATUS -->
<select class="input" name="status" bind:value={formValue.status}>
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
<textarea name="problem" bind:value={formValue.problem} placeholder="Problem Summary"></textarea>
<textarea name="solution" bind:value={formValue.solution} placeholder="Solution Summary"></textarea>
<textarea name="result" bind:value={formValue.result} placeholder="Result Summary"></textarea>

<!-- SEO -->
<input
	class="input"
	name="seoTitle"
	bind:value={formValue.seo.title}
	placeholder="SEO Title (defaults to case title)"
/>

<textarea
	class="textarea"
	name="seoDescription"
	bind:value={formValue.seo.description}
	placeholder="SEO Description (defaults to summary)"
></textarea>

<input
	class="input"
	name="seoOgImage"
	bind:value={formValue.seo.ogImage}
	placeholder="OG Image URL (defaults to hero image)"
/>

<!-- SECTIONS -->
<h2 class="mt-6 text-xl text-blue-300">Sections</h2>

{#each formValue.sections as section, i}
	<div class="space-y-3 rounded border p-4">
		<input class="input" bind:value={section.title} placeholder="Section Title" />

		<input class="input" bind:value={section.image} placeholder="Section Image URL" />

		{#each section.body as _, p}
			<textarea
				class="textarea"
				bind:value={formValue.sections[i].body[p]}
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
