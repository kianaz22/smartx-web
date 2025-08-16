import React from 'react';
import { Card, CardContent, CardActions, CardProps, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface DSCardProps extends CardProps {
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
  elevation?: number;
}

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: theme.shadows[8],
  },
}));

export const DSCard: React.FC<DSCardProps> = ({
  title,
  subtitle,
  children,
  actions,
  elevation = 2,
  ...props
}) => {
  return (
    <StyledCard elevation={elevation} {...props}>
      <CardContent>
        {title && (
          <Typography variant="h5" component="h2" gutterBottom>
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {subtitle}
          </Typography>
        )}
        {children}
      </CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </StyledCard>
  );
};

export default DSCard;