export const apiAccess = {
  get: async (url: string, headers = {}): Promise<any> => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const fullUrl = `${baseUrl}${url}`

    try {
      const response = await fetch(fullUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...headers
        }
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || 'Failed to fetch')
      }

      return response.json()
    } catch (err: any) {
      throw new Error(err.message || 'An unexpected error occurred.')
    }
  },

  post: async (url: string, body: any, headers = {}): Promise<any> => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const fullUrl = `${baseUrl}${url}`

    try {
      const response = await fetch(fullUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...headers
        },
        body: JSON.stringify(body)
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || 'Failed to fetch')
      }

      return response.json()
    } catch (err: any) {
      throw new Error(err.message || 'An unexpected error occurred.')
    }
  }
}
