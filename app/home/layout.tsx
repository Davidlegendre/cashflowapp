'use client'
import { useSession } from "next-auth/react"
import Footer from "../src/components/Footer/Footer.component"
import Nav from "../src/components/Nav/Nav.component"
import { User } from "../types/authtypes/User.type"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data }: any = useSession()
  const person: User | null = data?.user?.persona
  return (
   <>
    <Nav person={person}>
        {children}
    </Nav>
    <Footer></Footer>
   </>
  )
}