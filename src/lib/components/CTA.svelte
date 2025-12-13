<!-- src/lib/components/CTA.svelte -->
<script lang="ts">
  import { FlaskConical } from 'lucide-svelte'; // Lab-themed icon 😏
</script>

<section id="join" class="py-24 px-6 sm:px-12 md:px-20 bg-muted/10 text-main text-center space-y-6">
  <div class="flex justify-center">
    <FlaskConical class="h-10 w-10 text-primary" />
  </div>

  <h2 class="text-3xl sm:text-4xl font-heading font-bold text-primary">
    You’ve seen the outside. Wanna see the inside?
  </h2>

  <p class="text-lg sm:text-xl font-body text-muted leading-relaxed max-w-2xl mx-auto">
    This isn’t a newsletter. It’s a front-row pass to experiments, late-night builds, and maybe a glitch or two.
    Frank’s lab doesn’t need spectators — it needs co-conspirators.
  </p>

  <a
    href="/login"
    class="inline-block mt-4 px-6 py-3 bg-primary text-background rounded-full font-heading text-lg transition hover:bg-primary/80"
  >
    Join the Lab
  </a>
</section>