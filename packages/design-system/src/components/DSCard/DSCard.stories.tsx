import type { Meta, StoryObj } from '@storybook/react';
import { DSCard } from './DSCard';
import { DSButton } from '../DSButton';
import { Typography } from '@mui/material';

const meta = {
  title: 'Components/DSCard',
  component: DSCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    elevation: {
      control: { type: 'range', min: 0, max: 24 },
    },
  },
} satisfies Meta<typeof DSCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'This is a card subtitle',
    children: (
      <Typography variant="body2">
        This is the card content. You can put any content here.
      </Typography>
    ),
  },
};

export const WithActions: Story = {
  args: {
    title: 'Card with Actions',
    subtitle: 'This card has action buttons',
    children: (
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
      </Typography>
    ),
    actions: (
      <>
        <DSButton size="small" variant="text">
          Cancel
        </DSButton>
        <DSButton size="small" variant="contained">
          Confirm
        </DSButton>
      </>
    ),
  },
};

export const SimpleContent: Story = {
  args: {
    children: (
      <Typography variant="body1">
        Simple card with only content, no title or actions.
      </Typography>
    ),
  },
};

export const ElevatedCard: Story = {
  args: {
    title: 'Elevated Card',
    subtitle: 'This card has higher elevation',
    elevation: 8,
    children: (
      <Typography variant="body2">
        This card appears more elevated from the surface.
      </Typography>
    ),
  },
};

export const ComplexContent: Story = {
  args: {
    title: 'Dashboard Widget',
    subtitle: 'Monthly Statistics',
    children: (
      <div>
        <Typography variant="h3" color="primary" gutterBottom>
          1,234
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Total active users this month
        </Typography>
        <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
          ↑ 12% from last month
        </Typography>
      </div>
    ),
    actions: (
      <DSButton size="small" variant="text">
        View Details
      </DSButton>
    ),
  },
};