import { apiAccess } from '@/services/apiService'

export async function signIn (formData: FormData): Promise<any> {
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string
  }

  return apiAccess
    .post('/api/auth/signin', data)
    .then((response: any) => {
      return {
        success: true,
        message: 'Successfully signed in.',
        data: response
      }
    })
    .catch((err: any) => {
      return {
        success: false,
        message: err.message || 'An unexpected error occurred.'
      }
    })
}

export async function signUp (formData: FormData): Promise<any> {
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    username: formData.get('username') as string
  }

  return apiAccess
    .post('/api/auth/signup', data)
    .then((response: any) => {
      return {
        success: true,
        message: 'Account created successfully!',
        data: response
      }
    })
    .catch((err: any) => {
      return {
        success: false,
        message: err.message || 'An unexpected error occurred.'
      }
    })
}
