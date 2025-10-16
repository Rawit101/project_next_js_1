// app/layout.tsx
// ⚠️ ห้ามใส่ 'use client' ที่นี่
// ⚠️ ห้าม import component ที่ใช้ hooks โดยตรง

import { Providers } from './providers'
import './globals.css'

export const metadata = {
  title: 'My App',
  description: 'Created with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}