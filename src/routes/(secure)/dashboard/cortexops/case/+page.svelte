<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>Case Studies · Fabalos Automation</title>

	<meta
		name="description"
		content="Real-world automation case studies showing how systems are designed, built, and scaled using n8n, APIs, and structured workflows."
	/>

	<!-- Open Graph -->
	<meta property="og:title" content="Automation Case Studies · Fabalos Automation" />
	<meta
		property="og:description"
		content="Explore real automation projects covering editorial systems, operations workflows, and scalable integrations."
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<div class="container py-8">
	<h1 class="mb-6 text-3xl font-bold text-blue-300">Case Studies</h1>

	<a href="/dashboard/cortexops/case/new" class="btn mb-8 inline-block"> + New Case Study </a>

	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each data.cases as cs}
			<a
				href={`/dashboard/cortexops/case/${cs.slug}`}
				class="block rounded-lg border p-4 transition
          {cs.status === 'published'
					? 'border-green-500/40 bg-green-500/10'
					: 'border-blue-800/40 bg-blue-900/20 opacity-70'}"
			>
				<div class="flex items-center justify-between gap-4">
					<h2 class="text-lg font-semibold text-blue-300">
						{cs.title}
					</h2>

					<span
						class="rounded-full px-2 py-0.5 text-xs font-semibold tracking-wide uppercase
              {cs.status === 'published'
							? 'bg-green-500/20 text-green-400'
							: 'bg-gray-500/20 text-gray-400'}"
					>
						{cs.status}
					</span>
				</div>

				<p class="mt-1 text-sm text-gray-400">
					{cs.summary?.problem ?? ''}
				</p>
			</a>
		{/each}
	</div>
</div>
