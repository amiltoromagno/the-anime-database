import { NextResponse } from 'next/server'
import supabase from '@/lib/supabase'

export async function POST (req: Request) {
  try {
    const { emailOrUsername, password } = await req.json()

    if (!emailOrUsername || !password) {
      return NextResponse.json(
        { error: 'Email/Username and password are required' },
        { status: 400 }
      )
    }
    const email = emailOrUsername

    const { data: authData, error: authError } =
      await supabase.auth.signInWithPassword({
        email,
        password
      })

    if (authError) {
      return NextResponse.json(
        { error: 'Invalid email/username or password' },
        { status: 401 }
      )
    }

    return NextResponse.json({
      message: 'Login successful',
      user: authData.user
    })
  } catch (err) {
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}
