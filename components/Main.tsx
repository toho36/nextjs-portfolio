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
          sx={{
            background:
              'linear-gradient(0deg, #11181c 20%, rgba(17, 24, 28, 0) 45%), linear-gradient(90deg, #0f3058 0%, #006adc 33.333%, #11181c 50%, #11181c 100%)',
            backgroundRepeat: 'no-repeat',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            MozBackgroundClip: 'text',
            WebkitAnimation: 'intro-gradient 1.8s ease backwards',
            animation: 'intro-gradient 1.8s ease backwards',
          }}
        >
          React Front end developer
        </Typography>
      </Box>
    </section>
  );
};

export default Main;
