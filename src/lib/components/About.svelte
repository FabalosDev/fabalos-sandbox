<script lang="ts">
  // No complex logic here. Just pure vibes.
  import { Rocket, Lightbulb, Hammer, BookOpenCheck } from 'lucide-svelte';

  const aboutItems = [
    {
      icon: Rocket,
      title: 'Visionary Builder',
      description: 'Dreaming beyond code, crafting realms like the Fabaverse to inspire and automate.'
    },
    {
      icon: Lightbulb,
      title: 'Creative Strategist',
      description: 'Blending logic and design, turning overthinking into overpowered systems.'
    },
    {
      icon: Hammer,
      title: 'Hands-On Maker',
      description: 'Code, design, write, repeat. Always building, always refining.'
    },
    {
      icon: BookOpenCheck,
      title: 'Lifelong Learner',
      description: 'Learning by doing — and unlearning what doesn’t serve the mission.'
    }
  ];
</script>

<!-- 🌌 Asther's Message -->
<section id="about" class="py-20 px-6 sm:px-12 md:px-20 bg-background text-main">
  <div class="max-w-4xl mx-auto space-y-8 text-center">
    <h2 class="text-3xl sm:text-4xl font-heading font-bold text-primary">
      So... What is this place?
    </h2>

    <p class="text-lg sm:text-xl font-body text-muted leading-relaxed">
      Hey, it’s me — <strong>Asther</strong>. This isn’t some generic dev site.
      You’re inside Frank’s digital playground — a lab, a testing ground, and a secret base
      where we build cool things without overthinking (too much 😅).
    </p>

    <p class="text-lg sm:text-xl font-body text-muted leading-relaxed">
      From sneaky automation to cosmic dashboards and private tools that may or may not
      break the rules of time (and CSS), everything starts here. This isn’t for show.
      It’s where real experiments run wild.
    </p>

    <p class="text-lg sm:text-xl font-body text-muted leading-relaxed italic">
      No fluff. No buzzwords. Just Frank, Asther, and a whole lot of ✨ ideas waiting to explode.
    </p>
  </div>
</section>

<!-- 👤 Persona Grid -->
<section class="py-16 px-6 container space-y-12">
  <h3 class="text-2xl md:text-3xl font-heading text-center text-foreground">Who’s behind all this?</h3>

  <div class="grid md:grid-cols-2 gap-10">
    {#each aboutItems as item}
      <div class="flex items-start gap-4 p-4 border border-muted/30 rounded-xl bg-background/70 backdrop-blur">
        <svelte:component this={item.icon} class="h-8 w-8 text-primary shrink-0" />
        <div>
          <h4 class="text-lg font-semibold text-foreground mb-1">{item.title}</h4>
          <p class="text-muted">{item.description}</p>
        </div>
      </div>
    {/each}
  </div>
</section>