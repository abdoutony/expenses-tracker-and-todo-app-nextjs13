import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  // the sesion will be kept in an http cookie
  // change to database if you want to store the session in db
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: "/",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          // const user = { id: "1", name: "Admin", email: "admin@admin.com" };
          const res = await fetch(`${process.env.BASE_FETCH_URL}/api/login`, {
            headers: {
              "Content-Type": "application/json",
            },
            next: {
              revalidate: 0,
            },
            method: "POST",
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          });
          const user = await res.json();
          if (user) {
            return user;
          }
          return null;
          // return user;
        } catch (error: any) {
          return null;
        }
      },
    }),
  ],
};
