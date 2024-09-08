import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login', 
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnHome = nextUrl.pathname.startsWith('/user/home');

      if (isOnHome) {
        if (isLoggedIn) return true;
        return false; 
      }
      return true; 
    },
  },
  providers: [], 
} satisfies NextAuthConfig;
