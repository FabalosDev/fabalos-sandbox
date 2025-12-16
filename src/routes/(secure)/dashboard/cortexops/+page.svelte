<script>
	const modules = [
		{
			name: 'Blog Posts',
			url: '/dashboard/cortexops/blog',
			desc: 'View, edit, and manage all blog content.'
		},
		{
			name: 'New Blog Post',
			url: '/dashboard/cortexops/blog/new',
			desc: 'Create a new article for Fabalos Automation.'
		},
		{
			name: 'Case Studies',
			url: '/dashboard/cortexops/case',
			desc: 'Manage and organize client case studies.'
		},
		{
			name: 'New Case Study',
			url: '/dashboard/cortexops/case/new',
			desc: 'Add a new structured case study entry.'
		}
	];
</script>

<h1 class="mt-4 mb-4 text-2xl font-bold text-blue-300">🧠 CortexOps</h1>
<p class="mb-8 text-gray-400">
	Your internal CMS for Fabalos Automation — blogs, case studies, and content workflows.
</p>
<section class="container">
	<div class="space-y-6">
		{#each modules as m}
			<a
				href={m.url}
				class="block rounded-lg border border-blue-900/30 bg-blue-900/10
             p-5 shadow-lg backdrop-blur-sm transition
             hover:bg-blue-800/20 hover:shadow-blue-600/20"
			>
				<h2 class="text-lg font-semibold text-blue-300">{m.name}</h2>
				<p class="text-sm text-gray-400">{m.desc}</p>
			</a>
		{/each}
	</div>
</section>
