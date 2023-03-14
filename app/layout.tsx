import './globals.css'
import Providers from './src/components/Providers/Providers.component'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="es">
    <head/>    
    <body>   
      <Providers>{children}</Providers>
    </body>
  </html>
  )
}
