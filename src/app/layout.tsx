import { Footer } from '@/app/components/Footer'
import { Navbar } from '@/app/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Car',
  description: 'The bests cars',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
