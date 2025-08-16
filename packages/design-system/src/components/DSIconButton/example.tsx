import React from 'react';
import { DSIconButton } from './DSIconButton';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';

export const DSIconButtonExample: React.FC = () => {
  return (
    <div style={{ padding: '20px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      {/* Basic usage */}
      <DSIconButton>
        <SearchIcon />
      </DSIconButton>

      {/* Different variants */}
      <DSIconButton buttonVariant="tonal">
        <FavoriteIcon />
      </DSIconButton>

      <DSIconButton buttonVariant="outlined">
        <SettingsIcon />
      </DSIconButton>

      {/* Different sizes */}
      <DSIconButton buttonSize="small">
        <SearchIcon />
      </DSIconButton>

      <DSIconButton buttonSize="standard">
        <SearchIcon />
      </DSIconButton>

      {/* Loading state */}
      <DSIconButton loading>
        <SearchIcon />
      </DSIconButton>

      {/* Disabled state */}
      <DSIconButton disabled>
        <SearchIcon />
      </DSIconButton>
    </div>
  );
};

export default DSIconButtonExample;
