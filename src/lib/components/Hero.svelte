<script lang="ts">
  const greeting = "Hey Frank, welcome back to the lab.";
  const subtext = "Build. Break. Experiment. Just don’t forget to sleep.";
</script>

<section class="relative h-[calc(100vh-80px)] flex items-center justify-center text-center px-6">
  <div class="space-y-4">
    <h1 class="text-4xl sm:text-5xl md:text-6xl font-heading text-foreground font-bold leading-tight drop-shadow-md">
      {greeting}
    </h1>
    <p class="text-muted text-lg md:text-xl max-w-2xl mx-auto font-body">
      {subtext}
    </p>
    <div class="pt-4">
      <a href="/login" class="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 font-medium">
        Enter the Sandbox
      </a>
    </div>
  </div>
</section>