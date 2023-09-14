import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const Main = () => {
  return (
    <section>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh',
        }}
      >
        <Typography
          variant="h1"
          fontSize={'100px'}
          fontWeight={'400'}
          sx={{
            maxWidth: '830px',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            background: 'linear-gradient(to right top, black, lightblue)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            display: 'inline-block',
          }}
        >
          Elevated Webflow Sites.
          <Typography variant="h6">
            Elevate Your Webflow Projects with a Junior Front-End Developer's
            Attention to Detail and Passionate Dedication.
          </Typography>
        </Typography>
      </Box>
    </section>
  );
};

export default Main;
