import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { verifyUser } from '@/lib/auth'

const authOptions: any = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize (credentials: any) {
        const { email, password } = credentials

        // Replace with your own user verification logic
        const user = await verifyUser(email, password)

        if (user) {
          return { id: user.id, email: user.email, name: user.name }
        }
        throw new Error('Invalid credentials')
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
