import { NextResponse } from 'next/server'
import supabase from '@/lib/supabase'

export async function POST (req: Request) {
  try {
    const { username, email, password } = await req.json()

    if (!email || !password || !username) {
      return NextResponse.json(
        { error: 'Email, password, and username are required.' },
        { status: 400 }
      )
    }

    const { data, error: authError } = await supabase.auth.signUp({
      email,
      password
    })

    if (authError || !data.user) {
      return NextResponse.json(
        { error: authError?.message || 'Failed to sign up user.' },
        { status: 400 }
      )
    }

    const { error: dbError } = await supabase.from('users').insert({
      email,
      username
    })

    if (dbError) {
      return NextResponse.json(
        { error: dbError.message || 'Failed to save user details.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: 'User signed up successfully!' })
  } catch (err) {
    console.error('Signup Error:', err)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}
