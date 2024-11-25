import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export function sessionGuard (Component: any) {
  return async function AuthWrappedComponent (props: any) {
    const supabase = await createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
      redirect('/signin')
    }

    return <Component {...props} user={data.user} />
  }
}
