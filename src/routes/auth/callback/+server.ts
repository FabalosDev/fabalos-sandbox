import { json } from '@sveltejs/kit'
import { createServerClient } from '@supabase/ssr'
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'

export async function POST({ request, cookies }) {
  const supabase = createServerClient(
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(key) {
          return cookies.get(key)
        },
        set(key, value, options) {
          cookies.set(key, value, { path: '/', ...options }) // ✅ cookie path fix here
        },
        remove(key, options) {
          cookies.delete(key, { path: '/', ...options })
        }
      }
    }
  )

  const { event, session } = await request.json()

  if (event === 'SIGNED_IN') {
    await supabase.auth.setSession(session) // ✅ FIXED here
  }

  return json({ success: true })
}