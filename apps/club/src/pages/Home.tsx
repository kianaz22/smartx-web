import { useState } from 'react';
import { Typography, Box, TextField, Alert, CircularProgress } from '@mui/material';
import { DSButton, DSCard } from '@design-system/components';
import { usePing } from '@api-client/index';
import { useDebounce, useLocalStorage } from '@shared-hooks/index';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [savedName, setSavedName, removeSavedName] = useLocalStorage('clubUserName', '');
  const { data: pingData, isLoading: isPingLoading, error: pingError } = usePing();

  const handleSaveName = () => {
    setSavedName(searchTerm);
  };

  const handleClearName = () => {
    removeSavedName();
    setSearchTerm('');
  };

  return (
    <Box>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        SmartX Club
      </Typography>
      
      <Typography variant="h6" gutterBottom align="center" color="text.secondary">
        {import.meta.env.VITE_APP_NAME || 'SmartX Club'} - Demo Application
      </Typography>

      <Box sx={{ display: 'grid', gap: 3, mt: 4 }}>
        <DSCard title="Design System Demo" subtitle="Components from @smartx/design-system">
          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            <DSButton variant="contained" color="primary">
              Primary Button
            </DSButton>
            <DSButton variant="outlined" color="secondary">
              Secondary Button
            </DSButton>
            <DSButton variant="text">
              Text Button
            </DSButton>
          </Box>
        </DSCard>

        <DSCard title="Shared Hooks Demo" subtitle="Using @smartx/shared-hooks">
          <Box sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Enter your name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Type something..."
              variant="outlined"
              size="small"
            />
            
            <Typography variant="body2" sx={{ mt: 2 }}>
              Debounced value (500ms): <strong>{debouncedSearchTerm || '(empty)'}</strong>
            </Typography>
            
            <Box sx={{ mt: 2, display: 'flex', gap: 2, alignItems: 'center' }}>
              <DSButton 
                size="small" 
                onClick={handleSaveName}
                disabled={!searchTerm}
              >
                Save to LocalStorage
              </DSButton>
              <DSButton 
                size="small" 
                variant="outlined"
                onClick={handleClearName}
                disabled={!savedName}
              >
                Clear Storage
              </DSButton>
            </Box>
            
            {savedName && (
              <Alert severity="success" sx={{ mt: 2 }}>
                Saved name in localStorage: <strong>{savedName}</strong>
              </Alert>
            )}
          </Box>
        </DSCard>

        <DSCard title="API Client Demo" subtitle="Using @smartx/api-client with React Query">
          <Box sx={{ mt: 2 }}>
            {isPingLoading && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <CircularProgress size={20} />
                <Typography>Loading API status...</Typography>
              </Box>
            )}
            
            {pingError && (
              <Alert severity="error">
                Error connecting to API: {pingError.message}
              </Alert>
            )}
            
            {pingData && (
              <Alert severity="success">
                <Typography variant="body2">
                  <strong>API Status:</strong> {pingData.status}
                </Typography>
                <Typography variant="body2">
                  <strong>Message:</strong> {pingData.message}
                </Typography>
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                  Last checked: {new Date(pingData.timestamp).toLocaleTimeString()}
                </Typography>
              </Alert>
            )}
          </Box>
        </DSCard>

        <DSCard title="Environment Info">
          <Typography variant="body2">
            <strong>App Name:</strong> {import.meta.env.VITE_APP_NAME || 'Not set'}
          </Typography>
          <Typography variant="body2">
            <strong>API URL:</strong> {import.meta.env.VITE_API_BASE_URL || 'Not set'}
          </Typography>
          <Typography variant="body2">
            <strong>Mode:</strong> {import.meta.env.MODE}
          </Typography>
        </DSCard>
      </Box>
    </Box>
  );
}

export default Home;