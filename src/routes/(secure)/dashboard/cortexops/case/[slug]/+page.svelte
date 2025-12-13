<script lang="ts">
	export let data;
	const cs = data.case;
</script>

<h1 class="text-3xl font-bold text-blue-300">{cs.title}</h1>

{#if cs.hero_image}
	<img src={cs.hero_image} class="my-6 rounded-xl" />
{/if}

<!-- SUMMARY PANELS -->
<section class="space-y-4">
	<div>
		<h2 class="text-xl font-semibold text-blue-300">Problem</h2>
		<p class="text-gray-300">{cs.summary.problem}</p>
	</div>

	<div>
		<h2 class="text-xl font-semibold text-blue-300">Solution</h2>
		<p class="text-gray-300">{cs.summary.solution}</p>
	</div>

	<div>
		<h2 class="text-xl font-semibold text-blue-300">Result</h2>
		<p class="text-gray-300">{cs.summary.result}</p>
	</div>
</section>

<!-- SECTIONS -->
{#if cs.sections?.length}
	<section class="mt-10 space-y-8">
		{#each cs.sections as sec}
			<div class="space-y-3">
				<h3 class="text-lg font-semibold text-blue-300">{sec.title}</h3>

				{#if sec.image}
					<img src={sec.image} class="rounded-lg" />
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
	class="mt-6 inline-block rounded rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-black hover:bg-green-700"
>
	Edit Case Study
</a>
