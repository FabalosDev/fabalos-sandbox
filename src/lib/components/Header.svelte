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
<header class="sticky top-0 z-50 w-full border-b border-muted/30 bg-background/90 backdrop-blur-md text-main">
  <div class="container flex items-center justify-between px-6 py-4">

    <!-- 🔰 Logo -->
    <a href="/" aria-label="Homepage" class="flex items-center gap-2">
      <img
        src="/logos/logo-placeholder.png"
        alt="DevLab Logo"
        class="h-10 w-auto"
      />
      <span class="font-heading text-lg font-semibold text-primary">DevLab</span>
    </a>

    <!-- 🌐 Desktop Navigation -->
    <nav class="hidden md:flex items-center gap-6 font-body text-muted text-sm">
      {#each links as { label, href }}
        <a
          href={href}
          class="relative font-heading transition-colors duration-300 hover:text-primary group"
        >
          <span class="relative z-10">{label}</span>
          <span
            class="absolute left-0 -bottom-0.5 h-[2px] w-full origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-x-100"
          ></span>
        </a>
      {/each}
    </nav>

    <!-- 📱 Hamburger Toggle -->
    <button
      class="md:hidden focus:outline-none"
      on:click={() => (isOpen = !isOpen)}
      aria-label="Toggle mobile menu"
    >
      <svg
        class="h-6 w-6 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {#if isOpen}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        {:else}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        {/if}
      </svg>
    </button>
  </div>

  <!-- 📱 Mobile Slide Menu -->
  {#if isOpen}
    <nav
      in:slide={{ duration: 250 }}
      out:slide={{ duration: 200 }}
      class="md:hidden space-y-3 px-6 pb-6 pt-2 text-muted bg-background transition-all"
    >
      {#each links as { label, href }}
        <a
          href={href}
          class="block border-b border-muted/20 py-2 font-medium transition hover:text-primary"
          on:click={() => (isOpen = false)}
        >
          {label}
        </a>
      {/each}
    </nav>
  {/if}
</header>