<script lang="ts">
	export let data;
</script>

<div class="container">
	<h1 class="mb-6 text-3xl font-bold text-blue-300">Blog Posts</h1>

	<a href="/dashboard/cortexops/blog/new" class="btn">+ New Blog</a>

	<div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each data.posts as post}
			<a
				href={`/dashboard/cortexops/blog/${post.slug}`}
				class="block rounded-lg border border-blue-800/40 bg-blue-900/20 p-4 hover:bg-blue-900/30"
			>
				<h2 class="mb-1 text-lg font-semibold text-blue-300">
					{post.title}
				</h2>

				<p class="line-clamp-2 text-sm text-gray-400">
					{post.summary}
				</p>
			</a>
		{/each}
	</div>
</div>
