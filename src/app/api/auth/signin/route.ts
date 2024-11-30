import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function POST (request: Request) {
  const supabase = await createClient()
  const formData = await request.json()

  const data = {
    email: formData.email as string,
    password: formData.password as string
  }

  const { error } = await supabase.auth.signInWithPassword(data)
  if (error) {
    console.error(error)
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    )
  }

  return NextResponse.json({
    success: true,
    message: 'Successfully signed in.'
  })
}
