<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>Blog · Fabalos Automation</title>

	<meta
		name="description"
		content="Insights on digital automation, workflow design, and system thinking—covering real-world use cases, tooling, and automation strategy."
	/>

	<!-- Open Graph -->
	<meta property="og:title" content="Automation Blog · Fabalos Automation" />
	<meta
		property="og:description"
		content="Articles and insights on building reliable automation systems using workflows, APIs, and modern tools."
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<div class="container">
	<h1 class="mb-6 text-3xl font-bold text-blue-300">Blog Posts</h1>

	<a href="/dashboard/cortexops/blog/new" class="btn">+ New Blog</a>

	<div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each data.posts as post}
			<a
				href={`/dashboard/cortexops/blog/${post.slug}`}
				class="block rounded-lg border p-4 transition
      {post.status === 'published'
					? 'border-green-500/40 bg-green-500/10'
					: 'border-blue-800/40 bg-blue-900/20 opacity-70'}"
			>
				<div class="mb-1 flex items-center justify-between">
					<h2 class="text-lg font-semibold text-blue-300">
						{post.title}
					</h2>

					<span
						class="rounded-full px-2 py-0.5 text-xs font-semibold uppercase
          {post.status === 'published'
							? 'bg-green-500/20 text-green-400'
							: 'bg-gray-500/20 text-gray-400'}"
					>
						{post.status}
					</span>
				</div>

				<p class="line-clamp-2 text-sm text-gray-400">
					{post.summary}
				</p>
			</a>
		{/each}
	</div>
</div>
