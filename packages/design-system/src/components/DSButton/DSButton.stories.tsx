import type { Meta, StoryObj } from '@storybook/react';
import { DSButton } from './DSButton';
import { Add, ArrowBack, Home, Settings } from '@mui/icons-material';

const meta: Meta<typeof DSButton> = {
  title: 'Components/DSButton',
  component: DSButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    buttonVariant: {
      control: { type: 'select' },
      options: ['filled', 'tonal', 'outlined', 'text'],
    },
    buttonSize: {
      control: { type: 'select' },
      options: ['standard', 'small'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    startIcon: {
      control: { type: 'select' },
      options: ['none', 'add', 'home', 'settings'],
      mapping: {
        none: undefined,
        add: <Add />,
        home: <Home />,
        settings: <Settings />,
      },
    },
    endIcon: {
      control: { type: 'select' },
      options: ['none', 'arrow', 'settings'],
      mapping: {
        none: undefined,
        arrow: <ArrowBack />,
        settings: <Settings />,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    children: 'متن دکمه',
    buttonVariant: 'filled',
    buttonSize: 'small',
  },
};

export const Tonal: Story = {
  args: {
    children: 'متن دکمه',
    buttonVariant: 'tonal',
    buttonSize: 'small',
  },
};

export const Outlined: Story = {
  args: {
    children: 'متن دکمه',
    buttonVariant: 'outlined',
    buttonSize: 'small',
  },
};

export const Text: Story = {
  args: {
    children: 'متن دکمه',
    buttonVariant: 'text',
    buttonSize: 'small',
  },
};

export const Standard: Story = {
  args: {
    children: 'متن دکمه',
    buttonSize: 'standard',
    buttonVariant: 'filled',
  },
};

export const Small: Story = {
  args: {
    children: 'متن دکمه',
    buttonSize: 'small',
    buttonVariant: 'filled',
  },
};

export const Loading: Story = {
  args: {
    children: 'متن دکمه',
    buttonVariant: 'filled',
    buttonSize: 'small',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'متن دکمه',
    disabled: true,
    buttonVariant: 'filled',
  },
};

export const WithStartIcon: Story = {
  args: {
    children: 'متن دکمه',
    buttonVariant: 'filled',
    buttonSize: 'small',
    startIcon: <Add />,
  },
};

export const WithEndIcon: Story = {
  args: {
    children: 'متن دکمه',
    buttonVariant: 'filled',
    buttonSize: 'small',
    endIcon: <ArrowBack />,
  },
};

export const WithBothIcons: Story = {
  args: {
    children: 'متن دکمه',
    buttonVariant: 'filled',
    buttonSize: 'small',
    startIcon: <Home />,
    endIcon: <ArrowBack />,
  },
};
