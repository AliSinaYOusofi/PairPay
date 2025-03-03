import React from "react"
import "./globals.css"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "PairPay - Track Shared Expenses Across Multiple Currencies",
  description:
    "PairPay helps you track transactions between two people across multiple currencies, providing clear insights into who paid what and when.",
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

