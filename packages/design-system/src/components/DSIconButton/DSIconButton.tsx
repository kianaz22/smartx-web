import React from 'react';
import { IconButton, IconButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface DSIconButtonProps extends Omit<IconButtonProps, 'size' | 'startIcon' | 'endIcon'> {
  buttonVariant?: 'filled' | 'tonal' | 'outlined' | 'text';
  buttonSize?: 'small' | 'standard';
  loading?: boolean;
  children: React.ReactElement; // Only allow a single icon element
}

// Spinner animation component
const Spinner = styled('div')({
  width: '24px',
  height: '24px',
  border: '2px solid transparent',
  borderTop: '2px solid currentColor',
  borderRadius: '50%',
  animation: 'spin 1s linear infinite',
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
});

const StyledIconButton = styled(IconButton)<{ 
  buttonVariant?: string; 
  loading?: boolean; 
  buttonSize?: string 
}>(({ theme, buttonVariant, loading, buttonSize }) => {
  // Size mapping for icon buttons
  const sizeMap = {
    small: 40,
    standard: 48,
  };
  
  const baseSize = sizeMap[buttonSize as keyof typeof sizeMap] || 48;
  
  return {
    width: baseSize,
    height: baseSize,
    borderRadius: '50%',
    transition: 'all 0.2s ease-in-out',
    
    // Base filled variant styles
    '&.MuiIconButton-root': {
      backgroundColor: theme.palette.schemes.primary,
      color: theme.palette.schemes.onPrimary,
      '&:hover': {
        backgroundColor: theme.palette.schemes.primary,
        color: theme.palette.schemes.onPrimary,
        boxShadow: `0px 2px 6px 2px ${theme.palette.neutral.surfaceOpacity16}, 0px 1px 2px 0px ${theme.palette.neutral.surfaceOpacity8}`,
      },
      '&:focus': {
        background: `linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), ${theme.palette.schemes.primary}`,
        color: theme.palette.schemes.onPrimary,
      },
      '&:disabled': {
        backgroundColor: theme.palette.neutralVariant[95],
        color: theme.palette.neutralVariant[50],
      },
    },
    
    // Tonal variant styles
    ...(buttonVariant === 'tonal' && {
      '&.MuiIconButton-root': {
        backgroundColor: theme.palette.schemes.primaryContainer,
        color: theme.palette.schemes.primary,
        '&:hover': {
          backgroundColor: theme.palette.schemes.primaryContainer,
          color: theme.palette.schemes.primary,
          boxShadow: `0px 2px 6px 2px ${theme.palette.neutral.surfaceOpacity16}, 0px 1px 2px 0px ${theme.palette.neutral.surfaceOpacity8}`,
        },
        '&:focus': {
          background: `linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), ${theme.palette.schemes.primaryContainer}`,
          color: theme.palette.schemes.primary,
        },
        '&:disabled': {
          backgroundColor: theme.palette.neutralVariant[95],
          color: theme.palette.neutralVariant[50],
        },
      },
    }),
    
    // Outlined variant styles
    ...(buttonVariant === 'outlined' && {
      '&.MuiIconButton-root': {
        backgroundColor: 'transparent',
        color: theme.palette.schemes.primary,
        border: `1px solid ${theme.palette.schemes.primary}`,
        '&:hover': {
          backgroundColor: theme.palette.schemes.primaryContainer,
          color: theme.palette.schemes.primary,
          border: `1px solid ${theme.palette.schemes.primary}`,
        },
        '&:focus': {
          background: `linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), ${theme.palette.schemes.primaryContainer}`,
          color: theme.palette.schemes.primary,
          border: `1px solid ${theme.palette.schemes.primary}`,
        },
        '&:disabled': {
          backgroundColor: 'transparent',
          color: theme.palette.neutralVariant[50],
          border: `1px solid ${theme.palette.neutralVariant[95]}`,
        },
      },
    }),

    // Text variant styles
    ...(buttonVariant === 'text' && {
        '&.MuiIconButton-root': {
          backgroundColor: 'transparent',
          color: theme.palette.schemes.primary,
          '&:hover': {
            backgroundColor: theme.palette.neutral.surfaceOpacity8,
          },
          '&:focus': {
            backgroundColor: theme.palette.neutral.surfaceOpacity12,
          },
          '&:disabled': {
            backgroundColor: 'transparent',
            color: theme.palette.neutralVariant[50],
          },
        },
      }),
      
    // Loading state styles for each variant
    ...(loading && buttonVariant === 'filled' && {
      backgroundColor: theme.palette.schemes.primary,
      color: theme.palette.schemes.onPrimary,
    }),
    
    ...(loading && buttonVariant === 'tonal' && {
      backgroundColor: theme.palette.schemes.primaryContainer,
      color: theme.palette.schemes.primary,
    }),
    
    ...(loading && buttonVariant === 'outlined' && {
      backgroundColor: 'transparent',
      color: theme.palette.schemes.primary,
      border: `1px solid ${theme.palette.schemes.primary}`,
    }),

    ...(loading && buttonVariant === 'text' && {
      backgroundColor: 'transparent',
      color: theme.palette.schemes.primary,
    }),
  };
});

export const DSIconButton: React.FC<DSIconButtonProps> = ({
  children,
  buttonVariant = 'filled',
  buttonSize = 'standard',
  loading = false,
  disabled,
  ...props
}) => {
  // Only disable if explicitly disabled, not when loading
  const isDisabled = disabled;
  
  return (
    <StyledIconButton 
      buttonVariant={buttonVariant}
      disabled={isDisabled}
      loading={loading}
      buttonSize={buttonSize}
      {...props}
    >
      {loading ? (
        <Spinner data-testid="loading-spinner" />
      ) : (
        children
      )}
    </StyledIconButton>
  );
};

export default DSIconButton;
