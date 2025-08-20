import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface DSButtonProps extends ButtonProps {
  buttonVariant?: 'filled' | 'tonal' | 'outlined' | 'text';
  buttonSize?: 'standard' | 'small';
  loading?: boolean;
}

// Loading dots animation component
const LoadingDots = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '6px',
  '& .dot': {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: 'currentColor',
    animation: 'pulse 1.4s ease-in-out infinite both',
  },
  '& .dot:nth-of-type(1)': {
    animationDelay: '-0.32s',
  },
  '& .dot:nth-of-type(2)': {
    animationDelay: '-0.16s',
  },
  '@keyframes pulse': {
    '0%, 80%, 100%': {
      transform: 'scale(0)',
      opacity: 0.5,
    },
    '40%': {
      transform: 'scale(1)',
      opacity: 1,
    },
  },
});

const StyledButton = styled(Button)<{ buttonVariant?: string; loading?: boolean; buttonSize?: string }>(({ theme, buttonVariant, loading, buttonSize }) => {
  const baseHeight = buttonSize === 'small' ? 40 : 48;
  
  return {
    textTransform: 'none',
    borderRadius: '12px',
    fontWeight: 600,
    minWidth: 131,
    height: baseHeight,
    transition: 'all 0.2s ease-in-out',
    '& .MuiButton-startIcon': {
      marginRight: theme.direction === 'rtl' ? '8px' : 0,
      marginLeft: theme.direction === 'rtl' ? 0 : '8px',
    },
    '& .MuiButton-endIcon': {
      marginLeft: theme.direction === 'rtl' ? '8px' : 0,
      marginRight: theme.direction === 'rtl' ? 0 : '8px',
    },
    
    // Base contained button styles (for filled variant)
    '&.MuiButton-contained': {
      backgroundColor: theme.palette.schemes.primary,
      color: theme.palette.schemes.onPrimary,
      '&:hover': {
        backgroundColor: theme.palette.schemes.primary,
        color: theme.palette.schemes.onPrimary,
        boxShadow: `0px 2px 6px 2px ${theme.palette.neutral.surfaceOpacity16}, 0px 1px 2px 0px ${theme.palette.neutral.surfaceOpacity8}`,
      },
      '&:focus': {
        background: `linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)),
        ${theme.palette.schemes.primary}`,
        color: theme.palette.schemes.onPrimary,
      },
      '&:disabled': {
        backgroundColor: theme.palette.neutralVariant[95],
        color: theme.palette.neutralVariant[50],
      },
    },
    
    // Tonal variant styles
    ...(buttonVariant === 'tonal' && {
      '&.MuiButton-contained': {
        backgroundColor: theme.palette.schemes.primaryContainer,
        color: theme.palette.schemes.primary,
        '&:hover': {
          backgroundColor: theme.palette.schemes.primaryContainer,
          color: theme.palette.schemes.primary,
          boxShadow: `0px 2px 6px 2px ${theme.palette.neutral.surfaceOpacity16}, 0px 1px 2px 0px ${theme.palette.neutral.surfaceOpacity8}`,
        },
        '&:focus': {
            background: `linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
          ${theme.palette.schemes.primaryContainer}`,
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
      '&.MuiButton-outlined': {
        backgroundColor: 'transparent',
        color: theme.palette.schemes.primary,
        border: `1px solid ${theme.palette.schemes.primary}`,
        '&:hover': {
          backgroundColor: theme.palette.schemes.primaryContainer,
          color: theme.palette.schemes.primary,
          border: `1px solid ${theme.palette.schemes.primary}`,
        },
        '&:focus': {
          background: `linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
          ${theme.palette.schemes.primaryContainer}`,
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
      '&.MuiButton-text': {
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

export const DSButton: React.FC<DSButtonProps> = ({
  children,
  buttonVariant = 'filled',
  buttonSize = 'small',
  loading = false,
  disabled,
  startIcon,
  endIcon,
  ...props
}) => {
  // Map custom variants to MUI variants and colors
  let muiVariant: 'contained' | 'outlined' | 'text';
  let muiColor: 'primary' | 'inherit' = 'primary';
  
  switch (buttonVariant) {
    case 'filled':
      muiVariant = 'contained';
      muiColor = 'primary';
      break;
    case 'tonal':
      muiVariant = 'contained';
      muiColor = 'primary';
      break;
    case 'outlined':
      muiVariant = 'outlined';
      muiColor = 'primary';
      break;
    case 'text':
      muiVariant = 'text';
      muiColor = 'primary';
      break;
    default:
      muiVariant = 'contained';
      muiColor = 'primary';
  }
  
  const muiSize = buttonSize === 'standard' ? 'medium' : buttonSize;
  // Only disable if explicitly disabled, not when loading
  const isDisabled = disabled;
  
  return (
    <StyledButton 
      buttonVariant={buttonVariant}
      variant={muiVariant} 
      size={muiSize} 
      color={muiColor}
      disabled={isDisabled}
      loading={loading}
      buttonSize={buttonSize}
      startIcon={startIcon}
      endIcon={endIcon}
      {...props}
    >
      {loading ? (
        <LoadingDots>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </LoadingDots>
      ) : (
        <>
          {children}
        </>
      )}
    </StyledButton>
  );
};

export default DSButton;