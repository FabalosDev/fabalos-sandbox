<script>
	import CaseStudyForm from '$lib/components/CaseStudyForm.svelte';
	export let data;

	let value = {
		...data.case,
		shortSummary: data.case.summary // map if needed
	};
</script>

<form method="POST" action="?/save">
	<CaseStudyForm {value} disabledSlug />
	<button type="submit" class="btn-green">Save Changes</button>
</form>
