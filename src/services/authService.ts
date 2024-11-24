export async function apiSignIn (email: string, password: string): Promise<any> {
  try {
    const response = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })

    if (!response.ok) {
      const { error } = await response.json()
      throw new Error(error || 'Failed to sign in.')
    }

    return await response.json()
  } catch (error: any) {
    console.error('SignIn Error:', error.message)
    throw new Error(error.message || 'An unexpected error occurred.')
  }
}

export async function apiSignUp (username: string, email: string, password: string): Promise<any> {
  try {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password })
    })

    if (!response.ok) {
      const { error } = await response.json()
      throw new Error(error || 'Failed to sign up.')
    }

    return await response.json()
  } catch (error: any) {
    console.error('SignUp Error:', error.message)
    throw new Error(error.message || 'An unexpected error occurred.')
  }
}
