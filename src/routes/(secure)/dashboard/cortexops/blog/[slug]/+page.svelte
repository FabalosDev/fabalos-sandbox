<script lang="ts">
	export let data;
	const { post } = data;
</script>

<div class="container mx-auto max-w-4xl px-4">
	<!-- HEADER -->
	<div class="mb-10 flex items-start justify-between gap-6">
		<div>
			<h1 class="text-3xl leading-tight font-bold text-blue-300">
				{post.title}
			</h1>

			{#if post.subtitle}
				<p class="mt-2 text-blue-200/70">
					{post.subtitle}
				</p>
			{/if}
		</div>

		<a href={`/dashboard/cortexops/blog/${post.slug}/edit`} class="btn-sm self-start"> Edit </a>
	</div>

	<!-- CONTENT -->
	<div class="space-y-16">
		{#each post.sections ?? [] as sec}
			<section class="space-y-6">
				{#if sec.image}
					<img src={sec.image} alt="" class="max-h-[420px] w-full rounded-xl object-cover" />
				{/if}

				{#each sec.body ?? [] as p}
					<p class="leading-relaxed text-gray-300">
						{p}
					</p>
				{/each}
			</section>
		{/each}
	</div>
</div>
