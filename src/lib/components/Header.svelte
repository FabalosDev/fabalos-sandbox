<script lang="ts">
	import { slide } from 'svelte/transition';

	let isOpen = false;

	const links = [
		{ label: 'About', href: '#about' },
		{ label: 'Tech Stack', href: '#stack' },
		{ label: "Let's Begin", href: '#join' },
		{ label: 'Log In', href: '/login' }
	];
</script>

<!-- 🧭 Sticky Navigation Header -->
<header
	class="border-muted/30 bg-background/90 text-main sticky top-0 z-50 w-full border-b backdrop-blur-md"
>
	<div class="container flex items-center justify-between px-6 py-4">
		<!-- 🔰 Logo -->
		<a href="/" aria-label="Homepage" class="flex items-center gap-2">
			<img src="/logos/logo-placeholder.png" alt="DevLab Logo" class="h-10 w-auto" />
			<span class="font-heading text-primary text-lg font-semibold">DevLab</span>
		</a>

		<!-- 🌐 Desktop Navigation -->
		<nav class="font-body text-muted hidden items-center gap-6 text-sm md:flex">
			{#each links as { label, href }}
				<a
					{href}
					class="font-heading hover:text-primary group relative transition-colors duration-300"
				>
					<span class="relative z-10">{label}</span>
					<span
						class="bg-primary absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full transition-transform duration-300 group-hover:scale-x-100"
					></span>
				</a>
			{/each}
		</nav>

		<!-- 📱 Hamburger Toggle -->
		<button
			class="focus:outline-none md:hidden"
			on:click={() => (isOpen = !isOpen)}
			aria-label="Toggle mobile menu"
		>
			<svg
				class="text-primary h-6 w-6"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				{#if isOpen}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				{:else}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				{/if}
			</svg>
		</button>
	</div>

	<!-- 📱 Mobile Slide Menu -->
	{#if isOpen}
		<nav
			in:slide={{ duration: 250 }}
			out:slide={{ duration: 200 }}
			class="text-muted bg-background space-y-3 px-6 pt-2 pb-6 transition-all md:hidden"
		>
			{#each links as { label, href }}
				<a
					{href}
					class="border-muted/20 hover:text-primary block border-b py-2 font-medium transition"
					on:click={() => (isOpen = false)}
				>
					{label}
				</a>
			{/each}
		</nav>
	{/if}
</header>

{#if import.meta.env.MODE !== 'production'}
	<div class="fixed top-2 right-2 z-50 rounded bg-orange-600 px-3 py-1 text-xs text-white">
		SANDBOX
	</div>
{/if}
