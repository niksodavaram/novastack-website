'use client'

import { Container, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import Logo from '../components/logo'

export default function HomePage() {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', py: 8 }}>
      <Grid container direction="column" spacing={4} alignItems="center">
        <Grid item>
          <Logo />
        </Grid>
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Coming Soon
          </Typography>
          <Typography color="text.secondary">
            Our website is under construction. Stay tuned.
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 2 }}>
            Contact:{' '}
            <a href="mailto:info@novastack.com.au">info@novastack.com.au</a>
          </Typography>

          {/* ✅ Added About Us link */}
          <Typography sx={{ mt: 4 }}>
            <Link href="/about" style={{ color: '#19b5fe', textDecoration: 'none' }}>
              → About Us
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}