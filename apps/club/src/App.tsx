import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;