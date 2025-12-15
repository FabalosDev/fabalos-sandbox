<script lang="ts">
	export let form;
</script>

<h1>Register</h1>

<form method="POST">
	<input name="email" type="email" placeholder="Email" autocomplete="email" required />

	<input
		name="password"
		type="password"
		placeholder="Password"
		autocomplete="new-password"
		required
	/>

	<button type="submit">Register</button>
</form>

{#if form?.error}
	<p>{form.error}</p>
{/if}

<p class="mt-4 text-center text-sm">
	Already have an account?
	<a href="/login" class="text-blue-500 hover:underline">Login here</a>
</p>
