'use client'

import { Container, Typography, Stack } from '@mui/material'
import Link from 'next/link'
import Logo from '../components/logo'

export default function HomePage() {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', py: 8 }}>
      <Stack spacing={4} alignItems="center">
        <Logo />
        <Stack spacing={2}>
          <Typography variant="h4" gutterBottom>
            Coming Soon
          </Typography>
          <Typography color="text.secondary">
            Our website is under construction. Stay tuned.
          </Typography>
          <Typography color="text.secondary">
            Contact:{' '}
            <a href="mailto:info@novastack.com.au">info@novastack.com.au</a>
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <Link href="/about" style={{ color: '#19b5fe', textDecoration: 'none' }}>
              → About Us
            </Link>
          </Typography>
        </Stack>
      </Stack>
    </Container>
  )
}