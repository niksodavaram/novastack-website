'use client';

import { Container, Typography, Stack } from '@mui/material';
import Logo from '../../components/logo';

export default function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', py: 8 }}>
      <Stack spacing={4} alignItems="center">
        {/* Logo Section */}
        <Logo />

        {/* About Us Section */}
        <Stack spacing={1}>
          <Typography variant="h4" gutterBottom>
            About Us
          </Typography>
          <Typography color="text.secondary" paragraph>
            NovaStack Technologies Pty Ltd is an Australian technology company
            dedicated to cutting-edge software and cloud solutions.
          </Typography>
        </Stack>

        {/* Company Registration Section */}
        <Stack spacing={0.5}>
          <Typography variant="h4" gutterBottom>
            Company Registration
          </Typography>
          <Typography>Company Name: NovaStack Technologies Pty Ltd</Typography>
          <Typography>ACN: 690 831 675</Typography>
          <Typography>Type: Proprietary limited by shares</Typography>
          <Typography>Registered In: Victoria, Australia</Typography>
          <Typography>Date of Registration: 9 September 2025</Typography>
        </Stack>

        {/* Contact Section */}
        <Stack spacing={1}>
          <Typography variant="h4" gutterBottom>
            Contact
          </Typography>
          <Typography>
            Email: <a href="mailto:info@novastack.com.au">info@novastack.com.au</a>
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
}