 
import { Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DSButton } from '@design-system/components';

function NotFound() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: 'center',
      }}
    >
      <Typography variant="h1" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom color="text.secondary">
        Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        The page you are looking for doesn't exist or has been moved.
      </Typography>
      <DSButton variant="contained" onClick={() => navigate('/')}>
        Return to Home
      </DSButton>
    </Box>
  );
}

export default NotFound;