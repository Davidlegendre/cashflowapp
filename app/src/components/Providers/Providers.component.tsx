'use client'
import { SessionProvider, useSession } from 'next-auth/react';
export default function Providers({children}: any){
    
return (
    <SessionProvider>
        {children} 
    </SessionProvider>
)
}