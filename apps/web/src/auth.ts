import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      authorize: (credentials)=> {
        return {
          id: credentials.id as string,
          name: credentials.name as string,
          email: credentials.email as string
        }
      }
    })
  ],
  callbacks:{
    session: ({session, token}:any)=> {
      session.user.id = token.sub
      return session
    }
  },
  pages: {
    signIn: "/signin"
  },
  secret: process.env.AUTH_SECRET
})