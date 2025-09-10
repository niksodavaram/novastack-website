'use client'

import { Container, Typography, Stack, Link as MuiLink } from '@mui/material'
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
            <MuiLink href="mailto:info@novastack.com.au" color="primary">
              info@novastack.com.au
            </MuiLink>
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <MuiLink component={Link} href="/about" color="primary" underline="hover">
              → About Us
            </MuiLink>
          </Typography>
        </Stack>
      </Stack>
    </Container>
  )
}