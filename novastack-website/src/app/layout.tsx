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
    google: 'mQUQ94yrSV_Ifqe_-3H90xXIkvbgK3wPNRlXaRQRHFk', // Your actual Google verification code
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NovaStack Technologies Pty Ltd",
    "alternateName": "NovaStack",
    "url": "https://novastack.com.au",
    "email": "info@novastack.com.au",
    "description": "Leading Australian technology company specializing in software development and cloud solutions",
    "areaServed": "Australia",
    "identifier": {
      "@type": "PropertyValue",
      "propertyID": "ACN",
      "value": "690 831 675"
    },
    "foundingDate": "2025-09-09",
    "foundingLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Victoria",
        "addressCountry": "AU"
      }
    },
    "sameAs": [
      // Add your social media URLs here when you have them
      // "https://www.linkedin.com/company/novastack-technologies",
      // "https://twitter.com/novastack"
    ]
  };

  return (
    <html lang="en-AU">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}