import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

export const metadata: Metadata = {
  title: 'NovaStack – Coming Soon',
  description: 'NovaStack Technologies Pty Ltd - Software and Cloud Solutions',
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#19b5fe' },
    secondary: { main: '#243f8c' },
    background: { default: '#0a0a0a' },
  },
  typography: {
    fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}