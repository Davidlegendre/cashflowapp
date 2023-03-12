'use client'
import './globals.css'
import {SessionProvider} from 'next-auth/react'
export default function RootLayout({
  children,
  session
}: any) {
  
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
