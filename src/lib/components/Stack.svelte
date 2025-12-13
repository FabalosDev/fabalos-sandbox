<script lang="ts">
  import {
    Flame,
    Wind,
    FlaskConical,
    Brush,
    Rocket,
    Github
  } from 'lucide-svelte';

  const stack = [
    { label: 'SvelteKit', icon: Flame },
    { label: 'Tailwind CSS', icon: Wind },
    { label: 'Supabase', icon: FlaskConical },
    { label: 'Lucide Icons', icon: Brush },
    { label: 'Vercel', icon: Rocket },
    { label: 'GitHub', icon: Github }
  ];
</script>

<section id="stack" class="py-20 px-6 sm:px-12 md:px-20 bg-background text-main">
  <div class="max-w-4xl mx-auto space-y-10 text-center">
    <h2 class="text-3xl sm:text-4xl font-heading font-bold text-primary">
      The Tools We're Playing With
    </h2>

    <p class="text-lg sm:text-xl font-body text-muted leading-relaxed">
      Keeping it light, clean, and powerful. These are our go-to toys for building things that actually work.
    </p>

    <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center text-lg font-body text-muted">
      {#each stack as tech}
        <div class="flex items-center gap-3 hover:text-primary transition">
          <svelte:component this={tech.icon} class="w-5 h-5" />
          <span>{tech.label}</span>
        </div>
      {/each}
    </div>
  </div>
</section>