import React from 'react';
import { Box, Modal, Stack } from '@mui/material';

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
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '20px',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            height: '100%',
          }}
        >
          <img
            src="/images/prof1.png"
            alt="Logo"
            style={{ height: '100%', objectFit: 'cover' }}
          />
        </Box>
        <Stack spacing={2}>
          <p>
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <p>
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
        </Stack>
      </div>
    </Modal>
  );
};

export default AboutModal;
