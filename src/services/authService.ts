'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/utils/supabase/server'

export async function signIn (formData: FormData) {
  const supabase = await createClient()
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string
  }

  const { error } = await supabase.auth.signInWithPassword(data)
  if (error) {
    console.log(error)
    return {
      success: false,
      message: error.message
    }
  }

  revalidatePath('/', 'layout')
  return {
    success: true,
    message: 'Successfully signed in.'
  }
}

export async function signUp (formData: FormData) {
  const supabase = await createClient()
  const payload = {
    email: formData.get('email') as string,
    password: formData.get('password') as string
  }

  const { data, error } = await supabase.auth.signUp(payload)
  if (error) {
    console.log(error)
    return {
      success: false,
      message: error.message
    }
  }
  if (data.user) {
    const { error: insertError } = await supabase.from('users').insert([
      {
        id: data.user.id,
        email: data.user.email,
        username: formData.get('username') as string
      }
    ])

    if (insertError) {
      console.log(insertError)
      return {
        success: false,
        message: 'Failed to create user in database.',
      }
    }
  }

  revalidatePath('/', 'layout')
  return {
    success: true,
    message: 'Account created successfully!'
  }
}
