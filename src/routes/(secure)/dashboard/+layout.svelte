<script lang="ts">
  import { supabase } from '$lib/supabase/client'
  import { goto } from '$app/navigation'
  export let data

  const logout = async () => {
    await supabase.auth.signOut()
    goto('/login')
  }
</script>

<header class="flex justify-between items-center p-4 bg-gray-900 text-white shadow-md">
  <h1 class="text-lg font-bold">🦊 FoxOps Secure Area</h1>
  <button on:click={logout} class="px-4 py-2 bg-red-600 hover:bg-red-700 rounded">
    Logout
  </button>
</header>

<slot />