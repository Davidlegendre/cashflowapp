import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import { signInService } from '../../../app/src/services/auth.service';
import { AuthLoadingStatus } from '../../../app/types/authtypes/statusauth.enum';

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email@gmail.com" },
        password: {  label: "Contraseña", type: "password" }
      },
      async authorize(credentials: any, req: any) {
        const {email, password} = credentials
        
        
        const result = await signInService({email, password})    
        if(result)
        {
            const user = await result.Data
           
            return user
        }else return null
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.user = token;

      return session;
    },
  
  },
  pages:{
    signIn: '/auth'
  }
  
}
export default NextAuth(authOptions)