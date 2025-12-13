<script lang="ts">
  export let title: string = 'Card Title';
  export let summary: string = 'Short summary of the content or feature.';
  export let linkLabel: string = 'Learn more';
  export let linkHref: string = '#';
</script>

<!-- 🧱 Reusable Info Card -->
<div class="p-6 bg-white dark:bg-surface rounded-xl border border-primary shadow hover:shadow-lg transition duration-300">
  <h3 class="text-xl font-heading text-primary mb-2">
    {title}
  </h3>

  <p class="text-soft leading-relaxed mb-4">
    {summary}
  </p>

  <a
    href={linkHref}
    aria-label={linkLabel}
    rel="noopener"
    class="text-primary font-medium hover:underline"
  >
    {linkLabel}
  </a>
</div>