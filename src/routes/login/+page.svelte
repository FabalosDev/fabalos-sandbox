<script lang="ts">
  import { supabase } from '$lib/supabase/client'
  import { goto } from '$app/navigation'

  let email = ''
  let password = ''
  let error = ''

  const login = async () => {
    const { data, error: loginError } = await supabase.auth.signInWithPassword({ email, password })

    if (loginError) {
      error = loginError.message
    } else {
      // Sync session to SSR
      await fetch('/auth/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event: 'SIGNED_IN', session: data.session })
      })

      goto('/dashboard')
    }
  }
</script>

<h1>Login</h1>
<input
  id="email"
  name="email"
  bind:value={email}
  type="email"
  placeholder="Email"
  autocomplete="email"
/>
<input
  id="password"
  name="password"
  bind:value={password}
  type="password"
  placeholder="Password"
  autocomplete="current-password"
/>
<button on:click={login}>Login</button>
{#if error}<p>{error}</p>{/if}

<p class="text-sm text-center mt-4">
  Don’t have an account?
  <a href="/register" class="text-blue-500 hover:underline">Register here</a>
</p>