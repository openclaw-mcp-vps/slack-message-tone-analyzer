import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Slack Tone Analyzer — Analyze Slack message tone before sending',
  description: 'AI-powered tone analysis for Slack messages. Catch offensive or unclear communication before it causes problems. Built for remote teams, managers, and HR.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8bd701d6-5831-4ff1-b762-edf8103687d0"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
