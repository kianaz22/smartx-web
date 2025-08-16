import type { Meta, StoryObj } from '@storybook/react';
import { DSIconButton } from './DSIconButton';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';

const meta: Meta<typeof DSIconButton> = {
  title: 'Components/DSIconButton',
  component: DSIconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    buttonVariant: {
      control: { type: 'select' },
      options: ['filled', 'tonal', 'outlined', 'text'],
    },
    buttonSize: {
      control: { type: 'select' },
      options: ['small', 'standard'],
    },
    loading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <SearchIcon />,
  },
};

export const Filled: Story = {
  args: {
    buttonVariant: 'filled',
    children: <SearchIcon />,
  },
};

export const Tonal: Story = {
  args: {
    buttonVariant: 'tonal',
    children: <FavoriteIcon />,
  },
};

export const Outlined: Story = {
  args: {
    buttonVariant: 'outlined',
    children: <SettingsIcon />,
  },
};

export const Text: Story = {
  args: {
    buttonVariant: 'text',
    children: <SettingsIcon />,
  },
};

export const Small: Story = {
  args: {
    buttonSize: 'small',
    children: <SearchIcon />,
  },
};

export const Standard: Story = {
  args: {
    buttonSize: 'standard',
    children: <SearchIcon />,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: <SearchIcon />,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: <SearchIcon />,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <DSIconButton buttonVariant="filled">
        <SearchIcon />
      </DSIconButton>
      <DSIconButton buttonVariant="tonal">
        <FavoriteIcon />
      </DSIconButton>
      <DSIconButton buttonVariant="outlined">
        <SettingsIcon />
      </DSIconButton>
      <DSIconButton buttonVariant="text">
        <SettingsIcon />
      </DSIconButton>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <DSIconButton buttonSize="small">
        <SearchIcon />
      </DSIconButton>
      <DSIconButton buttonSize="standard">
        <SearchIcon />
      </DSIconButton>
    </div>
  ),
};
