<script lang="ts">
  import '$styles/global.css';
  import '$styles/app.css';
</script>

<svelte:head>
  <!-- 🌐 SEO Metadata -->
  <title>Foxther Dev Lab — Experimental Sandbox</title>
  <meta name="description" content="Foxther Dev Lab is Frank's private sandbox for stealth tools, automation, and AI integrations using GPT, n8n, and SvelteKit." />
  <meta name="keywords" content="foxther, fabaverse, gpt, n8n, sveltekit, automation, internal tools, ai" />
  <meta name="author" content="Frank (Foxther Verified)" />

  <!-- 📣 Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://sandbox.fabalos.com" />
  <meta property="og:title" content="Foxther Dev Lab — Experimental Sandbox" />
  <meta property="og:description" content="Explore automation workflows, test GPT tools, and prototype internal systems in Foxther’s verified playground." />
  <meta property="og:image" content="https://sandbox.fabalos.com/og-sandbox.png" />

  <!-- 🐦 Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://sandbox.fabalos.com" />
  <meta name="twitter:title" content="Foxther Dev Lab — Experimental Sandbox" />
  <meta name="twitter:description" content="Explore automation workflows, test GPT tools, and prototype internal systems in Foxther’s verified playground." />
  <meta name="twitter:image" content="https://sandbox.fabalos.com/og-sandbox.png" />

  <!-- 🔖 Favicon & Theme -->
  <link rel="icon" href="/foxther.png" type="image/png" />
  <meta name="theme-color" content="#0B1120" />
</svelte:head>

<!-- 🌌 Global Layout Shell -->
<div class="min-h-screen text-main font-sans bg-[var(--background)]">
  <slot />
</div>