import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Providers from './provider';

export const metadata: Metadata = {
  title: 'NovaStack -- Coming Soon',
  description: 'NovaStack Technologies Pty Ltd - Software and Cloud Solutions',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}