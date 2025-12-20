<script lang="ts">
	export let blog;

	let title = blog?.title ?? '';
	let slug = blog?.slug ?? '';
	let summary = blog?.summary ?? '';
	let thumbnail = blog?.thumbnail ?? '';
	let heroImage = blog?.heroImage ?? '';
	let footerNote = blog?.footerNote ?? '';
	let seoTitle = blog.seo?.title ?? '';
	let seoDescription = blog.seo?.description ?? '';
	let seoOgImage = blog.seo?.ogImage ?? '';

	// NEW
	let category = blog?.category ?? '';
	let tags = blog?.tags?.join(', ') ?? '';
	let status = blog?.status ?? 'draft';

	let sections = structuredClone(blog?.sections ?? [{ image: '', body: [''] }]);

	function addSection() {
		sections = [...sections, { image: '', body: [''] }];
	}

	function addParagraph(i) {
		sections = sections.map((sec, idx) => (idx === i ? { ...sec, body: [...sec.body, ''] } : sec));
	}
</script>

<form method="POST" action="?/save">
	<input type="hidden" name="sections" value={JSON.stringify(sections)} />

	<input class="input" name="title" bind:value={title} placeholder="Title" />
	<input class="input" name="slug" bind:value={slug} placeholder="Slug" />

	<!-- NEW -->
	<input class="input" name="category" bind:value={category} placeholder="Category (required)" />

	<!-- NEW -->
	<input class="input" name="tags" bind:value={tags} placeholder="Tags (comma-separated)" />

	<!-- NEW -->
	<select class="input" name="status" bind:value={status}>
		<option value="draft">Draft</option>
		<option value="published">Published</option>
	</select>

	<input class="input" name="summary" bind:value={summary} placeholder="Short Summary" />
	<input class="input" name="thumbnail" bind:value={thumbnail} placeholder="Thumbnail URL" />
	<input class="input" name="heroImage" bind:value={heroImage} placeholder="Hero Image URL" />

	<!-- SEO -->
	<h2 class="mt-8 text-xl text-blue-300">SEO</h2>

	<input
		class="input"
		name="seoTitle"
		bind:value={seoTitle}
		placeholder="SEO Title (defaults to post title)"
	/>

	<textarea
		class="textarea"
		name="seoDescription"
		bind:value={seoDescription}
		placeholder="SEO Description (defaults to summary)"
	></textarea>

	<input
		class="input"
		name="seoOgImage"
		bind:value={seoOgImage}
		placeholder="OG Image URL (defaults to hero image)"
	/>

	<h2 class="text-xl text-blue-300">Sections</h2>

	{#each sections as sec, i}
		<div class="space-y-3 rounded border p-4">
			<input class="input" bind:value={sec.image} placeholder="Section Image URL" />

			{#each sec.body as _, p}
				<textarea
					class="textarea"
					bind:value={sections[i].body[p]}
					placeholder={`Paragraph ${p + 1}`}
				></textarea>
			{/each}

			<button type="button" class="btn-sm" on:click={() => addParagraph(i)}> + Paragraph </button>
		</div>
	{/each}

	<textarea
		class="textarea"
		name="footerNote"
		bind:value={footerNote}
		placeholder="Footer note (optional)"
	></textarea>

	<div class="flex gap-3">
		<button type="button" class="btn" on:click={addSection}> Add Section </button>
		<button type="submit" class="btn-green"> Save </button>
	</div>
</form>
