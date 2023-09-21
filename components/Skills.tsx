import { Box, Typography } from '@mui/material';
import React from 'react';

const skillsData = [
  { name: 'HTML', icon: '/icons/html.png' },
  { name: 'CSS', icon: '/icons/css.png' },
  { name: 'Firebase', icon: '/icons/firebase.png' },
  { name: 'JavaScript', icon: '/icons/javascript.png' },
  { name: 'NextJS', icon: '/icons/nextjs.png' },
  { name: 'Mui', icon: '/icons/mui.png' },
  { name: 'React', icon: '/icons/react.png' },
  { name: 'TypeScript', icon: '/icons/typescript.png' },
];

const Skill = ({ name, icon }) => (
  <Box
    component="div"
    sx={{
      p: 4,
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      borderRadius: '16px',
      '&:hover': {
        transform: 'scale(1.05)',
        transition: 'transform 0.3s ease-in',
      },
    }}
  >
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 4,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ m: 'auto' }}>
        <img src={icon} width="64px" height="64px" alt={name} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h5">{name}</Typography>
      </Box>
    </Box>
  </Box>
);

const Skills = () => {
  return (
    <section id="skills">
      <Box
        sx={{
          width: '100%',
          minHeight: '100%',
          pl: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Box>
          <Typography
            variant="subtitle1"
            sx={{
              textTransform: 'uppercase',
              color: '#5651e5',
            }}
          >
            Skills
          </Typography>
          <Typography variant="h4" sx={{ pb: 4 }}>
            What I Can Do
          </Typography>
        </Box>
        <Box
          sx={{
            maxWidth: '1240px',
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(4, 1fr)',
              },
              gap: 8,
            }}
          >
            {skillsData.map((skill, index) => (
              <Skill key={index} name={skill.name} icon={skill.icon} />
            ))}
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Skills;
