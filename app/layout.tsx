import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ZABBRU — Customize Your Mood',
  description: 'Luxury emotional phone cases designed to feel like memories.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
