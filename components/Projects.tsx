import React from 'react';
import { Box, Typography } from '@mui/material';

const Projects = () => {
  return (
    <section id="projects">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh',
        }}
      >
        <Typography variant="h1">Projects</Typography>
      </Box>
    </section>
  );
};

export default Projects;
