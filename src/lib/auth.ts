import supabase from './supabase'

export async function verifyUser (email: string, password: string) {
  const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single()

  if (error || !user) return null

  if (user.password === password) {
    return user
  }
  return null
}
