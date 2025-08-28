import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';

// Extend the Material-UI TextField props
export interface InputProps extends Omit<TextFieldProps, 'variant' | 'size'> {
  variant?: 'outlined' | 'filled' | 'standard';
  size?: 'small' | 'medium' | 'large';
}

// Define custom props interface for styled component
interface StyledInputProps extends InputProps {
  customSize?: 'small' | 'medium' | 'large';
}

// Custom styled input with design system styling
const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) => !['customSize'].includes(prop as string),
})<StyledInputProps>(({ theme, customSize }) => ({
  fontFamily: 'Inter',
  
  // Size variations based on design system spacing
  ...(customSize === 'large' && {
    '& .MuiInputBase-root': {
      fontSize: '1.1rem',
      padding: theme.spacing(1.5, 2),
    },
    '& .MuiInputLabel-root': {
      fontSize: '1.1rem',
    },
  }),
  ...(customSize === 'small' && {
    '& .MuiInputBase-root': {
      fontSize: '0.875rem',
      padding: theme.spacing(0.75, 1.5),
    },
    '& .MuiInputLabel-root': {
      fontSize: '0.875rem',
    },
  }),
  
  // Design system styling
  '& .MuiOutlinedInput-root': {
    borderRadius: 8,
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
      borderWidth: 2,
    },
  },
  
  '& .MuiFilledInput-root': {
    borderRadius: 8,
    '&:hover': {
      backgroundColor: theme.palette.grey[100],
    },
    '&.Mui-focused': {
      backgroundColor: theme.palette.grey[100],
    },
  },
  
  '& .MuiInputLabel-root': {
    fontFamily: 'Inter',
    '&.Mui-focused': {
      color: theme.palette.primary.main,
    },
  },
  
  '& .MuiInputBase-input': {
    fontFamily: 'Inter',
  },
}));

export const Input: React.FC<InputProps> = ({ 
  variant = 'outlined',
  size = 'medium',
  ...props 
}) => {
  // Map size for MUI TextField (only small and medium are supported)
  const muiSize = size === 'large' ? 'medium' : size as 'small' | 'medium';
  
  return (
    <StyledTextField
      variant={variant}
      size={muiSize}
      customSize={size}
      {...props}
    />
  );
};

export default Input; 