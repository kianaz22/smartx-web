import React from 'react';
import { Fab, FabProps, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface DSFabProps extends FabProps {
  fabVariant?: 'filled' | 'tonal' | 'outlined';
  fabSize?: 'small' | 'standard';
  loading?: boolean;
}

// Loading spinner component
const LoadingSpinner = styled(CircularProgress)({
  color: 'currentColor',
  width: '20px !important',
  height: '20px !important',
});

const StyledFab = styled(Fab)<{ fabVariant?: string; loading?: boolean; fabSize?: string }>(({ theme, fabVariant, loading, fabSize }) => {
  return {
    textTransform: 'none',
    fontWeight: 600,
    transition: 'all 0.2s ease-in-out',
    borderRadius: 12,

    
    // Base contained button styles (for filled variant)
    '&.MuiFab-primary': {
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
    ...(fabVariant === 'tonal' && {
      '&.MuiFab-primary': {
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
    ...(fabVariant === 'outlined' && {
      '&.MuiFab-primary': {
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
    
    // Loading state styles for each variant
    ...(loading && fabVariant === 'filled' && {
      backgroundColor: theme.palette.schemes.primary,
      color: theme.palette.schemes.onPrimary,
    }),
    
    ...(loading && fabVariant === 'tonal' && {
      backgroundColor: theme.palette.schemes.primaryContainer,
      color: theme.palette.schemes.primary,
    }),
    
    ...(loading && fabVariant === 'outlined' && {
      backgroundColor: 'transparent',
      color: theme.palette.schemes.primary,
      border: `1px solid ${theme.palette.schemes.primary}`,
    }),
  };
});

export const DSFab: React.FC<DSFabProps> = ({
  children,
  fabVariant = 'filled',
  fabSize = 'standard',
  loading = false,
  disabled,
  ...props
}) => {
  // Map custom variants to MUI variants and colors
  let muiColor: 'primary' | 'inherit' = 'primary';
  
  switch (fabVariant) {
    case 'filled':
      muiColor = 'primary';
      break;
    case 'tonal':
      muiColor = 'primary';
      break;
    case 'outlined':
      muiColor = 'primary';
      break;
    default:
      muiColor = 'primary';
  }
  
  // Only disable if explicitly disabled, not when loading
  const isDisabled = disabled;
  
  return (
    <StyledFab 
      fabVariant={fabVariant}
      size={fabSize === 'small' ? 'small' : 'medium'} 
      color={muiColor}
      disabled={isDisabled}
      loading={loading}
      fabSize={fabSize}
      {...props}
    >
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {children}
        </>
      )}
    </StyledFab>
  );
};

export default DSFab;
