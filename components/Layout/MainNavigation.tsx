import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { GitHub, LinkedIn, MailOutline, PersonPin } from '@mui/icons-material';
import AboutModal from '../AboutModal';
import CustomButton from '../CustomButton';
import CustomIconButton from '../CustomIconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function MainNavigation({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleAboutClick = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(!isModalOpen);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const handleToHoangVietClick = () => {
    router.push('/');
    if (isDrawerOpen) toggleDrawer(); // Close the drawer after navigation
  };

  const navLinks = [
    { text: 'Skills', href: '/#skills' },
    { text: 'Projects', href: '/#projects' },
    {
      text: 'Resume',
      href: 'https://docs.google.com/document/d/1eh1-qgi43el_Fr6CRzS9tlFRyBKx-3rC/edit?usp=sharing&ouid=117803866456659323822&rtpof=true&sd=true',
    },
  ];

  const handleNavLinkClick = (href: string) => {
    if (href === navLinks[2].href) window.open(href, '_blank');
    // If the clicked link is the "Resume" link, open it in a new tab
    else router.push(href);
    if (isDrawerOpen) toggleDrawer(); // Close the drawer after navigation
  };

  return (
    <Box>
      <Box
        sx={{
          justifyContent: 'center',
          display: 'flex',
          position: 'sticky',
          top: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
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
                onClick={() => router.push('/')}
                target="_blank"
                rel="noreferrer"
              >
                <CustomButton fontSize={18}>To Hoang Viet</CustomButton>
              </a>
            </Box>
            {/* Display the menu icon when the screen is smaller */}
            <Box display={{ xs: 'block', md: 'none' }}>
              <IconButton onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box display={{ xs: 'none', md: 'block' }}>
              <a onClick={handleAboutClick}>
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
                <CustomButton textColor="#4f98f8">Contact {'>'} </CustomButton>
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
        <Box sx={{ pt: 3, px: 3, width: '70vw' }}>
          <Typography
            variant="h6"
            color="black"
            sx={{ borderBottom: '1px solid black', cursor: 'pointer' }}
            onClick={handleToHoangVietClick}
          >
            To Hoang Viet
          </Typography>

          <List sx={{ marginTop: 2 }}>
            <ListItem button onClick={handleAboutClick}>
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
          <Box sx={{ pt: 30 }}>
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
                icon={<LinkedIn />}
              />

              <CustomIconButton
                href="https://github.com/toho36"
                icon={<GitHub />}
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
                  <MailOutline />
                </IconButton>
              </a>
              <CustomIconButton
                href="https://docs.google.com/document/d/1eh1-qgi43el_Fr6CRzS9tlFRyBKx-3rC/edit?usp=sharing&ouid=117803866456659323822&rtpof=true&sd=true"
                icon={<PersonPin />}
              />
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
