import { Footer } from '@/app/components/Footer'
import { Navbar } from '@/app/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { BackToTop } from '@/app/components/BackToTop'

export const metadata: Metadata = {
  title: 'Web Car',
  description: 'The bests cars',
  icons: [
    {
      url: '/logo.svg',
    },
  ],
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
        <BackToTop />
      </body>
    </html>
  )
}
