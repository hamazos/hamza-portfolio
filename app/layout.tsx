import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SkipToContent } from "@/components/skip-to-content"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Hamza Weslati - Senior IT Manager & Cybersecurity Specialist",
  description:
    "Experienced IT Manager with 12+ years of expertise in cybersecurity, IT infrastructure, and strategic project management. ISO 27001 certified expert.",
  keywords: ["IT Manager", "Cybersecurity", "ISO 27001", "SOC", "Infrastructure", "IT Security"],
  authors: [{ name: "Hamza Weslati" }],
  openGraph: {
    title: "Hamza Weslati - Senior IT Manager & Cybersecurity Specialist",
    description:
      "Experienced IT Manager with 12+ years of expertise in cybersecurity, IT infrastructure, and strategic project management.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <SkipToContent />
        <Suspense>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
