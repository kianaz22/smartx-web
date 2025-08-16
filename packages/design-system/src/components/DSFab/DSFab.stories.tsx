import type { Meta, StoryObj } from '@storybook/react';
import { DSFab } from './DSFab';
import { Add as AddIcon, Star as StarIcon, Favorite as FavoriteIcon } from '@mui/icons-material';

const meta: Meta<typeof DSFab> = {
  title: 'Components/DSFab',
  component: DSFab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    fabVariant: {
      control: { type: 'select' },
      options: ['filled', 'tonal', 'outlined'],
    },
    fabSize: {
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
    children: <AddIcon />,
  },
};

export const Filled: Story = {
  args: {
    fabVariant: 'filled',
    children: <AddIcon />,
  },
};

export const Tonal: Story = {
  args: {
    fabVariant: 'tonal',
    children: <StarIcon />,
  },
};

export const Outlined: Story = {
  args: {
    fabVariant: 'outlined',
    children: <FavoriteIcon />,
  },
};

export const Small: Story = {
  args: {
    fabSize: 'small',
    children: <AddIcon />,
  },
};

export const Standard: Story = {
  args: {
    fabSize: 'standard',
    children: <AddIcon />,
  },
};



export const Loading: Story = {
  args: {
    loading: true,
    children: <AddIcon />,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: <AddIcon />,
  },
};


