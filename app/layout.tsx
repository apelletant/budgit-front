import type React from "react"
import type { Metadata } from "next"

import "./globals.scss"

export const metadata: Metadata = {
  title: "Budgit",
  description: "A simple app to fetch and display posts",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

import './globals.css'