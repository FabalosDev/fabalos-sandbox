<script lang="ts">
	export let form;
</script>

<h1>Login</h1>

<form method="POST">
	<input name="email" type="email" placeholder="Email" autocomplete="email" required />

	<input
		name="password"
		type="password"
		placeholder="Password"
		autocomplete="current-password"
		required
	/>

	<button type="submit">Login</button>
</form>

{#if form?.error}
	<p>{form.error}</p>
{/if}

<p class="mt-4 text-center text-sm">
	Don’t have an account?
	<a href="/register" class="text-blue-500 hover:underline">Register here</a>
</p>
