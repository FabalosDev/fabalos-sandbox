<script lang="ts">
	import { Github, Twitter, Youtube, Instagram } from 'lucide-svelte';

	const socials = [
		{ icon: Github, href: 'https://github.com/FabalosDev' },
		{ icon: Twitter, href: 'https://x.com/ctrlshiftfrank' },
		{ icon: Instagram, href: 'https://instagram.com/ctrlshiftfrank' },
		{ icon: Youtube, href: 'https://youtube.com/@Fabaverse' }
	];
</script>

<footer class="bg-background border-muted/20 text-muted font-body w-full border-t">
	<div
		class="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row"
	>
		<div class="flex items-center gap-2">
			<img src="/foxther.png" alt="Foxther Sigil" class="h-8 w-auto" />
			<span class="font-heading text-muted/80 text-sm"
				>© {new Date().getFullYear()} Fabalos Sandbox</span
			>
		</div>

		<div class="flex items-center gap-5">
			{#each socials as { icon: Icon, href }}
				<a
					{href}
					target="_blank"
					rel="noopener noreferrer"
					class="social-icon-wrapper"
					aria-label="Social Link"
				>
					<Icon class="social-icon h-6 w-6" />
				</a>
			{/each}
		</div>
	</div>
</footer>
