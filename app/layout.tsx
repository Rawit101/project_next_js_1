// app/layout.tsx
import { Providers } from './providers'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import './globals.css'

export const metadata = {
  title: 'My E-commerce Store',
  description: 'Shop the best products online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}