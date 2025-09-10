'use client';

import { Box, Typography } from '@mui/material'

export default function Logo() {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" gap={1} flexWrap="wrap">
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
      >
        <polygon
          points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
          fill="none"
          stroke="#19b5fe"
          strokeWidth="6"
        />
        <circle
          cx="50"
          cy="50"
          r="18"
          stroke="#243f8c"
          strokeWidth="6"
          fill="none"
        />
        <circle cx="75" cy="40" r="6" fill="#243f8c" />
      </svg>
      <Box display="flex" flexDirection="column">
        <Typography variant="h5" color="primary" fontWeight={700}>
          NovaStack
        </Typography>
        <Typography variant="caption" color="text.secondary" letterSpacing={2}>
          Technologies Pty Ltd
        </Typography>
      </Box>
    </Box>
  )
}