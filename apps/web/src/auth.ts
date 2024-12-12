import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { db } from "@/db"
import bcryptjs from "bcryptjs";
import { JWT } from "next-auth/jwt";
import { JWTPayload, SignJWT, importJWK } from "jose";

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    idToken?: string;
  }
}

// to solve PENDING problem 
const generateJWT = async (payload: JWTPayload) => {
  const secret = process.env.JWT_SECRET || "secret";

  const jwk = await importJWK({ k: secret, alg: "HS256", kty: "oct" });

  const jwt = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("365d")
    .sign(jwk);

  return jwt;
};

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      async authorize(credentials) {
        let user = null;
        // TODO: get user from database
        user = await db.user.findUnique({
          where: {
            email: credentials.email as string,
          },
        });

        if (!user) {
          console.log("Invalid credentials");
          return null;
        }
        const isPasswordValid = await bcryptjs.compare(credentials.password as string, user.password);
        if (!isPasswordValid) {
          console.log("Invalid password");
          return null;
        }
        const jwt = await generateJWT({
          id: user.id,
        });

        return {
          id: user.id as string,
          email: user.email as string,
          role: user.role as string,
          token: jwt,
          name: user.name as string,
        };
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id as string;
        token.role = user.role as string;
        token.token = user.token as string;
      }
      return token;
    },
    session({ session, token }) {
      if (session) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.token = token.token;
      }
      return session;
    }
  },
  pages: {
    signIn: "/signin"
  },
  secret: process.env.AUTH_SECRET
})