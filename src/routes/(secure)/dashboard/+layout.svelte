<script lang="ts">
	import { supabase } from '$lib/supabase/client';
	import { goto } from '$app/navigation';

	const logout = async () => {
		await supabase.auth.signOut();
		goto('/login');
	};
</script>

<header class="flex items-center justify-between bg-gray-900 p-4 text-white shadow-md">
	<h1 class="text-lg font-bold">🦊 FoxOps Secure Area</h1>

	<!-- RIGHT SIDE -->
	<div class="flex items-center gap-3">
		{#if import.meta.env.MODE !== 'production'}
			<span class="rounded bg-orange-600 px-3 py-1 text-xs text-white"> SANDBOX </span>
		{/if}

		<button on:click={logout} class="rounded bg-red-600 px-4 py-2 hover:bg-red-700">
			Logout
		</button>
	</div>
</header>

<slot />
