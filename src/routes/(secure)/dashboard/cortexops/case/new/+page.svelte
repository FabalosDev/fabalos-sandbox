<script>
	import CaseStudyForm from '$lib/components/CaseStudyForm.svelte';

	let value = {};
</script>

<form method="POST" action="?/save">
	<CaseStudyForm {value} />
	<button type="submit" class="btn-green">Save Case Study</button>
</form>
