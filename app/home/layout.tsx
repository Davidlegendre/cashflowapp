import Footer from "../src/components/Footer/Footer.component"
import Nav from "../src/components/Nav/Nav.component"
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