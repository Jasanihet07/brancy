import Providers from "@/modules/providers"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "@/components/common/Footer"

// import Footer from "@/components/common/Footer"

const inter = Inter({
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
})

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} relative font-sans`}>
        <Providers>
          
          {children}
          {modal}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
