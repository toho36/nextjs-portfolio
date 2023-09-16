import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';

const CustomIconButton = ({ href, icon }) => {
  return (
    <Box>
      <a href={href} target="_blank" rel="noreferrer">
        <IconButton
          sx={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            boxShadow:
              '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)',
            transition: 'transform 300ms ease-in',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          {icon}
        </IconButton>
      </a>
    </Box>
  );
};
export default CustomIconButton;
