import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { Admin, User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
 
async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

async function getAdmin(email: string): Promise<Admin | undefined> {
  try {
    const admin = await sql<Admin>`SELECT * FROM admins WHERE email=${email}`;
    return admin.rows[0];
  } catch (error) {
    console.error('Failed to fetch admin:', error);
    throw new Error('Failed to fetch admin.');
  }
}
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          // Check for admin first
          const admin = await getAdmin(email);
          if (admin) {
            const passwordsMatchAdmin = await bcrypt.compare(password, admin.password);
            if (passwordsMatchAdmin) {
              return admin; // Return admin object on successful login
            }
          }

          // If not an admin, check for user
          const user = await getUser(email);
          if (user) {
            const passwordsMatchUser = await bcrypt.compare(password, user.password);
            if (passwordsMatchUser) {
              return user; // Return user object on successful login
            }
          }
        }

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});