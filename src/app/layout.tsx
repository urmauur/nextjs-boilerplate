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
  title: 'NextJs Boilerplate',
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-sm bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
