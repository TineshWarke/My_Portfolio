import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tinesh Warke Portfolio',
  description: 'Created by Tinesh Warke',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="synthwave" className='scrollbar-none scroll-smooth'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
