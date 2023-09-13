import React from 'react';
import { Box, IconButton, Modal, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="contact-modal-title"
      aria-describedby="contact-modal-description"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
      }}
    >
      <div
        className="modal"
        style={{
          display: 'flex',
          position: 'relative',
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '60px 3px 40px 40px',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: 'auto',
            // top: 0,
            right: 0,
            bottom: 0,
            height: '85%',
          }}
        >
          <img
            src="/images/prof1.png"
            alt="Logo"
            style={{
              height: '100%',
              objectFit: 'cover',
              objectPosition: '0% 50%',
            }}
          />
        </Box>
        <IconButton
          sx={{
            zIndex: 1001,
            position: 'absolute',
            left: ' auto',
            top: '18px',
            right: '18px',
            width: '28px',
            height: '28px',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '5px',
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: '#f0f0f0', // Change the background color on hover if desired
            },
          }}
          onClick={onClose}
        >
          <CloseIcon sx={{ color: '#9ba1a6' }} />
        </IconButton>
        <Stack spacing={2} sx={{}}>
          <Typography variant="h4" fontWeight={'bold'}>
            {' '}
            About Vítek
          </Typography>
          <Typography
            variant="body1"
            style={{
              display: 'inline-block',
              maxWidth: '427px',
              marginRight: '220px',
            }}
          >
            Since elementary school after I got my first desktop computer, I
            always tried to figure out how everything works. I like games,
            because I have learned a lot from them, and they taught me how to be
            creative to excel from other players. I am a lazy person when it
            comes to long dreadful tasks, so I always try to come up how I can
            utilize any tool / experience to solve the problem. When I am not
            working, I like to learn new stuff from technical to psychological
            stuff.
          </Typography>
          <Typography
            variant="body1"
            style={{ display: 'inline-block', maxWidth: '327px' }}
          >
            Playing games with my friends is one of my favorite things to do. I
            always had a soft spot for animals, having a pet or watching
            documentary series.
          </Typography>
        </Stack>
        {/* <Box sx={{ flex: 1 }} /> */}
        {/* Add a flex container to push the image to the right */}
      </div>
    </Modal>
  );
};

export default AboutModal;
