import React from 'react';
import { Box, IconButton, Modal, Typography } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  const handleModalWrapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
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
        ...smallerScreenStyles,
      }}
    >
      <Box sx={bgModalContentStyles} onClick={onClose}>
        <Box sx={modalWrapStyles}>
          <Box sx={modalStyles}>
            <Box sx={aboutModalInnerStyles} onClick={handleModalWrapClick}>
              <Box sx={imageWrapStyles}>
                <img
                  src="/images/voley.png"
                  loading="lazy"
                  width="344"
                  height="747"
                  alt="voley picture"
                  sizes="100vw"
                  className="about-img"
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
                    backgroundColor: '#f0f0f0',
                  },
                }}
                onClick={onClose}
              >
                <CloseIcon sx={{ color: '#9ba1a6' }} />
              </IconButton>

              <Box sx={aboutModalContentStyles}>
                <Typography variant="h4" pb={3}>
                  About Vítek
                </Typography>
                <Typography variant="body1">
                  Since elementary school after I got my first desktop computer,
                  I always tried to figure out how everything works. I like
                  games, because I have learned a lot from them, and they taught
                  me how to be creative to excel from other players.
                  <span>
                    I am a lazy person when it comes to long dreadful tasks, so
                    I always try to come up how I can utilize any tool /
                    experience to solve the problem. When I am not working, I
                    like to learn new stuff from technical to psychological
                    stuff.
                  </span>
                  <br />
                  <br />
                  Playing games with my friends is one of my favorite things to
                  do. I always had a soft spot for animals, having a pet or
                  watching documentary series.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default AboutModal;

const bgModalContentStyles = {
  boxSizing: 'border-box',
  WebkitFontSmoothing: 'antialiased',
  position: 'fixed',
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(80, 80, 80, 0.7)',
  backdropFilter: 'blur(24px)',
  opacity: 1,
};
const smallerScreenStyles = {
  '@media (max-width: 768px)': {
    '.about-img': {
      clipPath: 'polygon(0 0, 80% 0, 80% 100%, 0 100%)',
      float: 'right', // Align it to the right
      opacity: 0.7, // Set opacity to 70%
      marginRight: '-20%',
    },
  },
};

const modalWrapStyles = {
  WebkitTextSizeAdjust: '100%',
  lineHeight: 1.2,
  boxSizing: 'border-box',
  WebkitFontSmoothing: 'antialiased',
  position: 'fixed',
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 2999,
  justifyContent: 'center',
  overflow: 'auto',
  padding: '64px 0 0',
  alignItems: 'flex-start',
  display: 'flex',
};

const modalStyles = {
  WebkitTextSizeAdjust: '100%',
  lineHeight: 1.2,
  boxSizing: 'border-box',
  WebkitFontSmoothing: 'antialiased',
  position: 'relative',
  zIndex: 2,
  overflow: 'hidden',
  width: '100%',
  maxWidth: '620px',
  borderRadius: '16px',
  backgroundColor: '#fff',
};

const aboutModalInnerStyles = {
  WebkitTextSizeAdjust: '100%',
  lineHeight: 1.2,
  boxSizing: 'border-box',
  WebkitFontSmoothing: 'antialiased',
  position: 'relative',
  padding: '32px 20px 64px',
};

const imageWrapStyles = {
  WebkitTextSizeAdjust: '100%',
  lineHeight: 1.2,
  boxSizing: 'border-box',
  WebkitFontSmoothing: 'antialiased',
  position: 'absolute',
  left: 'auto',
  top: 0,
  right: 0,
  bottom: 0,
  height: '100%',
  opacity: '70%',
};

const aboutModalContentStyles = {
  WebkitTextSizeAdjust: '100%',
  boxSizing: 'border-box',
  WebkitFontSmoothing: 'antialiased',
  position: 'relative',
  zIndex: 1,
  width: '100%',
  maxWidth: '280px',
};
