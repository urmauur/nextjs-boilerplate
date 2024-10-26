import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '@/styles/index.scss';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Urmauur - NextJs Boilerplate',
  description:
    'A scalable, production-ready Next.js starter kit with best practices and modern tools.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <link
        rel='icon'
        type='image/png'
        href='/favicons/favicon-48x48.png'
        sizes='48x48'
      />
      <link rel='icon' type='image/svg+xml' href='/favicons/favicon.svg' />
      <link rel='shortcut icon' href='/favicons/favicon.ico' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/favicons/apple-touch-icon.png'
      />
      <meta name='apple-mobile-web-app-title' content='Urmauur' />
      <link rel='manifest' href='/favicons/site.webmanifest' />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-sm bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
