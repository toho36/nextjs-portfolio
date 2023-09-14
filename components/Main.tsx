import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const Main = () => {
  return (
    <section>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh',
          background: 'linear-gradient(to right top, black, lightblue)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
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
          }}
        >
          Elevated Webflow Sites.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            maxWidth: '830px',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          Elevate Your Webflow Projects with a Junior Front-End Web Developer's
          Attention to Detail and Passionate Dedication.
        </Typography>
      </Box>
    </section>
  );
};

export default Main;
