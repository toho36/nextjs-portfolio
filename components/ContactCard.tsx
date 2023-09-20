import React from 'react';
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CustomIconButton from './CustomIconButton';
import { useRouter } from 'next/router';

const ContactCard = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: 'grid',
        gap: '16px',
        width: '100%',
        height: '100%',
        boxShadow: 'xl',
        borderRadius: 'xl',
        // p: 4,
      }}
    >
      <Box
        sx={{
          //   lg: { gridColumn: 'span 2' },
          width: '100%',
          height: '100%',
          boxShadow: 'gray.400',
          borderRadius: 'xl',
          //   p: 4,
        }}
      >
        <Box
          sx={{
            height: '100%',
            //  p: 4
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 'xl',
                border: 'black',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'ease-in 300ms',
                },
              }}
            >
              <img
                src="/images/note.jpg"
                alt="note"
                style={{
                  maxWidth: '50%',
                  height: 'auto',
                  display: 'block', // This ensures proper alignment
                }}
              />
            </Box>

            <Typography variant="h6" sx={{ py: 2 }}>
              To Hoang Viet
            </Typography>
            <Typography variant="body1">Front-End Developer</Typography>
            <Typography variant="body1" sx={{ py: 4 }}>
              I am available for freelance or full-time positions. Contact me
              and let&apos;s talk.
            </Typography>
          </Box>
          <Box sx={{ textTransform: 'uppercase', py: 2 }}>Connect With Me</Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              sm: {
                width: '80%',
              },
            }}
          >
            <CustomIconButton
              href="https://www.linkedin.com/in/hoangvietto/"
              icon={<LinkedInIcon />}
            />

            <CustomIconButton
              href="https://github.com/toho36"
              icon={<GitHubIcon />}
            />

            <a
              onClick={() => {
                router.push('/contact');
              }}
              target="_blank"
              rel="noreferrer"
            >
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
                <MailOutlineIcon />
              </IconButton>
            </a>
            <CustomIconButton
              href="https://www.linkedin.com/in/hoangvietto/"
              icon={<PersonIcon />}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactCard;
