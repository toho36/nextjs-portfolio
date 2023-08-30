import React from 'react';
import { Button } from '@mui/material';

interface OwnProps {
  children: React.ReactNode;
  corners?: 'sharp' | 'rounded';
  onClick?: (event: React.MouseEvent) => void;
  fontSize?: number;
}

const PrimaryButton = ({ children, corners, onClick, fontSize }: OwnProps) => {
  const customFontSize = fontSize ? `${fontSize}px` : '14px';

  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        fontFamily: 'Montserrat',
        fontSize: customFontSize,
        fontWeight: 300,
        textAlign: 'center',
        boxShadow: 'none',
        borderRadius: corners === 'sharp' ? '0' : '4px',
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
