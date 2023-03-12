'use client'
import { AuthContextType } from '@/app/types/authtypes/AuthContext.type';
import { SignInData } from '@/app/types/authtypes/SignInData.type';
import { User } from '@/app/types/authtypes/User.type';
import { createContext, useState } from 'react';

export const AuthContext = createContext({} as AuthContextType)

export default function AuthProvider({ children }: any){

    const [user, setUser] = useState<User | null>(null)

    const EsAutenticado = !!user

    async function signIn({email, password}: SignInData)
    {
        
    }



}