import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface DSButtonProps extends ButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
}

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  borderRadius: theme.shape.borderRadius,
  fontWeight: 500,
  '&.MuiButton-containedPrimary': {
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    '&:hover': {
      boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
    },
  },
}));

export const DSButton: React.FC<DSButtonProps> = ({
  children,
  variant = 'contained',
  size = 'medium',
  ...props
}) => {
  return (
    <StyledButton variant={variant} size={size} {...props}>
      {children}
    </StyledButton>
  );
};

export default DSButton;