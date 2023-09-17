import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CustomButton from '../CustomButton';
import { useRouter } from 'next/router';
import AboutModal from '../AboutModal';
import PersonIcon from '@mui/icons-material/Person';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CustomIconButton from '../CustomIconButton';
export default function MainNavigation({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleContactClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const navLinks = [
    { text: 'Skills', href: '/#skills' },
    { text: 'Projects', href: '/#projects' },
    { text: 'Resume', href: '/#resume' },
  ];

  const handleNavLinkClick = (href) => {
    router.push(href);
    if (isDrawerOpen) {
      toggleDrawer(); // Close the drawer after navigation
    }
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
        {/* Display the menu icon on smaller screens */}
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
              alignItems: 'center',
            }}
          >
            <Box style={{ width: '200px' }}>
              <a
                onClick={() => {
                  router.push('/');
                }}
                target="_blank"
                rel="noreferrer"
              >
                <CustomButton>To Hoang Viet</CustomButton>
              </a>
            </Box>
            {/* Display the menu icon when the screen is smaller */}
            <Box display={{ xs: 'block', md: 'none' }}>
              <IconButton onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box display={{ xs: 'none', md: 'block' }}>
              <a onClick={() => handleContactClick()}>
                <CustomButton>About</CustomButton>
              </a>
              {navLinks.map((link, index) => (
                <a key={index} onClick={() => handleNavLinkClick(link.href)}>
                  <CustomButton>{link.text}</CustomButton>
                </a>
              ))}
            </Box>
            <Box display={{ xs: 'none', md: 'block' }}>
              <a onClick={() => router.push('/contact')}>
                <CustomButton textColor="#4f98f8">Contact</CustomButton>
              </a>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ justifyContent: 'center', display: 'flex' }}>
        <AboutModal isOpen={isModalOpen} onClose={handleCloseModal} />
        {children}
      </Box>
      {/* Drawer for smaller screens */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <Box sx={{ pt: 3, px: 6, width: '70vw' }}>
          <Typography variant="h6" color="black">
            To Hoang Viet
          </Typography>
          <List>
            <ListItem button onClick={() => handleContactClick()}>
              <ListItemText primary={'About'} />
            </ListItem>
            {navLinks.map((link, index) => (
              <ListItem
                button
                key={index}
                onClick={() => handleNavLinkClick(link.href)}
              >
                <ListItemText primary={link.text} />
              </ListItem>
            ))}
          </List>
          <Box sx={{ pt: 40 }}>
            <Typography variant="h6" color="black">
              Let's Connect
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                my: 4,
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
                  toggleDrawer();
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
      </Drawer>
    </Box>
  );
}
