'use client'
import './globals.css'
import {SessionProvider} from 'next-auth/react'
import { ReactNode } from 'react'

interface IProps
{
  children: ReactNode,
  session: any
}

export default function RootLayout({
  children,
  session
}: IProps) {
  
  return (
    <html lang="es">
    <head/>    
    <body>   
      <SessionProvider session={session}>
        {children}
      </SessionProvider>
      </body>
  </html>
  )
}
