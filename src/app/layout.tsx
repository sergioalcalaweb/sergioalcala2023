import "./globals.css"
import { Lato } from "next/font/google"
import { Metadata } from "next"
import { siteConfig } from "@/config/site"

const inter = Lato({ subsets: ["latin"], weight: "300" })

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  themeColor: "#1E293B",
  authors: [
    {
      name: "Sergio Alcala",
      url: "https://github.com/sergioalcalaweb",
    },
  ],
  creator: "Sergio Alcala",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@checoipn",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-gradient-to-r from-slate-800 to-gray-900 text-white font-light`}
      >
        {children}
      </body>
    </html>
  )
}
