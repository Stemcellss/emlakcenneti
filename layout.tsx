export const metadata = {
  title: 'EmlakCenneti.com - Yapay Zeka Destekli Emlak Platformu',
  description: 'Yepyeni nesil emlak arama ve ilan platformu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}
