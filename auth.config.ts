import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login', 
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnHome = nextUrl.pathname.startsWith('/user/home');

      // If the user is trying to access the home page
      if (isOnHome) {
        if (isLoggedIn) return true; // Allow logged-in users to access home
        return false; // Redirect unauthenticated users to login page
      }
      
      // Allow logged-in users to access other pages
      return true; // Allow access to other pages for logged-in users
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
