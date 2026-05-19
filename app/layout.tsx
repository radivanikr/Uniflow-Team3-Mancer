import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Uniflow — Fix token distribution before it becomes chaos',
  description:
    'Uniflow helps Web3 teams sync spreadsheets with on-chain token distribution, detect allocation errors, and manage vesting changes without chaos.',
  openGraph: {
    title: 'Uniflow — Token Distribution Infrastructure',
    description: 'One unified flow from spreadsheet to on-chain token distribution.',
    images: ['/uniflow-logo.png']
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
