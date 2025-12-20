<script lang="ts">
	import CaseStudyForm from '$lib/components/CaseStudyForm.svelte';
	export let data;

	let value = {
		...data.caseStudy
	};
</script>

<form method="POST" action="?/save">
	<CaseStudyForm {value} disabledSlug />
	<button type="submit" class="btn-green mt-4">Save Changes</button>
</form>
