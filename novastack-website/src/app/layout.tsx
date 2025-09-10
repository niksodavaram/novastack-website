import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Providers from './provider';

export const metadata: Metadata = {
  metadataBase: new URL('https://novastack.com.au'),
  title: {
    default: 'NovaStack Technologies | Software & Cloud Solutions Australia',
    template: '%s | NovaStack Technologies'
  },
  description: 'NovaStack Technologies Pty Ltd (ACN: 690 831 675) - Leading Australian technology company specializing in cutting-edge software development and cloud solutions.',
  keywords: ['software development', 'cloud solutions', 'technology', 'Australia', 'Victoria', 'IT services', 'NovaStack'],
  authors: [{ name: 'NovaStack Technologies' }],
  creator: 'NovaStack Technologies Pty Ltd',
  publisher: 'NovaStack Technologies Pty Ltd',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'NovaStack Technologies | Software & Cloud Solutions',
    description: 'Leading Australian technology company specializing in software development and cloud solutions',
    url: 'https://novastack.com.au',
    siteName: 'NovaStack Technologies',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NovaStack Technologies',
    description: 'Software & Cloud Solutions Australia',
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
    google: 'your-google-verification-code', // Add this after verifying with Google Search Console
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-AU">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}