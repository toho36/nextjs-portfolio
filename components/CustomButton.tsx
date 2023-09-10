import React from 'react';
import { Button } from '@mui/material';
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});
interface OwnProps {
  children: React.ReactNode;
  corners?: 'sharp' | 'rounded';
  onClick?: (event: React.MouseEvent) => void;
  fontSize?: number;
  color?: string;
  styleType?: 'contained' | 'text' | 'outlined';
  fullWidth?: boolean;
}

const CustomButton = ({
  children,
  corners,
  onClick,
  fontSize,
  color,
  styleType,
  fullWidth,
}: OwnProps) => {
  const customFontSize = fontSize ? `${fontSize}px` : '14px';

  let backgroundColor, textColor, borderColor, hoverColor;

  switch (color) {
    case 'darkGreen':
      backgroundColor = '#35b469';
      textColor = '#ffffff';
      borderColor = '#35b469';
      break;
    case 'orange':
      backgroundColor = '#fea500';
      textColor = '#ffffff';
      borderColor = '#fea500';
      break;
    case 'lightGreen':
      backgroundColor = '#5bca89';
      textColor = '#ffffff';
      borderColor = '#5bca89';
      break;
    case 'darkBlue':
      backgroundColor = '#364fc7';
      textColor = '#ffffff';
      borderColor = '#364fc7';
      break;
    case 'blue':
      backgroundColor = '#4f98f8';
      textColor = '#ffffff';
      borderColor = '#4f98f8';
      break;
    case 'red':
      backgroundColor = '#ee6962';
      textColor = '#ffffff';
      borderColor = '#ee6962';
      break;
    case 'nav':
      backgroundColor = '#transparent';
      textColor = '#000000';
      borderColor = '#000000';

      break;
    default:
      backgroundColor = 'transparent';
      textColor = '#000000';
      borderColor = '#000000';
  }

  return (
    <Button
      variant={
        styleType === 'text'
          ? 'text'
          : styleType === 'outlined'
          ? 'outlined'
          : 'contained'
      }
      sx={{
        borderColor: styleType === 'outlined' ? borderColor : 'none',
        backgroundColor:
          styleType === 'outlined' ? 'transparent' : backgroundColor,
        color: styleType === 'outlined' ? borderColor : textColor,
        fontFamily: { montserrat },
        fontSize: customFontSize,
        fontWeight: 600,
        textAlign: 'center',
        boxShadow: 'none',
        borderRadius: corners === 'sharp' ? '0' : '4px',
        width: fullWidth ? '100%' : 'auto',
        transition: 'transform 0.2s, box-shadow 0.2s', // Add transition for smooth animation
        '&:hover': {
          backgroundColor:
            styleType === 'outlined' ? 'transparent' : backgroundColor,
          color: styleType === 'outlined' ? borderColor : textColor,
          borderColor: borderColor,
          transform: 'scale(1.15)', // Zoom in a little bit on hover
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          ...(color !== 'nav' && {
            backgroundColor: '#eaebeb',
          }),
        },
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
