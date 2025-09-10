'use client';

import { Container, Typography, Grid } from '@mui/material';
import Logo from '../../components/logo';

export default function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', py: 8 }}>
      {/* Grid container */}
      <Grid container direction="column" spacing={4} alignItems="center">
        {/* Logo Section - No 'item' prop, use 'size' instead of 'xs' */}
        <Grid size={12}>
          <Logo />
        </Grid>

        {/* About Us Section */}
        <Grid size={12}>
          <Typography variant="h4" gutterBottom>
            About Us
          </Typography>
          <Typography color="text.secondary" paragraph>
            NovaStack Technologies Pty Ltd is an Australian technology company
            dedicated to cutting-edge software and cloud solutions.
          </Typography>
        </Grid>

        {/* Company Registration Section */}
        <Grid size={12}>
          <Typography variant="h4" gutterBottom>
            Company Registration
          </Typography>
          <Typography>Company Name: NovaStack Technologies Pty Ltd</Typography>
          <Typography>ACN: 690 831 675</Typography>
          <Typography>Type: Proprietary limited by shares</Typography>
          <Typography>Registered In: Victoria, Australia</Typography>
          <Typography>Date of Registration: 9 September 2025</Typography>
        </Grid>

        {/* Contact Section */}
        <Grid size={12}>
          <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
            Contact
          </Typography>
          <Typography>
            Email: <a href="mailto:info@novastack.com.au">info@novastack.com.au</a>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}