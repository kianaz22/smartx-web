import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import { 
  Home as HomeIcon,
  BarChart as ReportIcon,
  Mail as ManagementIcon,
  ShoppingBag as DashboardIcon,
  CalendarToday as ScheduleIcon,
  History as HistoryIcon,
  CloudQueue as CloudIcon,
  Settings as SettingsIcon,
  Person as PersonIcon,
  Business as BusinessIcon,
  Store as StoreIcon,
} from '@mui/icons-material';
import { DSNavigation } from './DSNavigation';
import type { NavigationItem } from './DSNavigation';
import { theme } from '../../theme';

// Default navigation items
const defaultNavigationItems: NavigationItem[] = [
  {
    id: 'home',
    label: 'خانه',
    icon: <HomeIcon />,
  },
  {
    id: 'report',
    label: 'گزارش',
    icon: <ReportIcon />,
  },
  {
    id: 'management',
    label: 'مدیریت',
    icon: <ManagementIcon />,
  },
  {
    id: 'dashboard',
    label: 'داشبورد',
    icon: <DashboardIcon />,
  },
  {
    id: 'schedule',
    label: 'زمانبندی',
    icon: <ScheduleIcon />,
    badge: 3,
  },
  {
    id: 'history',
    label: 'تاریخچه',
    icon: <HistoryIcon />,
  },
  {
    id: 'sales',
    label: 'فروش',
    icon: <CloudIcon />,
    children: [
      { id: 'sales-reports', label: 'گزارشات', icon: <ReportIcon /> },
      { id: 'sales-history', label: 'تاریخچه', icon: <HistoryIcon /> },
      { id: 'sales-support', label: 'پشتیبانی', icon: <ManagementIcon /> },
    ],
  },
];

// Custom navigation items for demonstration
const customNavigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    label: 'داشبورد',
    icon: <DashboardIcon />,
  },
  {
    id: 'users',
    label: 'کاربران',
    icon: <PersonIcon />,
    badge: 5,
  },
  {
    id: 'settings',
    label: 'تنظیمات',
    icon: <SettingsIcon />,
    children: [
      { id: 'general', label: 'عمومی', icon: <SettingsIcon /> },
      { id: 'security', label: 'امنیت', icon: <SettingsIcon /> },
      { id: 'notifications', label: 'اعلان‌ها', icon: <SettingsIcon /> },
    ],
  },
  {
    id: 'reports',
    label: 'گزارشات',
    icon: <ReportIcon />,
  },
];

const meta: Meta<typeof DSNavigation> = {
  title: 'Components/DSNavigation',
  component: DSNavigation,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A responsive navigation component that displays as a static sidebar on desktop and a collapsible drawer on mobile. Supports RTL layout, Persian text, and configurable navigation items via props.',
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Box sx={{ 
          height: '100vh', 
          display: 'flex',
          backgroundColor: '#F5F5F5',
          position: 'relative'
        }}>
          <Story />
          <Box sx={{ flexGrow: 1, p: 3 }}>
            <Box sx={{ 
              backgroundColor: 'white', 
              p: 3, 
              borderRadius: 2,
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: 2
            }}>
              <h2>{theme.direction === 'rtl' ? "محتوای اصلی" : "Main Content Area"}</h2>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    activeItem: {
      control: 'text',
      description: 'The currently active navigation item ID',
    },
    navigationItems: {
      control: false,
      description: 'Array of navigation items to display (required)',
    },
    headerTitle: {
      control: 'text',
      description: 'Title displayed in the header (desktop only)',
    },
    headerIcon: {
      control: false,
      description: 'Icon displayed next to the title in the header (desktop only)',
    },
    onItemClick: {
      action: 'item clicked',
      description: 'Callback fired when a navigation item is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DSNavigation>;

export const Desktop: Story = {
  args: {
    activeItem: 'sales-history',
    navigationItems: defaultNavigationItems,
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const Mobile: Story = {
  args: {
    activeItem: 'home',
    navigationItems: defaultNavigationItems,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const WithCustomItems: Story = {
  args: {
    activeItem: 'users',
    navigationItems: customNavigationItems,
  },
  parameters: {
    docs: {
      description: {
        story: 'Navigation component with custom navigation items passed as props.',
      },
    },
  },
};

export const WithCustomItemsMobile: Story = {
  args: {
    activeItem: 'settings',
    navigationItems: customNavigationItems,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Mobile navigation with custom navigation items.',
      },
    },
  },
};

export const WithCustomHeader: Story = {
  args: {
    activeItem: 'home',
    navigationItems: defaultNavigationItems,
    headerTitle: 'رستوران شیلا',
    headerIcon: <StoreIcon />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Navigation with custom header title and icon.',
      },
    },
  },
};

export const WithBusinessHeader: Story = {
  args: {
    activeItem: 'dashboard',
    navigationItems: customNavigationItems,
    headerTitle: 'پنل مدیریت',
    headerIcon: <BusinessIcon />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Navigation with business-themed header.',
      },
    },
  },
};
