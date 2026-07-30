import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { dbConnect } from '@/lib/mongodb'
import { User } from '@/models/User'

const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        await dbConnect()
        const user = await User.findOne({ email: credentials.email })
        if (!user) return null
        const valid = await bcrypt.compare(String(credentials.password), user.password)
        if (!valid) return null
        return { id: user._id.toString(), email: user.email, name: user.name }
      },
    }),
  ],
  pages: { signIn: '/admin/login' },
  session: { strategy: 'jwt' },
})

export { GET, POST, auth, signIn, signOut }
