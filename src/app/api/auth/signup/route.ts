import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function POST (request: Request) {
  const supabase = await createClient()
  const formData = await request.json()

  const payload = {
    email: formData.email as string,
    password: formData.password as string
  }

  const { data, error } = await supabase.auth.signUp(payload)
  if (error) {
    console.error(error)
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    )
  }

  if (data.user) {
    const { error: insertError } = await supabase.from('users').insert([
      {
        id: data.user.id,
        email: data.user.email,
        username: formData.username as string
      }
    ])

    if (insertError) {
      console.error(insertError)
      return NextResponse.json(
        { success: false, message: 'Failed to create user in database.' },
        { status: 500 }
      )
    }
  }

  return NextResponse.json({
    success: true,
    message: 'Account created successfully!'
  })
}
