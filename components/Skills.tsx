import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh',
        }}
      >
        <Typography variant="h1">Skills</Typography>
      </Box>
    </section>
  );
};
export default Skills;
