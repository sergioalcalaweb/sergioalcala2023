import './globals.css'
import { Lato } from 'next/font/google'
import { Metadata } from 'next'


const inter = Lato({ subsets: ['latin'], weight: "300" })

export const metadata: Metadata = {
  title: 'Sergio Alcala',
  description: 'Sergio Alcala is software Engineer with over 11 years of experience in the field, passionate about creating intuitive and appealing web experiences and focus on delivering high-quality projects',
  keywords: [
    "developer",
    "frontend",
    "backend",
    "software engineer",
    "Sergio Alcala",
    "Sergio",
    "alcala"
  ],
  themeColor: "#1E293B",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${inter.className} bg-gradient-to-r from-slate-800 to-gray-900 text-white font-light`}>{children}</body>
    </html>
  )
}
