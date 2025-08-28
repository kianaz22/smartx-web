import { Input } from './Input';
import { Box } from '@mui/material';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['outlined', 'filled', 'standard'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

export const Default = {
  args: {
    label: 'Label',
    placeholder: 'Enter text here',
  },
};

export const Outlined = {
  args: {
    label: 'Outlined Input',
    placeholder: 'Outlined variant',
    variant: 'outlined',
  },
};

export const Filled = {
  args: {
    label: 'Filled Input',
    placeholder: 'Filled variant',
    variant: 'filled',
  },
};

export const Standard = {
  args: {
    label: 'Standard Input',
    placeholder: 'Standard variant',
    variant: 'standard',
  },
};

export const Small = {
  args: {
    label: 'Small Input',
    placeholder: 'Small size',
    size: 'small',
  },
};

export const Large = {
  args: {
    label: 'Large Input',
    placeholder: 'Large size',
    size: 'large',
  },
};

export const WithHelperText = {
  args: {
    label: 'Input with Helper Text',
    placeholder: 'Enter your email',
    helperText: 'We will never share your email with anyone else.',
    type: 'email',
  },
};

export const WithError = {
  args: {
    label: 'Input with Error',
    placeholder: 'Enter your name',
    helperText: 'This field is required',
    error: true,
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
  },
};

export const Required = {
  args: {
    label: 'Required Input',
    placeholder: 'This field is required',
    required: true,
  },
};

export const Password = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
  },
};

export const Number = {
  args: {
    label: 'Number Input',
    placeholder: 'Enter a number',
    type: 'number',
  },
};

export const Email = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const MultipleInputs = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 300 }}>
      <Input label="First Name" placeholder="Enter first name" />
      <Input label="Last Name" placeholder="Enter last name" />
      <Input label="Email" placeholder="Enter email" type="email" />
      <Input label="Password" placeholder="Enter password" type="password" />
    </Box>
  ),
}; 