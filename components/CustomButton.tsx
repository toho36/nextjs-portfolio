import React, { useState } from 'react';
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
  textColor?: string; // Add textColor prop
}

const CustomButton = ({
  children,
  corners,
  onClick,
  fontSize,
  color,
  styleType,
  fullWidth,
  textColor, // Add textColor prop
}: OwnProps) => {
  const customFontSize = fontSize ? `${fontSize}px` : '14px';
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);

  let backgroundColor, borderColor, buttonTextColor;

  switch (color) {
    case 'darkGreen':
      backgroundColor = '#35b469';
      buttonTextColor = textColor || '#ffffff'; // Use textColor if provided, else fallback to white
      borderColor = '#35b469';
      break;
    case 'orange':
      backgroundColor = '#fea500';
      buttonTextColor = textColor || '#ffffff';
      borderColor = '#fea500';
      break;
    case 'lightGreen':
      backgroundColor = '#5bca89';
      buttonTextColor = textColor || '#ffffff';
      borderColor = '#5bca89';
      break;
    case 'darkBlue':
      backgroundColor = '#364fc7';
      buttonTextColor = textColor || '#ffffff';
      borderColor = '#364fc7';
      break;
    case 'blue':
      backgroundColor = '#4f98f8';
      buttonTextColor = textColor || '#ffffff';
      borderColor = '#4f98f8';
      break;
    case 'red':
      backgroundColor = '#ee6962';
      buttonTextColor = textColor || '#ffffff';
      borderColor = '#ee6962';
      break;
    case 'nav':
      backgroundColor = '#transparent';
      buttonTextColor = textColor || '#000000'; // Use textColor if provided, else fallback to black
      borderColor = '#000000';
      break;
    default:
      backgroundColor = 'transparent';
      buttonTextColor = textColor || '#000000';
      borderColor = '#000000';
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.1; // Adjust sensitivity by multiplying
    const y = (e.clientY - rect.top - rect.height / 2) * 0.1; // Subtract half of the button's height

    const sensitivityFactor = 0.05;
    const newScale = 1 + sensitivityFactor * (isHovered ? 1 : 0);

    setPosition({ x, y });
    setScale(newScale);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
    setScale(1);
  };

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
        color: buttonTextColor, // Use buttonTextColor to override the default
        fontFamily: { montserrat },
        fontSize: customFontSize,
        fontWeight: 600,
        textAlign: 'center',
        boxShadow: 'none',
        borderRadius: corners === 'sharp' ? '0' : '4px',
        width: fullWidth ? '100%' : 'auto',
        transition:
          'transform 0.2s, box-shadow 0.2s, background-color 0.2s, color 0.2s, border-color 0.2s',
        transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
        '&:hover': {
          backgroundColor:
            styleType === 'outlined' ? 'transparent' : backgroundColor,
          color: styleType === 'outlined' ? borderColor : buttonTextColor,
          borderColor: borderColor,
          transform: `translate(${position.x}px, ${position.y}px) scale(1.05)`,
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          ...(color !== 'nav' && {
            backgroundColor: '#eaebeb',
          }),
        },
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
