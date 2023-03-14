import Footer from "../src/components/Footer/Footer.component"
import Nav from "../src/components/Nav/Nav.component"


export default async function RootLayout(props: any) {
 
  return (
   <>
    <Nav>
        {props.children}
    </Nav>
    <Footer></Footer>
   </>
  )
}