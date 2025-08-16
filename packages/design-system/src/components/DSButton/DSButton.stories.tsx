import type { Meta, StoryObj } from '@storybook/react';
import { DSButton } from './DSButton';

const meta = {
  title: 'Components/DSButton',
  component: DSButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['contained', 'outlined', 'text'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof DSButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'contained',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'contained',
    color: 'secondary',
  },
};

export const Outlined: Story = {
  args: {
    children: 'Outlined Button',
    variant: 'outlined',
    color: 'primary',
  },
};

export const Text: Story = {
  args: {
    children: 'Text Button',
    variant: 'text',
    color: 'primary',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'small',
    variant: 'contained',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'large',
    variant: 'contained',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
    variant: 'contained',
  },
};