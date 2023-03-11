
import Footer from "../components/Footer/Footer.component"
import Nav from "../components/Nav/Nav.component"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
   <>
    <Nav>
        {children}
    </Nav>
    <Footer></Footer>
   </>
  )
}