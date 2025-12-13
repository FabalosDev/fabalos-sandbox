<script lang="ts">
  import { supabase } from '$lib/supabase/client'
  import { goto } from '$app/navigation'

  let email = ''
  let password = ''
  let error = ''

  const register = async () => {
    const { error: signupError } = await supabase.auth.signUp({ email, password })
    if (signupError) {
      error = signupError.message
    } else {
      goto('/dashboard')
    }
  }
</script>

<h1>Register</h1>
<input
  id="register-email"
  name="email"
  bind:value={email}
  type="email"
  placeholder="Email"
  autocomplete="email"
/>
<input
  id="register-password"
  name="password"
  bind:value={password}
  type="password"
  placeholder="Password"
  autocomplete="new-password"
/>
<button on:click={register}>Register</button>
{#if error}<p>{error}</p>{/if}

<p class="text-sm text-center mt-4">
  Already have an account?
  <a href="/login" class="text-blue-500 hover:underline">Login here</a>
</p>