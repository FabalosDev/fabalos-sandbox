<script lang="ts">
	export let data;
	const cs = data.case;
</script>

<svelte:head>
	<title>{cs.seo?.title ?? cs.title}</title>

	<meta name="description" content={cs.seo?.description ?? cs.summary} />

	<!-- Open Graph -->
	<meta property="og:title" content={cs.seo?.title ?? cs.title} />
	<meta property="og:description" content={cs.seo?.description ?? cs.summary} />
	<meta property="og:image" content={cs.seo?.ogImage ?? cs.hero_image} />

	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<h1 class="text-3xl font-bold text-blue-300">{cs.title}</h1>

{#if cs.hero_image}
	<img src={cs.hero_image} alt={cs.title} class="my-6 rounded-xl" />
{/if}

<section class="space-y-4">
	<div>
		<h2 class="text-xl font-semibold text-blue-300">Problem</h2>
		<p class="text-gray-300">{cs.problem}</p>
	</div>

	<div>
		<h2 class="text-xl font-semibold text-blue-300">Solution</h2>
		<p class="text-gray-300">{cs.solution}</p>
	</div>

	<div>
		<h2 class="text-xl font-semibold text-blue-300">Result</h2>
		<p class="text-gray-300">{cs.result}</p>
	</div>
</section>

{#if cs.sections?.length}
	<section class="mt-10 space-y-8">
		{#each cs.sections as sec}
			<div class="space-y-3">
				<h3 class="text-lg font-semibold text-blue-300">{sec.title}</h3>

				{#if sec.image}
					<img src={sec.image} alt={sec.title || cs.title} class="rounded-lg" />
				{/if}

				{#each sec.body as p}
					<p class="text-gray-300">{p}</p>
				{/each}
			</div>
		{/each}
	</section>
{/if}

<a
	href={`/dashboard/cortexops/case/${cs.slug}/edit`}
	class="mt-6 inline-block rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-black hover:bg-green-700"
>
	Edit Case Study
</a>
