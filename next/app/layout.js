import '@/styles/globals.css'

export const metadata = {
  title: 'Calculateur 3000',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
