import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  IconButton,
  Collapse,
  Badge,
  useTheme,
  useMediaQuery,
  styled,
} from '@mui/material';
import {
  ExpandLess,
  ExpandMore,
  Menu as MenuIcon,
  Close as CloseIcon,
  CloudQueue as CloudIcon,
} from '@mui/icons-material';

// Styled components for custom styling
const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})<{ isMobile?: boolean }>(({ theme, isMobile }) => ({
  '& .MuiDrawer-paper': {
    width: isMobile ? '70%' : 280,
    backgroundColor: '#ffffff',
    border: 'none',
    boxShadow: isMobile ? theme.shadows[8] : 'none',
    position: isMobile ? 'fixed' : 'relative',
    height: isMobile ? '100vh' : '100%',
    right: 0,
    left: 'auto',
  },
}));

const HeaderBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const LogoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const StyledListItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => !['isActive', 'isSubItem'].includes(prop as string),
})<{ isActive?: boolean; isSubItem?: boolean }>(({ theme, isActive, isSubItem }) => ({
  margin: theme.spacing(0.5, 1),
  borderRadius: theme.spacing(1),
  backgroundColor: isActive ? '#E8F5E9' : 'transparent',
  '&:hover': {
    backgroundColor: isActive ? '#E8F5E9' : theme.palette.action.hover,
  },
  paddingRight: isSubItem ? theme.spacing(4) : theme.spacing(1.5),
  paddingLeft: theme.spacing(1.5),
  justifyContent: 'flex-start', // Keep items aligned to start, not spaced between
  '& .MuiListItemIcon-root': {
    minWidth: 24,
    width: 24,
    height: 24,
    color: isActive ? '#4CAF50' : theme.palette.text.secondary,
    marginLeft: 0,
    marginRight: 0,
  },
  '& .MuiListItemText-root': {
    marginLeft: 0,
    marginRight: theme.spacing(1),
    flex: 'none', // Don't let text take up remaining space
  },
  gap: theme.spacing(2), // Add gap between icon and text (16px)
  '& .MuiListItemText-primary': {
    color: isActive ? '#2E7D32' : theme.palette.text.primary,
    fontWeight: isActive ? 600 : 400,
    textAlign: 'right',
  },
}));

const SubItemContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    right: theme.spacing(3),
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: theme.palette.divider,
  },
}));

const HelpSection = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: '#E8F5E9',
  borderRadius: theme.spacing(1),
  border: `1px solid #C8E6C9`,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

// Navigation data structure
export interface NavigationItem {
  id: string;
  label: string;
  icon: React.ReactElement;
  badge?: number;
  children?: NavigationItem[];
}

interface DSNavigationProps {
  open?: boolean;
  onClose?: () => void;
  activeItem?: string;
  onItemClick?: (itemId: string) => void;
  navigationItems: NavigationItem[];
  headerTitle?: string;
  headerIcon?: React.ReactElement;
}

export const DSNavigation: React.FC<DSNavigationProps> = ({
  open: controlledOpen,
  onClose,
  activeItem,
  onItemClick,
  navigationItems,
  headerTitle = 'اسمارت ایکس',
  headerIcon = <CloudIcon />,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [internalOpen, setInternalOpen] = useState(false);
  
  // Initialize expanded items based on navigation items that have children
  const initialExpandedItems = navigationItems
    .filter(item => item.children && item.children.length > 0)
    .map(item => item.id);
  const [expandedItems, setExpandedItems] = useState<string[]>(initialExpandedItems);

  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const handleToggle = () => {
    if (controlledOpen !== undefined) {
      onClose?.();
    } else {
      setInternalOpen(!internalOpen);
    }
  };

  const handleItemClick = (itemId: string) => {
    onItemClick?.(itemId);
    
    // Handle expandable items
    const item = navigationItems.find(item => item.id === itemId);
    if (item?.children) {
      setExpandedItems(prev => 
        prev.includes(itemId) 
          ? prev.filter(id => id !== itemId)
          : [...prev, itemId]
      );
    }
  };

  const renderNavigationItem = (item: NavigationItem, isSubItem = false) => {
    const isActive = activeItem === item.id;
    const isExpanded = expandedItems.includes(item.id);
    const hasChildren = item.children && item.children.length > 0;

    return (
      <React.Fragment key={item.id}>
        <ListItem disablePadding>
          <StyledListItemButton
            isActive={isActive}
            isSubItem={isSubItem}
            onClick={() => handleItemClick(item.id)}
          >
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.label}
              primaryTypographyProps={{
                fontSize: '0.875rem',
              }}
            />
            {item.badge && (
              <Badge 
                badgeContent={item.badge} 
                color="warning"
                sx={{ ml: 1 }}
              />
            )}
            {hasChildren && (
              <Box sx={{ ml: 1 }}>
                {isExpanded ? <ExpandLess /> : <ExpandMore />}
              </Box>
            )}
          </StyledListItemButton>
        </ListItem>
        
        {hasChildren && (
          <Collapse in={isExpanded} timeout="auto" unmountOnExit>
            <SubItemContainer>
              {item.children?.map(child => renderNavigationItem(child, true))}
            </SubItemContainer>
          </Collapse>
        )}
      </React.Fragment>
    );
  };

  const drawerContent = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <HeaderBox>
        <LogoBox>
          <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>
            {isMobile ? 'منو' : headerTitle}
          </Typography>
          {!isMobile && (
            <Box sx={{ color: '#8BC34A' }}>
              {headerIcon}
            </Box>
          )}
        </LogoBox>
        {isMobile && (
          <IconButton onClick={handleToggle} size="small">
            <CloseIcon />
          </IconButton>
        )}
      </HeaderBox>



      {/* Navigation Items */}
      <List sx={{ flexGrow: 1, py: 1 }}>
        {navigationItems.map(item => renderNavigationItem(item))}
      </List>
    </Box>
  );

  if (isMobile) {
    return (
      <>
        {/* Hamburger Menu Button */}
        <IconButton
          onClick={handleToggle}
          sx={{ 
            position: 'fixed',
            top: 16,
            left: 16,
            zIndex: theme.zIndex.drawer + 1,
            backgroundColor: 'white',
            boxShadow: 2,
            '&:hover': {
              backgroundColor: 'grey.100',
            }
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Drawer */}
        <StyledDrawer
          isMobile={true}
          anchor="right"
          open={isOpen}
          onClose={handleToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
        >
          {drawerContent}
        </StyledDrawer>
      </>
    );
  }

  // Desktop - Static Sidebar
  return (
    <StyledDrawer
      isMobile={false}
      variant="permanent"
      anchor="right"
      open={true}
    >
      {drawerContent}
    </StyledDrawer>
  );
};

export default DSNavigation;
