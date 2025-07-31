import type { Metadata } from 'next';
import { Inter, Cairo } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const cairo = Cairo({ subsets: ['arabic'] });

export const metadata: Metadata = {
  title: 'ConnectVerse - منصة الشبكة الاجتماعية المتطورة',
  description: 'منصة شبكة اجتماعية ثورية تجمع بين أحدث التقنيات والذكاء الاصطناعي',
  keywords: ['social network', 'AI', 'chat', 'content', 'community'],
  authors: [{ name: 'ConnectVerse Team' }],
  creator: 'ConnectVerse Team',
  publisher: 'ConnectVerse',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
    languages: {
      'ar-SA': '/ar',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: 'ConnectVerse - The Ultimate Social Network Platform',
    description: 'منصة شبكة اجتماعية ثورية تجمع بين أحدث التقنيات والذكاء الاصطناعي',
    url: '/',
    siteName: 'ConnectVerse',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ConnectVerse Logo',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ConnectVerse - The Ultimate Social Network Platform',
    description: 'منصة شبكة اجتماعية ثورية تجمع بين أحدث التقنيات والذكاء الاصطناعي',
    images: ['/og-image.png'],
    creator: '@ConnectVerse',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${inter.className} ${cairo.className} antialiased`}>
        <div id="root">
          {children}
        </div>
        <div id="modal-root" />
        <div id="tooltip-root" />
      </body>
    </html>
  );
}