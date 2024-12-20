import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <audio autoPlay loop>
          <source src="https://www.youtube.com/watch?v=XKRaJl2Vyfc" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        {children}
      </body>
    </html>
  )
}

