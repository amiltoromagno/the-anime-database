import { NextResponse } from 'next/server'
import supabase from '@/lib/supabase'

export async function POST (req: Request) {
  try {
    const { email, password, username } = await req.json()

    if (!email || !password || !username) {
      return NextResponse.json(
        { error: 'Email, password, and username are required' },
        { status: 400 }
      )
    }

    const { data, error: authError } = await supabase.auth.signUp({
      email,
      password
    })

    if (authError) {
      return NextResponse.json({ error: authError.message }, { status: 400 })
    }

    const { error: dbError } = await supabase.from('users').insert({
      email,
      username
    })

    if (dbError) {
      return NextResponse.json({ error: dbError.message }, { status: 500 })
    }

    return NextResponse.json({ message: 'User signed up successfully!' })
  } catch (err) {
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}
