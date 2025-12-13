<script lang="ts">
	export let data;

	const projects = [
		{
			code: 'AetherCore',
			url: '/dashboard/aethercore',
			desc: 'Authentication & system identity core.'
		},
		{
			code: 'BioSync',
			url: 'https://bioboard.fabalos.com',
			external: true,
			desc: 'Biohack ingestion, automation, enrichment workflows.'
		},
		{
			code: 'CortexOps',
			url: '/dashboard/cortexops',
			desc: 'Ops orchestration, monitoring, meta pipelines.'
		}
	];
</script>

<div class="mt-8 px-10">
	<h1 class="text-3xl font-bold text-blue-300">
		Welcome, {data?.user?.email}!
	</h1>

	<p class="mt-2 mb-8 text-gray-400">All active system sandboxes are listed below.</p>

	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each projects as p}
			<a
				href={p.url}
				target={p.external ? '_blank' : '_self'}
				rel="noopener noreferrer"
				class="
          block rounded-xl border border-blue-800/40 bg-blue-900/10 p-6
          shadow-lg backdrop-blur-sm transition-all duration-200
          hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-800/20
          hover:shadow-blue-700/30
        "
			>
				<h2 class="mb-1 text-xl font-semibold text-blue-300">
					{p.code}
				</h2>

				<p class="text-sm text-gray-400">
					{p.desc}
				</p>

				{#if p.external}
					<div class="mt-3 text-xs text-blue-400 opacity-70">🔗 Opens external link</div>
				{/if}
			</a>
		{/each}
	</div>
</div>
