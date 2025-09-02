import { useState } from 'react';
import { Typography, Box, TextField, Alert, CircularProgress, Rating } from '@mui/material';
import { DSButton, DSCard } from '@design-system/components';
import { usePing } from '@api-client/index';
import { useDebounce, useLocalStorage } from '@shared-hooks/index';

function Home() {
  const [feedback, setFeedback] = useState('');
  const debouncedFeedback = useDebounce(feedback, 500);
  const [savedRating, setSavedRating] = useLocalStorage('evaluationRating', 0);
  const { data: pingData, isLoading: isPingLoading, error: pingError } = usePing();

  const handleRatingChange = (_event: unknown, value: number | null) => {
    setSavedRating(value || 0);
  };

  const handleClearRating = () => {
    setSavedRating(0);
    setFeedback('');
  };

  return (
    <Box>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        SmartX Evaluation
      </Typography>
      
      <Typography variant="h6" gutterBottom align="center" color="text.secondary">
        {import.meta.env.VITE_APP_NAME || 'SmartX Evaluation'} - Demo Application
      </Typography>

      <Box sx={{ display: 'grid', gap: 3, mt: 4 }}>
        <DSCard title="Design System Demo" subtitle="Components from @smartx/design-system">
          <Box sx={{ display: 'flex', gap: 2, mt: 2, flexWrap: 'wrap' }}>
            <DSButton variant="contained" color="primary">
              Evaluate
            </DSButton>
            <DSButton variant="outlined" color="secondary">
              Review
            </DSButton>
            <DSButton variant="text" color="success">
              Submit
            </DSButton>
          </Box>
        </DSCard>

        <DSCard title="Evaluation Form Demo" subtitle="Using @smartx/shared-hooks">
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" gutterBottom>
              Rate your experience:
            </Typography>
            <Rating
              value={savedRating}
              onChange={handleRatingChange}
              size="large"
              sx={{ mb: 2 }}
            />
            
            <TextField
              fullWidth
              label="Provide feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Type your feedback..."
              variant="outlined"
              multiline
              rows={3}
              size="small"
            />
            
            <Typography variant="body2" sx={{ mt: 2 }}>
              Debounced feedback (500ms): <strong>{debouncedFeedback || '(empty)'}</strong>
            </Typography>
            
            <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
              <DSButton 
                size="small" 
                disabled={!feedback && savedRating === 0}
              >
                Submit Evaluation
              </DSButton>
              <DSButton 
                size="small" 
                variant="outlined"
                onClick={handleClearRating}
                disabled={savedRating === 0 && !feedback}
              >
                Clear Form
              </DSButton>
            </Box>
            
            {savedRating > 0 && (
              <Alert severity="info" sx={{ mt: 2 }}>
                Current rating saved: <strong>{savedRating} stars</strong>
              </Alert>
            )}
          </Box>
        </DSCard>

        <DSCard title="API Status" subtitle="Using @smartx/api-client with React Query">
          <Box sx={{ mt: 2 }}>
            {isPingLoading && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <CircularProgress size={20} />
                <Typography>Checking API status...</Typography>
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

        <DSCard title="Environment Configuration">
          <Typography variant="body2">
            <strong>App Name:</strong> {import.meta.env.VITE_APP_NAME || 'Not configured'}
          </Typography>
          <Typography variant="body2">
            <strong>API URL:</strong> {import.meta.env.VITE_API_BASE_URL || 'Not configured'}
          </Typography>
          <Typography variant="body2">
            <strong>Build Mode:</strong> {import.meta.env.MODE}
          </Typography>
          <Typography variant="body2">
            <strong>Production:</strong> {import.meta.env.PROD ? 'Yes' : 'No'}
          </Typography>
        </DSCard>
      </Box>
    </Box>
  );
}

export default Home;