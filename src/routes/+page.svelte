<!-- src/routes/+page.svelte -->
<script lang="ts">
  // 📦 Component Imports
  import About from '$lib/components/About.svelte';
  import CTA from '$lib/components/CTA.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Stack from '$lib/components/Stack.svelte';
</script>

<!-- 🧭 Global Layout -->
<Header />

<main>
  <!-- 🚀 Landing Sections -->
  <Hero />
  <About />
  <Stack />
  <CTA />
</main>


<Footer />