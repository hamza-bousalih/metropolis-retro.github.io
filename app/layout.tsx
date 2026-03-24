import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter_Tight } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { MagneticCursor } from "@/components/ui/magnetic-cursor"
import "./globals.css"

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
})

export const metadata: Metadata = {
  title: "Metropolis Retro | Chess Club",
  description: "Metropolis Retro is a Brisbane chess club hosting official meetups, tournaments, and community events for players of all levels.",
  keywords: ["chess club", "Brisbane chess", "chess meetup", "chess events", "Metropolis Retro"],
  authors: [{ name: "Metropolis Retro Chess Club" }],
  openGraph: {
    title: "Metropolis Retro | Chess Club",
    description: "Join Metropolis Retro in Brisbane for regular chess meetups, social games, and competitive events.",
    type: "website",
  },
  generator: "Seyyed Ali Mohammadiyeh (Max Base)",
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.className} font-sans antialiased`}>
        <MagneticCursor />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
