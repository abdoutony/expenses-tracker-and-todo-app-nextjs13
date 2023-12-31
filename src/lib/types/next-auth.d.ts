import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    id: string;
    name: string;
    email: string;
    accessToken: string;
  }
}
