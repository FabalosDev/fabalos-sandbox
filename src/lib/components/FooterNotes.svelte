<script>
	export let year = new Date().getFullYear();
</script>

<footer class="mt-16 border-t border-gray-800 pt-8 text-sm text-gray-400">
	<p class="mb-1">
		© {year} <span class="font-semibold text-orange-400">Fabalos</span> — Built with Tailwind & SvelteKit.
	</p>

	<p class="mb-3">
		Links:
		<a href="/timeline" class="text-orange-400 hover:text-orange-300">Full Project Timeline</a> •
		<a href="/blog" class="text-orange-400 hover:text-orange-300">Blog</a>
	</p>

	<p class="flex items-center gap-1">
		<span>⚡</span> Powered by
		<span class="font-semibold text-orange-400">n8n Automation Engine</span>
		<span>• Designed & Orchestrated by</span>
		<a class="text-orange-400 hover:text-orange-300" href="https://fabalos.com"
			>Fabalos Automation</a
		>
	</p>
</footer>
