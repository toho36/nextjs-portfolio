import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CustomButton from '../CustomButton';
import { useRouter, usePathname } from 'next/navigation';
import AboutModal from '../AboutModal';

export default function MainNavigation({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const navLinks = [
    { text: 'Home', href: '/' },
    { text: 'Skills', href: '/#skills' },
    { text: 'Projects', href: '/#projects' },
    { text: 'Resume', href: '/#resume' },
  ];
  const handleNavLinkClick = (href) => {
    router.push(href); // Use router.push to navigate
  };
  return (
    <Box>
      <Box
        sx={{
          justifyContent: 'center',
          display: 'flex',
          position: 'sticky',
          top: 0,
          backgroundColor: 'transparent',
          zIndex: 1000,
          width: '100%',
        }}
      >
        <AppBar
          elevation={0}
          sx={{
            display: 'flex',
            position: 'sticky',
            top: 0,
            backgroundColor: 'transparent',

            zIndex: 1000,
            borderBottom: '1px solid grey',
            maxWidth: '1200px',
          }}
        >
          <Toolbar
            sx={{
              justifyContent: 'space-between',
              alignItems: 'space-between',
            }}
          >
            <Box style={{ width: '200px' }}>
              <Typography variant="h6" color="black">
                To Hoang Viet
              </Typography>
            </Box>
            <Box>
              <Box display="flex">
                <a onClick={() => handleContactClick()}>
                  <CustomButton>About</CustomButton>
                </a>

                {navLinks.map((link, index) => (
                  <a key={index} onClick={() => handleNavLinkClick(link.href)}>
                    <CustomButton> {link.text}</CustomButton>
                  </a>
                ))}
              </Box>
            </Box>
            <Box>
              <a onClick={() => router.push('/contact')}>
                <CustomButton color="blue">Contact</CustomButton>
              </a>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        sx={{
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <AboutModal isOpen={isModalOpen} onClose={handleCloseModal} />
        {children}
      </Box>
    </Box>
  );
}
