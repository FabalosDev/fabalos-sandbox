<script lang="ts">
	export let data;
</script>

<h1 class="mb-6 text-3xl font-bold text-blue-300">Case Studies</h1>

<a href="/dashboard/cortexops/case/new" class="btn">+ New Case Study</a>

<div class="mt-8 space-y-4">
	{#each data.cases as cs}
		<a
			href={`/dashboard/cortexops/case/${cs.slug}`}
			class="block rounded-lg border border-blue-800/40 bg-blue-900/20 p-4 hover:bg-blue-900/30"
		>
			<h2 class="text-lg font-semibold text-blue-300">
				{cs.title}
			</h2>

			<p class="mt-1 text-sm text-gray-400">
				{cs.summary?.problem ?? ''}
			</p>
		</a>
	{/each}
</div>
